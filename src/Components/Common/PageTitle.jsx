const PageTitle = ({ title, desc }) => {
  return (
    <>
      <h2 className="xl:text-5xl lg:text-2xl text-lg xl:mb-8 lg:mb-5 mb-4 font-bold xl:mt-14 lg:mt-9 mt-6">
        {title}
      </h2>
      <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3" />
      {desc && (
        <p className="xl:text-largerN lg:text-lg text-base lg:mb-9 xl:mb-6 mb-4">
          {desc}
        </p>
      )}
    </>
  );
};

export default PageTitle;
