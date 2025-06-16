import { useLoaderData } from "react-router";
import CountableItem from "./CountableItem";
import getPublishedToday from "../../../Utils/getPublishedToday";

const CountableStatistics = () => {
  const loaderData = useLoaderData();
  return (
    <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-5 lg:gap-3 gap-2 mb-5">
      <CountableItem count={loaderData.count} content={"Всего новостей"} />
      <CountableItem count={0} content={"Общие просмотры"} />
      <CountableItem
        count={getPublishedToday(loaderData.results).length}
        content={"Новостей сегодня"}
      />
      <CountableItem count={0} content={"Среднее просмотров"} />
    </div>
  );
};

export default CountableStatistics;
