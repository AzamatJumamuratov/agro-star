import CustomNavLink from "./CustomNavLink";

const NavigationBar = () => {
  return (
    <div className="hidden md:block shadow-[0px_2px_5px_0px_#0000001A] mb-1 bg-white">
      <div className="wrapper">
        <nav className="">
          <ul className="flex lg:flex-nowrap flex-wrap justify-center items-center md:gap-x-16    lg:gap-12 xl:gap-[84px] py-[12px]">
            <li className="">
              <CustomNavLink to="/">Главная</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/about">О компании</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/projects">Проекты</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/agroschool">Агрошкола</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/partners">Партнеры</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/news">Новости</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/contacts">Контакты</CustomNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
