import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";
// import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
// import { useContext } from "react";

const Partners = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  // const { currentLanguage, languageSwitchHandler } = useContext(
  //   GlobalLanguageContext
  // );
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("partners_title")} desc={t("partners_desc")} />
        <h3 className="xl:text-almostL lg:text-almostN text-xl font-bold mb-6">
          Партнерские организации:
        </h3>

        <ul className="list-disc xl:text-largerN lg:text-xl text-base pl-8 mb-12">
          {loaderData.results.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
          {/* <li>Министерство сельского хозяйства Республики Узбекистан</li>
          <li>Международные агротехнические компании </li>
          <li>Научно-исследовательские институты </li>
          <li>Европейские фермерские ассоциации</li> */}
        </ul>

        <h3 className="xl:text-almostL lg:text-almostN text-xl font-bold mb-6">
          Информация для инвесторов
        </h3>
        <p className="xl:text-largerN lg:text-xl text-base">
          Мы открыты для сотрудничества с инвесторами, заинтересованными в
          развитии устойчивого сельского хозяйства и внедрении инновационных
          технологий.
        </p>
      </div>
    </main>
  );
};

export default Partners;
