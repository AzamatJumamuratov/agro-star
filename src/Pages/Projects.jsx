import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import ContactForm from "../Components/ProjectsPage/ContactForm";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";

const Projects = () => {
  const loaderData = useLoaderData();
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={"Наши проекты"} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-10">
          {loaderData.results.map((item, i) => {
            return (
              <ProjectItem
                key={item.id}
                img={item.image}
                title={item.title}
                desc={item.description}
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
