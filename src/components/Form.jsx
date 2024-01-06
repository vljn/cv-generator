import styles from '../styles/Form.module.css';

// eslint-disable-next-line react/prop-types
export default function Form({ heading, children }) {
  return (
    <form>
      <fieldset className={styles.fieldset}>
        <legend>{heading}</legend>
        {children}
      </fieldset>
    </form>
  );
}
