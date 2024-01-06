import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/AddButton.module.css';

// eslint-disable-next-line react/prop-types
export default function AddButton({ needsMargin, onClick, id }) {
  return (
    <button
      id={id}
      type="button"
      className={styles.button + (needsMargin ? ' ' + styles['top-margin'] : '')}
      onClick={() => onClick(id)}
    >
      <FontAwesomeIcon icon={faPlus} color="#232f39" size="2x" />
    </button>
  );
}
