import styles from './styles.module.scss';

const Button = ({ icon, content, btnStyle, size, onClick }) => {
  const fontSize = size === 's' ? '0.8rem' : '1rem';
  const className = styles[btnStyle] || styles.primary;

  return (
    <button
      className={className}
      style={{ fontSize }}
      onClick={e => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {icon}
      {content}
    </button>
  );
};

export { Button };
