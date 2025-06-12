import bg from "../../assets/images/bg.png";

const HeroBanner = () => {
  return (
    <section className="relative xl:h-[720px] lg:h-[512px] h-[384px]">
      <div className="absolute -z-10 w-full h-full bg-linear-to-r from-bg-start to-bg-end">
        <img
          src={bg}
          alt="bg-main"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-[64%]"
        />
      </div>
      <div className="wrapper">
        <div className="text-white xl:max-w-[608px] lg:max-w-[512px] max-w-1/2 xl:pt-32 lg:pt-20 pt-10">
          <h1 className="xl:text-[56px] lg:text-4xl text-3xl mb-6 font-bold">
            Развиваем сельское хозяйство будущего
          </h1>
          <p className="mb-9 xl:mr-32 lg:mr-[84px] mr-10">
            Инновационные решения для увеличения сельскохозяйственной продукции
            и устойчивого развития агросектора
          </p>
          <button className="bg-[#F39C12] xl:px-6 lg:px-4 px-3 py-3 rounded-full xl:text-lg lg:text-xs text-[10px]">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
