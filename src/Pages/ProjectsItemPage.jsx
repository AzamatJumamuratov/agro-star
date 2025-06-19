import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import GetLastDates from "../Utils/GetLastDates";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";
import truncateString from "../Utils/TruncateString";

const ProjectsItemPage = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="wrapper">
      <PageTitle title={loaderData.item.title || "Пусто"} />
      {loaderData.item.image && (
        <img src={loaderData.item.image} className="w-1/2 mx-auto rounded-lg" />
      )}
      <p className="xl:text-largerN lg:text-sm text-xs mt-10 text-[#222222]">
        {loaderData.item.content || "Описание Пусто"}
      </p>
      <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
      <h3 className="xl:text-5xl lg:text-2xl text-lg font-bold mb-16">
        Другие интересные Проекты
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
        {loaderData.projects.results.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
              desc={truncateString(item.description, 300)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsItemPage;
