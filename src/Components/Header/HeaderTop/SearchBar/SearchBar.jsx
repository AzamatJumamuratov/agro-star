import { Form } from "react-router";
import search_icon from "../../../../assets/search_icon.svg";

const SearchBar = ({ additionalClass }) => {
  return (
    <Form className={`relative flex ${additionalClass}`}>
      <img
        src={search_icon}
        alt="search_icon"
        className="absolute left-4 top-2.5 bottom-3"
      />
      <input
        type="search"
        placeholder="Поиск по сайту.."
        className="h-full w-[368px]  py-3 pl-11 pr-2 placeholder:text-white rounded-lg xl:text-base text-xs bg-white/30 text-white"
      />
    </Form>
  );
};

export default SearchBar;
