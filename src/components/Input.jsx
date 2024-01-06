import styles from '../styles/Input.module.css';

// eslint-disable-next-line react/prop-types
export default function Input({ label, type, onChange, id }) {
  if (type === 'textarea') {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <textarea id={id} onInput={onChange}></textarea>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input id={id} type={type} className={styles.input} onChange={onChange} />
    </div>
  );
}
