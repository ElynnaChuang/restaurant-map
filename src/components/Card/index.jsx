import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import styles from './styles.module.scss';
import defaultBg from '../../assets/restaurant_placeholder.png';

export const Card = ({ cardInfo, status, onClick }) => {
  const { name, coverImage, address, rating, totalRateUser } = cardInfo;

  return (
    <div className={status === 'selected' ? styles.card_selected : styles.card_default}>
      <div className={styles.card_img}>
        <div className={styles.img_container}>
          <img src={coverImage || defaultBg} alt='...' />
        </div>
      </div>
      <div className={styles.card_body}>
        <div className={styles.title}>{name}</div>
        <div className={styles.tag}>
          <span>
            <FontAwesomeIcon icon={faStar} />
            {rating || '無'}
          </span>
          ({totalRateUser || 0})
        </div>
        <p className={styles.address}>
          <FontAwesomeIcon icon={faLocationDot} />
          {address}
        </p>
        <div className={styles.controls}>
          <Button
            content='加入籤筒'
            btnStyle='secondary'
            size='s'
            icon={<FontAwesomeIcon icon={faPlus} />}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

// address: "前鎮區光華三路229號"
// coverImage: "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUjq9jnkWEL6LZ1mjTolZDu7eyNKRjOfup_Og1lFhbKj9x-3svnrIbAqMghBH6tuO5GTVV6awEe531jOnsiA7Ex2VMDqGCB6Ia0KwoAbWmIyfiSgEUOTttQIZfy6LgIwhZOVHLCSahfUFPE7s7M42-sgGnpp6aLi3mMBD3DeVpRm6TEFLiVF&3u4032&5m1&2e1&callback=none&key=AIzaSyBal6z7PoKHLuzTLGEQ-QBMl5Iu5wTXtW0&token=95971"
// id: "ChIJp519hWYDbjQR4S8oXrp4JeI"
// name: "費奧納咖啡"
// rating: 4.4
// totalRateUser: 539
