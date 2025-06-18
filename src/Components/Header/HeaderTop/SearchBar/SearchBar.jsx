import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import search_icon from "../../../../assets/search_icon.svg";

const SearchBar = ({ additionalClass }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("search") || "";
  const [query, setQuery] = useState(initialQuery);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const currentParams = new URLSearchParams(location.search);
      if (query) {
        currentParams.set("search", query);
      } else {
        currentParams.delete("search");
      }

      const searchParams = currentParams.toString();
      const targetPath = "/news";
      const isOnNews = location.pathname === targetPath;

      navigate(`${isOnNews ? location.pathname : targetPath}?${searchParams}`, {
        replace: true,
      });
    }
  };

  return (
    <div className={`relative flex ${additionalClass}`}>
      <img
        src={search_icon}
        alt="search_icon"
        className="absolute xl:h-[18px] lg:h-3.5 h-3  xl:left-4 lg:left-3 left-3 xl:top-3 lg:top-2 top-2 bottom-3"
      />
      <input
        type="search"
        placeholder="Поиск по сайту.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // ⌨️ Слушаем Enter
        className="h-full xl:w-[368px] lg:w-[245px]  xl:py-3  py-2 pl-11 pr-2 placeholder:text-white rounded-lg xl:text-base text-xs bg-white/30 text-white"
      />
    </div>
  );
};

export default SearchBar;
