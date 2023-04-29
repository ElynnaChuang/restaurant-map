import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { ReportProblem } from '@mui/icons-material';
import { Map } from '../../components/Map';
import { List } from '../../components/List';

import styles from './styles.module.scss';

export const HomePage = () => {
  const [allowPositioning, setAllowPositioning] = useState(true);
  const [userPosition, setUserPosition] = useState(null);
  const [positionData, setPositionData] = useState([]);
  const [clickedId, setClickedId] = useState(null);

  useEffect(() => {
    if (userPosition) return;
    navigator.geolocation.getCurrentPosition(
      pos => {
        setAllowPositioning(true);
        const { latitude, longitude } = pos.coords;
        setUserPosition({ lat: latitude, lng: longitude });
      },
      err => {
        setAllowPositioning(false);
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
    );
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What to Eat ?</h2>
      <div className={styles.container}>
        {!allowPositioning && (
          <div className={styles.error}>
            <h3>
              <ReportProblem sx={{ fontSize: 40 }} />
              無定位權限
            </h3>
          </div>
        )}
        {allowPositioning && !userPosition && (
          <div className={styles.progress}>
            <h3>定位中</h3>
            <CircularProgress />
          </div>
        )}
        {allowPositioning && userPosition && (
          <>
            <div className={styles.left_part}>
              <Map
                userPosition={userPosition}
                setData={setPositionData}
                setClickedId={setClickedId}
              />
            </div>
            <div className={styles.right_part}>
              <List data={positionData} clickedId={clickedId} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
