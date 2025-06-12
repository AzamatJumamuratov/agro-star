import PageTitle from "../Components/Common/PageTitle";

const AgroSchool = () => {
  return (
    <main>
      <div className="wrapper">
        <PageTitle
          title={"Сельскохозяйственная школа"}
          desc={
            "Наша агрошкола предоставляет современное образование в области сельского хозяйства, готовя квалифицированных специалистов для агросектора."
          }
        />
        <h3 className="xl:text-almostL lg:text-2xl text-xl font-bold mb-8">
          Основные направления обучения:
        </h3>
        <ul className="list-disc xl:text-largerN lg:text-lg text-base pl-8">
          <li>Растениеводство и агрономия</li>
          <li>Животноводство и ветеринария</li>
          <li>Сельскохозяйственная техника </li>
          <li>Экологическое земледелие</li>
          <li>Агробизнес и управление</li>
        </ul>
      </div>
    </main>
  );
};

export default AgroSchool;
