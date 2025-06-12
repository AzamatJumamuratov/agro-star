import { Form } from "react-router";
import search_icon from "../../../../assets/search_icon.svg";

const SearchBar = ({ additionalClass }) => {
  return (
    <Form className={`relative flex ${additionalClass}`}>
      <img
        src={search_icon}
        alt="search_icon"
        className="absolute xl:h-[18px] lg:h-3.5 h-3  xl:left-4 lg:left-3 left-3 xl:top-3 lg:top-2 top-1 bottom-3"
      />
      <input
        type="search"
        placeholder="Поиск по сайту.."
        className="h-full xl:w-[368px] lg:w-[245px]  xl:py-3 lg:py-2 py-1 pl-11 pr-2 placeholder:text-white rounded-lg xl:text-base text-xs bg-white/30 text-white"
      />
    </Form>
  );
};

export default SearchBar;
