import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import ContactForm from "../Components/ProjectsPage/ContactForm";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";
import { useTranslation } from "react-i18next";
import truncateString from "../Utils/TruncateString";

const Projects = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  console.log(loaderData.item);
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("projects_title")} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:p-12 gap-8 mb-10">
          {loaderData.results.map((item) => {
            return (
              <ProjectItem
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
                description={truncateString(item.description, 300)}
              />
            );
          })}
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Projects;
