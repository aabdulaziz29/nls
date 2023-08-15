import { useTranslation } from "react-i18next";

import "./Home.scss";

function Home() {
  const { t, i18n } = useTranslation();
  return <div>{t("home")}</div>;
}

export default Home;
