import Header from './Header';
import Form from './Form';
import Input from './Input';
import AddButton from './AddButton';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
import LivePreview from './LivePreview';
import styles from '../styles/App.module.css';
import { useState } from 'react';

let educationId = 0;
let experienceId = 0;

function App() {
  const [language, setLanguage] = useState('eng');
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    education: [],
    experience: [],
  });
  const fullName = person.firstName + ' ' + person.lastName;
  console.log(person);

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  function handleInputChange(e) {
    const { id, value } = e.target;

    if (id.includes('-')) {
      const [list, newId, listItem] = id.split('-');
      console.log(list, newId, listItem);
      if (list === 'education') {
        const newEducationArray = person.education.map((elem) => {
          if (elem.id === parseInt(newId)) {
            const newElement = { ...elem, [listItem]: value };
            return newElement;
          }
          return elem;
        });
        setPerson({ ...person, education: newEducationArray });
      }
      if (list === 'experience') {
        const newExperienceArray = person.experience.map((elem) => {
          if (elem.id === parseInt(newId)) {
            const newElement = { ...elem, [listItem]: value };
            return newElement;
          }
          return elem;
        });
        setPerson({ ...person, experience: newExperienceArray });
      }
    } else {
      setPerson({ ...person, [id]: value });
    }
  }

  function handleAddButtonClick(id) {
    if (id === 'education') {
      const newEducation = { id: educationId++, school: '', title: '', dateStart: '', dateEnd: '' };
      const newEducationArray = [...person.education, newEducation];
      setPerson({ ...person, education: newEducationArray });
    }
    if (id === 'experience') {
      const newExperience = {
        id: experienceId++,
        company: '',
        title: '',
        dateStart: '',
        dateEnd: '',
        description: '',
      };
      const newExperienceArray = [...person.experience, newExperience];
      setPerson({ ...person, experience: newExperienceArray });
    }
  }

  function handleDelete(deleted) {
    const newArray = person[deleted.type].filter((element) => element.id !== deleted.id);
    setPerson({ ...person, [deleted.type]: newArray });
  }

  return (
    <>
      <Header onLanguageChange={handleLanguageChange} />
      <div className={styles.main}>
        <Form heading={language === 'eng' ? 'General Information' : 'Opšti podaci'}>
          <Input
            id={'firstName'}
            label={language === 'eng' ? 'First Name' : 'Ime'}
            type={'text'}
            onChange={handleInputChange}
          />
          <Input
            id={'lastName'}
            label={language === 'eng' ? 'Last Name' : 'Prezime'}
            type={'text'}
            onChange={handleInputChange}
          />
          <Input
            id={'dateOfBirth'}
            label={language === 'eng' ? 'Date Of Birth' : 'Datum rođenja'}
            type={'date'}
            onChange={handleInputChange}
          />
          <Input
            id={'phone'}
            label={language === 'eng' ? 'Phone' : 'Telefon'}
            type={'tel'}
            onChange={handleInputChange}
          />
          <Input
            id={'email'}
            label={language === 'eng' ? 'Email' : 'Mejl'}
            type={'email'}
            onChange={handleInputChange}
          />
        </Form>
        <Form heading={language === 'eng' ? 'Education' : 'Obrazovanje'}>
          <ul>
            {person.education.map((education) => (
              <EducationInput
                key={education.id}
                lang={language}
                id={education.id}
                onChange={handleInputChange}
                onDelete={handleDelete}
              />
            ))}
          </ul>
          <AddButton
            needsMargin={person.education.length}
            id="education"
            onClick={handleAddButtonClick}
          />
        </Form>
        <Form heading={language === 'eng' ? 'Experience' : 'Iskustvo'}>
          <ul>
            {person.experience.map((experience) => (
              <ExperienceInput
                key={experience.id}
                lang={language}
                id={experience.id}
                onChange={handleInputChange}
                onDelete={handleDelete}
              />
            ))}
          </ul>
          <AddButton
            needsMargin={person.experience.length}
            id="experience"
            onClick={handleAddButtonClick}
          />
        </Form>
      </div>
      <LivePreview
        lang={language}
        name={fullName}
        phone={person.phone}
        email={person.email}
        dateOfBirth={person.dateOfBirth}
        education={person.education}
        experience={person.experience}
      />
    </>
  );
}

export default App;
