import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import ContactForm from "../Components/ProjectsPage/ContactForm";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";
import { useTranslation } from "react-i18next";
import truncateString from "../Utils/TruncateString";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";

const Projects = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  // Фильтруем по доступности перевода
  const filteredProjects = loaderData.results.filter(
    (item) => item.translations?.[currentLanguage]
  );

  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("projects_title")} />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:p-12 gap-8 mb-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => {
              const data = item.translations[currentLanguage];
              return (
                <ProjectItem
                  key={item.id}
                  id={item.id}
                  title={data.title}
                  description={truncateString(data.description, 300)}
                  img={item.image}
                />
              );
            })
          ) : (
            <p className="col-span-full text-gray-500 xl:text-lg lg:text-sm text-xs">
              {"Нет доступных проектов на выбранном языке."}
            </p>
          )}
        </div>

        <ContactForm />
      </div>
    </main>
  );
};

export default Projects;
