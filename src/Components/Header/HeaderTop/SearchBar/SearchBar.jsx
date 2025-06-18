import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import search_icon from "../../../../assets/search_icon.svg";

const SearchBar = ({ additionalClass }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Начальное значение — из URL (если есть)
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("search") || "";
  const [query, setQuery] = useState(initialQuery);

  // Обновление URL при изменении query
  useEffect(() => {
    if (!location.pathname.includes("/news")) {
      navigate(`/news?search=${query}`);
    }

    const timeout = setTimeout(() => {
      const currentParams = new URLSearchParams(location.search);
      if (query) {
        currentParams.set("search", query);
      } else {
        currentParams.delete("search");
      }
      navigate(`/news?${currentParams.toString()}`, { replace: true });
    }, 300); // debounce

    return () => clearTimeout(timeout);
  }, [query, navigate, location.search]);

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
        className="h-full xl:w-[368px] lg:w-[245px]  xl:py-3  py-2 pl-11 pr-2 placeholder:text-white rounded-lg xl:text-base text-xs bg-white/30 text-white"
      />
    </div>
  );
};

export default SearchBar;
