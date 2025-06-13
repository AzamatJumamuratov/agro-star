const AboutItem = ({ title, desc }) => {
  return (
    <>
      <h3 className="xl:text-almostL lg:text-almostN text-xl font-bold mb-6">
        {title || "Пусто"}
      </h3>
      <p className="xl:text-largerN lg:text-lg text-base mb-14">
        {desc || "описание пусто"}
      </p>
    </>
  );
};

export default AboutItem;
