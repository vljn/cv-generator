import styles from '../styles/EducationInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

// eslint-disable-next-line react/prop-types
export default function EducationInput({ lang, id, onChange, onDelete }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          id={'education-' + id + '-school'}
          label={lang === 'eng' ? 'School Name' : 'Naziv Škole'}
          type="text"
          onChange={onChange}
        />
        <Input
          id={'education-' + id + '-title'}
          label={lang === 'eng' ? 'Title Name' : 'Zvanje'}
          type="text"
          onChange={onChange}
        />
        <Input
          id={'education-' + id + '-dateStart'}
          label={lang === 'eng' ? 'Date Started' : 'Datum početka'}
          type="date"
          onChange={onChange}
        />
        <Input
          id={'education-' + id + '-dateEnd'}
          label={lang === 'eng' ? 'Date Ended' : 'Datum kraja'}
          type="date"
          onChange={onChange}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => onDelete({ type: 'education', id: id })}
        />
      </div>
    </>
  );
}
