import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import defaultBg from '../../../assets/restaurant_placeholder.png';
import styles from './style.module.scss';

export const ModalContent = ({ onClose, data }) => {
  const { name, coverImage, address, rating, totalRateUser } = data;

  return (
    <div className={styles.container}>
      <div
        className={styles.backDrop}
        role='button'
        tabIndex='0'
        aria-label='backdrop'
        onClick={() => onClose?.()}
      />
      <div className={styles.card} role='button'>
        <div className={styles.card_img}>
          <div className={styles.img_container}>
            <img src={coverImage || defaultBg} alt='...' />
          </div>
        </div>
        <h5 className={styles.header}>{name}</h5>
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
      </div>
    </div>
  );
};
