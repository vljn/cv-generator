import styles from '../styles/ExperienceInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

// eslint-disable-next-line react/prop-types
export default function EducationInput({ lang, id, onChange, onDelete }) {
  return (
    <div className={styles.wrapper}>
      <Input
        id={'experience-' + id + '-company'}
        label={lang === 'eng' ? 'Company Name' : 'Naziv Kompanije'}
        type="text"
        onChange={onChange}
      />
      <Input
        id={'experience-' + id + '-title'}
        label={lang === 'eng' ? 'Position Title' : 'Pozicija'}
        type="text"
        onChange={onChange}
      />
      <Input
        id={'experience-' + id + '-dateStart'}
        label={lang === 'eng' ? 'Date Started' : 'Datum početka'}
        type="date"
        onChange={onChange}
      />
      <Input
        id={'experience-' + id + '-dateEnd'}
        label={lang === 'eng' ? 'Date Ended' : 'Datum kraja'}
        type="date"
        onChange={onChange}
      />
      <Input
        id={'experience-' + id + '-description'}
        label={lang === 'eng' ? 'Responsibilities/Description' : 'Odgovornost/Opis'}
        type="textarea"
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faTrashCan} onClick={() => onDelete({ type: 'experience', id: id })} />
    </div>
  );
}
