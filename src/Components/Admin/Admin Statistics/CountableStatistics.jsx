import { useLoaderData } from "react-router";
import CountableItem from "./CountableItem";
import getPublishedToday from "../../../Utils/getPublishedToday";
import GetTotalViews from "../../../Utils/GetTotalViews";

const CountableStatistics = () => {
  const loaderData = useLoaderData();
  return (
    <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-5 lg:gap-3 gap-2 mb-5">
      <CountableItem count={loaderData.count} content={"Всего новостей"} />
      <CountableItem
        count={GetTotalViews(loaderData.results)}
        content={"Общие просмотры"}
      />
      <CountableItem
        count={getPublishedToday(loaderData.results).length}
        content={"Новостей сегодня"}
      />
      <CountableItem
        count={(GetTotalViews(loaderData.results) / loaderData.count).toFixed(
          2
        )}
        content={"Среднее просмотров"}
      />
    </div>
  );
};

export default CountableStatistics;
