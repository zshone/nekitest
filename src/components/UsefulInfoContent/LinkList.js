import classes from "./LinkList.module.css";

import SingleLink from "./SingleLink";

const LinkList = () => {
  const links = [
    {
      title: "Општина Нови Београд",
      url: "https://novibeograd.rs/",
    },
    {
      title: "Регистар стамбених заједница",
      url: "https://katastar.rgz.gov.rs/StambeneZajednice/",
    },
    {
      title: "Портал еУправа Републике Србије",
      url: "https://euprava.gov.rs/",
    },
    {
      title: "Портал Судова Србије",
      url: "https://portal.sud.rs/",
    },
    {
      title: "Локална пореска администарција",
      url: "https://www.beograd.rs/cir/gradska-vlast/1731905-sekretarijat-za-javne-prihode_2/",
    },
    {
      title: "Републички фонд за ПИО",
      url: "https://www.pio.rs/",
    },
    {
      title: "Републички фонд за ЗО",
      url: "https://www.rfzo.rs/",
    },
    {
      title: "Народна банка Србије",
      url: "https://nbs.rs/",
    },
    {
      title: "Агенција за привредне регистре",
      url: "https://apr.gov.rs/",
    },
    {
      title: "Привредна комора Србије",
      url: "https://pks.rs/",
    },
    {
      title: "Београдске електране",
      url: "http://www.beoelektrane.rs/",
    },
    {
      title: "Београдски водовод и канализација",
      url: "https://www.bvk.rs/",
    },
    {
      title: "ЕПС Дистрибуција Београд",
      url: "http://elektrodistribucija.rs/",
    },
    {
      title: "Инфостан технологије",
      url: "https://infostan.rs/",
    },
    {
      title: "Градско стамбено",
      url: "https://www.stambeno.com/",
    },
    {
      title: "Пошта Србије",
      url: "https://www.posta.rs/",
    },
    {
      title: "Беле стране",
      url: "http://www.11811.rs/BeleStrane/Index",
    },
    {
      title: "Буџетске уплате",
      url: "https://www.posted.co.rs/korisno/budzetske-uplate.html",
    },
    {
      title: "Курсна листа",
      url: "https://www.kursna-lista.info/",
    },
  ];

  const linkList = links.map((link) => (
    <SingleLink key={Math.random()} title={link.title} url={link.url} />
  ));

  return (
    <section className={classes.section}>
      <h3>Корисни линкови:</h3>
      <nav>
        <ul>{linkList}</ul>
      </nav>
    </section>
  );
};

export default LinkList;
