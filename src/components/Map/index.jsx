import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';

const libraries = ['places'];

export const Map = ({ userPosition, setData, setClickedId }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const center = useRef(userPosition).current;

  const [markers, setMarkers] = useState([]);
  const setResultData = useCallback(setData, []);
  const onMapLoad = map => {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: 1000,
      type: ['restaurant'],
      openNow: true,
    };
    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        const data = results.map(result => {
          const id = result.place_id;
          const { name, vicinity, rating } = result;
          const coverImage = result.photos?.[0].getUrl() || null;
          const totalRateUser = result.user_ratings_total;

          return {
            id,
            name,
            coverImage,
            rating,
            totalRateUser,
            address: vicinity,
          };
        });

        setResultData(data);

        const newMarkers = results.map(result => {
          const id = result.place_id;
          const position = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          };

          return { id, position };
        });
        setMarkers(newMarkers);
      }
    });
  };

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
          onLoad={onMapLoad}
        >
          {markers.map(({ id, position }) => (
            <MarkerF key={id} position={position} onClick={() => setClickedId?.(id)} />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
