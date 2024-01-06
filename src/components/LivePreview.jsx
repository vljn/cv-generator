/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/LivePreview.module.css';

export default function LivePreview({
  lang,
  name,
  phone,
  email,
  dateOfBirth,
  education,
  experience,
}) {
  return (
    <div className={styles.paper}>
      {name !== ' ' ? <h1>{name}</h1> : ''}
      {phone !== '' || email !== '' ? (
        <div className={styles.contacts}>
          {phone !== '' ? (
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>{phone}</p>
            </div>
          ) : null}
          {email !== '' ? (
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>{email}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      {dateOfBirth !== '' ? (
        <div>
          {lang === 'eng' ? 'Date Of Birth: ' : 'Datum Rođenja'}: {dateOfBirth}
        </div>
      ) : null}
      {education.length > 0
        ? education.map((element) => {
            return (
              <div key={element.id} className={styles.item}>
                {element.school !== '' ? <h3>School: {element.school}</h3> : null}
                {element.title !== '' ? <h4>Title: {element.title}</h4> : null}
                {element.dateStart !== '' ? <h4>Date Start: {element.dateStart}</h4> : null}
                {element.dateEnd !== '' ? <h4>Date End: {element.dateEnd}</h4> : null}
              </div>
            );
          })
        : null}
      {experience.length > 0
        ? experience.map((element) => {
            return (
              <div key={element.id} className={styles.item}>
                {element.company !== '' ? <h3>Company: {element.company}</h3> : null}
                {element.title !== '' ? <h4>Title: {element.title}</h4> : null}
                {element.dateStart !== '' ? <h4>Date Start: {element.dateStart}</h4> : null}
                {element.dateEnd !== '' ? <h4>Date End: {element.dateEnd}</h4> : null}
                {element.description !== '' ? (
                  <div>
                    <h4>Odgovornosti/Opis: </h4>
                    <p>{element.description}</p>
                  </div>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
}
