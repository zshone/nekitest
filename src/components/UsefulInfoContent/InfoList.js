import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./InfoList.module.css";

import AuthContext from "../../store/auth-context";

const InfoList = () => {
  const authCtx = useContext(AuthContext);

  return (
    <section className={classes.section}>
      <article>
        <h3>Важни телефони:</h3>
        <p>
          Хитна помоћ: 194 <br />
          Ватрогасци: 193 <br />
          Полиција: 192 <br />
          ПУ Н.Београд: 011 300 8014
        </p>
      </article>
      {authCtx.isLoggedIn && (
        <article>
          <h3>Кварови и интервенције</h3>
          <p>
            Кварове на лифтовима, заједничким инсталацијама водовода и
            канализације, електро инсталацијама, као и друге проблеме, можете
            пријавити управнику: <b>[УПРАВНИКОВ БРОЈ ТЕЛЕФОНА И МЕЈЛ]</b>
          </p>
        </article>
      )}
      <article>
        <Link to={{ pathname: "http://www.beoelektrane.rs/" }} target="_blank">
          ЈКП Београдске електране
        </Link>
        <p>
          Рекламације (07-20h): 011 209 3011
          <br /> Цурења (24h): 011 209 3100
        </p>
      </article>
      <article>
        <Link to={{ pathname: "https://www.bvk.rs/" }} target="_blank">
          ЈКП Београдски водовод и канализација
        </Link>
        <p>
          Контакт центар, 24 сата дневно евидентира пријаве кварова и
          рекламација и пружа информације које се тичу уличне водоводне и
          канализационе мреже:
          <br /> 011 3 606 606
        </p>
      </article>
      <article>
        <Link
          to={{ pathname: "http://elektrodistribucija.rs/" }}
          target="_blank"
        >
          ЕПС Дистрибуција Београд
        </Link>
        <p>
          Пријава кварова на мрежи:
          <br /> 011 395 77 99
          <br /> Пријава бесправ.потрошње:
          <br /> 0800 360 300
        </p>
      </article>
      <article>
        <h3>ИКТ оператери</h3>
        <div>
          <Link to={{ pathname: "https://mts.rs/" }} target="_blank">
            МТС
          </Link>
          <p>0800 100 100</p>
        </div>
        <div>
          <Link to={{ pathname: "https://sbb.rs/" }} target="_blank">
            СББ
          </Link>
          <p>Кориснички центар: 19900</p>
        </div>
        <div>
          <Link to={{ pathname: "https://oriontelekom.rs/" }} target="_blank">
            Орион Телеком
          </Link>
          <p>
            Телепродаја: 011 4 100 200
            <br /> Кориснички сервис: 011 4 100 100
          </p>
        </div>
      </article>
    </section>
  );
};

export default InfoList;
