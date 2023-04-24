import { useState } from 'react';
import { Card } from '../../components/Card';
import { Map } from '../../components/Map';
import { DrawBox } from '../../components/DrawBox';

import styles from './styles.module.scss';

const MAX_OPTION = 6;

export const HomePage = () => {
  const [positionData, setPositionData] = useState([]);
  const [drawData, setDrawData] = useState([]);

  const handleAddToDraw = id => {
    if (drawData.length >= MAX_OPTION) return alert(`選項最多${MAX_OPTION}個`);

    const isExisted = drawData.some(el => el.id === id);
    if (isExisted) return alert('該選項已經存在！');

    const addResult = positionData.find(el => el.id === id);
    return setDrawData(prev => [...prev, { ...addResult, selected: false }]);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>你附近的美食</h2>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <Map setData={setPositionData} />
        </div>
        <div className={styles.right_part}>
          <DrawBox max={MAX_OPTION} data={drawData} setData={setDrawData} />
          <div className={styles.cards}>
            {positionData.map(
              ({ id, name, coverImage, address, rating, totalRateUser }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    title={name}
                    image={coverImage}
                    address={address}
                    rating={rating}
                    totalRateUser={totalRateUser}
                    onClick={() => handleAddToDraw(id)}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
