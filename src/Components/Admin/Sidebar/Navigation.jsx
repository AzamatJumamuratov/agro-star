import NavLinkListItem from "./NavLinkListItem";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLinkListItem to={"news"}>Новости</NavLinkListItem>
        <NavLinkListItem to={"controlPanel"}>Панель управлении</NavLinkListItem>
        <NavLinkListItem to={"statistics"}>Статистика</NavLinkListItem>
      </ul>
    </nav>
  );
};

export default Navigation;
