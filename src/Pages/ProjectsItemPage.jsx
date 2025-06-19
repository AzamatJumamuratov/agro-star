import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";
import truncateString from "../Utils/TruncateString";
import { useTranslation } from "react-i18next";

const ProjectsItemPage = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();

  // Исключаем текущий и берём только 3 проекта
  const otherProjects = loaderData.projects.results
    .filter((project) => project.id !== loaderData.item.id)
    .slice(0, 3);

  return (
    <div className="wrapper">
      <PageTitle title={loaderData.item.title || "Пусто"} />

      {loaderData.item.image && (
        <img src={loaderData.item.image} className="w-1/2 mx-auto rounded-lg" />
      )}

      <p className="xl:text-largerN lg:text-sm text-xs mt-10 text-[#222222]">
        {loaderData.item.description || "Описание Пусто"}
      </p>

      {otherProjects.length > 0 && (
        <>
          <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
          <h3 className="xl:text-4xl lg:text-xl text-lg font-bold mb-16">
            {t("projects_item_others_text")}
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
            {otherProjects.map((item) => (
              <ProjectItem
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
                description={truncateString(item.description, 300)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsItemPage;
