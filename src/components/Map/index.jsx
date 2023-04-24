import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import styles from './styles.module.scss';

const libraries = ['places'];
const location = { lat: 22.60913, lng: 120.317213 };

export const Map = ({ setData }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const center = useMemo(() => location, []);
  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
          onLoad={map => {
            const service = new window.google.maps.places.PlacesService(map);
            const request = {
              location: center,
              radius: 1000,
              type: ['restaurant'],
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

                setData(data);
              }
            });
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
