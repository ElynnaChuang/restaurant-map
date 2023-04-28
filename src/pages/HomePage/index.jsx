import { useState } from 'react';
import { Map } from '../../components/Map';

import styles from './styles.module.scss';
import { List } from '../../components/List';

export const HomePage = () => {
  const [positionData, setPositionData] = useState([]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>你附近的美食</h2>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <Map setData={setPositionData} />
        </div>
        <div className={styles.right_part}>
          <List data={positionData} />
        </div>
      </div>
    </section>
  );
};
