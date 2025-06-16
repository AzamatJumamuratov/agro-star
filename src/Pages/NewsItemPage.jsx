import { useLoaderData } from "react-router";
import test_image from "../assets/images/NewsItem.png";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";

const NewsItemPage = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="wrapper">
      <PageTitle title={loaderData.item.title || "Пусто"} />
      {loaderData.item.img && (
        <img src={loaderData.item.img} className="px-10" />
      )}
      <p className="text-2xl mt-10 text-[#222222]">{loaderData.item.content}</p>
      <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
      <h3 className="xl:text-5xl lg:text-almostN text-2xl font-bold mb-16">
        Другие интересные новости
      </h3>
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default NewsItemPage;
