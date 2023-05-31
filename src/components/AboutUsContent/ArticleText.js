import { Fragment } from "react";

import AboutUsBlok from "../../assets/AboutUsBlok.jpg";
import classes from "./ArticleText.module.css";

const ArticleText = () => {
  return (
    <Fragment>
      <h1 className={classes.heading}>О нама</h1>
      <p>
        Стамбена заједница Јурија Гагарина 122 се налази у новобеоградском Блоку
        62, чија изградња је трајала је од 1976. до 1977. године. Омеђен је
        улицама: Јурија Гагарина, Душана Вукасовића, Нехруовом и Војвођанском.
        Као и цео Нови Београд, и Блок 62 је коципиран са пуно зелених површина
        и спортских терена за мале спортове између солитера, али је последњих
        година, експанзијом градње, велики део зелених површина искоришћен за
        изградњу тржних центара и трговинских ланаца, због чега је 2009. године
        изграђен парк под именом „Аргентина“. У блоку се налазе Основна школа
        „Кнегиња Милица“ (некада „Ужичка Република“), супермаркети Универекспорт
        и Идеа, Кинеска робна кућа „Милано“ и низ малих трговинских објеката и
        ресторана. До Блока се може доћи линијама градског превоза број: 45, 73,
        89, 94, 95 и 610, као и трамвајским линијама број: 7, 9, 11 и 13.
      </p>
      <img src={AboutUsBlok} alt="Blok62" />
      <p>
        Наш солитер има 6 улаза, од којих је број 122 последњи до Европске
        улице. У улазу је 14 спратова и мезанин са укупно 60 станова.
        Заједничким снагама последње три године решавамо нагомилане проблеме
        старе опреме лифтова, крова, унутрашњег изгледа и хигијене, али и,
        заједно са ЈКП „Зенило Београд“, уређујемо околину зграде. Стамбена
        заједница функционише као складна целина власника стамбених јединица,
        која заједнички доноси одлуке о прикупљању средстава неопходних за
        текуће и инвестиционо одржавање и о трошењу прикупљених средстава.
        <br /> За последње три године, између осталог, је урађено:
      </p>
      <ul>
        <li>
          Ремонт теретног лифта са комплетном заменом и модернизацијом
          електронике
        </li>
        <li>
          Поправка равног крова, који услед дугогодишњег пропадања
          хидроизолације прокишњава
        </li>
        <li>
          Уређење подрумског улаза у зграду (зидови, спуштени плафони са лед
          осветљењем, скривање цевних инсталација водовода и грејања)
        </li>
        <li>
          Асфалтирање приступних степеница и стазе од стране Европске улице са
          постављањем рукохвата
        </li>
        <li>
          Поправка интерфонског система и система видео надзора са постављањем
          нових камера
        </li>
        <li>
          Електронско закључавање зграде оба улаза (са приземља и подрумског)
        </li>
        <li>
          Сређивање просторије за одлагање смећа и стављање под систем
          електронске браве
        </li>
        <li>Постављање противпожарних апарата</li>
        <li>
          Санација неисправних врата ормара за струјомере на свим спратовима
        </li>
        <li>
          Постављање система одвода кондензоване воде са свих клима уређаја
          инсталираних на фасади зграде
        </li>
      </ul>
      <p>
        Планирамо да у наредном периоду извршимо генералну поправку малог лифта
        и да окречимо унутрашње ходнике у целој згради. Желимо да згради вратимо
        стари сјај и да квалитет становања и живота у згради подигнемо на виши
        ниво, на задовољство свих нас који у њој живимо.
      </p>
    </Fragment>
  );
};

export default ArticleText;
