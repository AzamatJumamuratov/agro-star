const AboutItem = ({ title, desc }) => {
  return (
    <>
      <h3 className="xl:text-almostL lg:text-almostN text-xl font-bold mb-6">
        {title}
      </h3>
      <p className="xl:text-largerN lg:text-lg text-base mb-14">{desc}</p>
    </>
  );
};

export default AboutItem;
