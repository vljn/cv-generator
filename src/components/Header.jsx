import style from '../styles/Header.module.css';

// eslint-disable-next-line react/prop-types
export default function Header({ onLanguageChange }) {
  return (
    <div className={style.header}>
      <div className={style.left}>
        <h1>CV Generator</h1>
      </div>
      <div className={style.right}>
        <em>by: vljn :)</em>
        <div className={style.languages}>
          <div className={style['lang-input']}>
            <label htmlFor="langEng">eng</label>
            <input type="radio" name="lang" id="langEng" value="eng" onChange={onLanguageChange} />
          </div>
          <div className={style['lang-input']}>
            <label htmlFor="langSrb">srb</label>
            <input type="radio" name="lang" id="langSrb" value="srb" onChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
