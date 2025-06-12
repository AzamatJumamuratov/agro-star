import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";

const Partners = () => {
  const loaderData = useLoaderData();
  return (
    <main>
      <div className="wrapper">
        <PageTitle
          title={"Наши партнеры"}
          desc={
            "Мы сотрудничаем с ведущими организациями в области сельского хозяйства как на национальном, так и на международном уровне."
          }
        />
        <h3 className="xl:text-almostL lg:text-almostN text-xl font-bold mb-6">
          Партнерские организации:
        </h3>

        <ul className="list-disc xl:text-largerN lg:text-xl text-base pl-8 mb-12">
          {loaderData.results.map((partnerObj, index) => {
            return <li key={partnerObj.id}>{partnerObj.name}</li>;
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
