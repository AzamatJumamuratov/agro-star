import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import AboutItem from "../Components/About/AboutItem";

const About = () => {
  const loaderData = useLoaderData();
  return (
    <main className="">
      <div className="wrapper">
        <PageTitle
          title={"О Компании"}
          desc={
            "Наша сельскохозяйственная компания специализируется на увеличении сельскохозяйственной продукции и внедрении современных технологий агросектор."
          }
        />

        {loaderData.results.map((item) => {
          return (
            <AboutItem
              key={item.id}
              title={item.title}
              desc={item.description}
            />
          );
        })}
      </div>
    </main>
  );
};

export default About;
