import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '../Button';
import { DrawModel } from '../DrawModel';

const getRandomNum = (min = 2, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const DrawBox = ({ max, data, setData }) => {
  const INTERVAL_DELAY = 100;
  const [animating, setAnimating] = useState(false);
  const [drawResult, setDrawResult] = useState(null);

  // 將選取狀態消除
  const handleOptionStatus = () => {
    const newArr = data.map(el => ({ ...el, selected: false }));
    setData(newArr);
  };

  const handleStartDrawing = () => {
    if (data.length <= 2) return alert('至少新增兩個選項');

    setAnimating(true);

    const timeout = getRandomNum(data.length * 5, data.length * 10) * INTERVAL_DELAY;
    return setTimeout(() => setAnimating(false), timeout);
  };

  const handleClearDrawBox = () => {
    return setData([]);
  };

  const handleRemove = id => {
    const newArr = data.filter(el => el.id !== id);
    return setData(newArr);
  };

  useEffect(() => {
    if (!animating) return () => {};

    let animateIndex = 0;
    const num = setInterval(() => {
      if (animateIndex > data.length - 1) animateIndex = 0;

      const newData = data.map((el, i) =>
        i === animateIndex ? { ...el, selected: true } : { ...el, selected: false },
      );
      setData(newData);

      animateIndex += 1;
    }, INTERVAL_DELAY);

    return () => {
      const resultIndex = animateIndex - 1;
      setDrawResult({ ...data[resultIndex] });
      clearInterval(num);
    };
  }, [animating]);

  return (
    <div className={styles.draw_box}>
      <div className={styles.draw_box_title}>籤筒({`選項最多${max}個`})</div>
      <div className={styles.draw_box_options}>
        {data.map(({ id, name, selected }) => {
          return (
            <div
              key={id}
              className={selected ? styles.option_active : styles.option_default}
            >
              <p>{name}</p>
              <Button
                content='移除'
                btnStyle='danger'
                size='s'
                onClick={() => handleRemove(id)}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.draw_box_controls}>
        <Button content='開始抽籤' onClick={handleStartDrawing} />
        <Button content='清空選項' btnStyle='danger' onClick={handleClearDrawBox} />
        {drawResult && (
          <DrawModel
            data={drawResult}
            setDrawResult={setDrawResult}
            handleOptionStatus={handleOptionStatus}
          />
        )}
      </div>
    </div>
  );
};
