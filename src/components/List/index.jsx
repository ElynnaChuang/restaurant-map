import { useMemo, useState } from 'react';
import { DrawBox } from '../DrawBox';
import { Card } from '../Card';

import styles from './styles.module.scss';

const MAX_OPTION = 6;

export const List = ({ data, clickedId }) => {
  const positionData = useMemo(() => data, [data]);
  const [drawData, setDrawData] = useState([]);

  const handleAddToDraw = id => {
    if (drawData.length >= MAX_OPTION) return alert(`選項最多${MAX_OPTION}個`);

    const isExisted = drawData.some(el => el.id === id);
    if (isExisted) return alert('該選項已經存在！');

    const addResult = positionData.find(el => el.id === id);
    return setDrawData(prev => [...prev, { ...addResult, selected: false }]);
  };
  return (
    <>
      <DrawBox max={MAX_OPTION} data={drawData} setData={setDrawData} />
      {!positionData.length ? (
        <div className={styles.no_result}>尚無結果</div>
      ) : (
        <div className={styles.cards}>
          {positionData.map(
            ({ id, name, coverImage, address, rating, totalRateUser }) => {
              return (
                <Card
                  key={id}
                  cardInfo={{ name, coverImage, address, rating, totalRateUser }}
                  onClick={() => handleAddToDraw(id)}
                  status={clickedId === id ? 'selected' : 'default'}
                />
              );
            },
          )}
        </div>
      )}
    </>
  );
};
