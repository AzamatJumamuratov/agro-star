import NavLinkListItem from "./NavLinkListItem";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLinkListItem to={"statistics"}>Статистика</NavLinkListItem>
        <NavLinkListItem to={"news"}>Новости</NavLinkListItem>
        <NavLinkListItem to={"projects"}>Проекты</NavLinkListItem>
        <NavLinkListItem to={"partners"}>Партнеры</NavLinkListItem>
        <NavLinkListItem to={"about"}>Информация Компании</NavLinkListItem>
      </ul>
    </nav>
  );
};

export default Navigation;
