// import { useEffect } from 'react';
import styles from './styles.module.scss';

export const HomePage = () => {
  // useEffect(() => {
  //   const dataUrl =
  //     'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0338,121.5646&radius=1000&keyword=牛排&language=zh-TW&key=AIzaSyBal6z7PoKHLuzTLGEQ-QBMl5Iu5wTXtW0';

  //   const getData = async () => {
  //     // let dataArray = [];
  //     try {
  //       const res = await fetch(dataUrl);
  //       console.log(res);
  //       // const data = await res.json();
  //       // dataArray = data.map((el, i) => ({ id: i, ...el }));
  //     } catch (err) {
  //       console.error('Error');
  //     }
  //   };
  //   getData();
  // });
  return (
    <section className={styles.section}>
      <h2>Home Page</h2>
    </section>
  );
};
