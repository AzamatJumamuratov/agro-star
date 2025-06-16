import { useNavigate } from "react-router";
import { formatDateToReadable } from "../../Utils/formatDateToReadable";

const NewsItem = ({ id, title, content, date }) => {
  const navigate = useNavigate();
  const formattedDate = formatDateToReadable(date);
  return (
    <article
      onClick={() => navigate(`/news/${id}`)}
      className="lg:pt-6 md:pt-4 pt-3 px-5 xl:pb-24 lg:pb-16 md:pb-9 pb-5 rounded-2xl border border-[#727272] group hover:border-l-8 hover:border-b-8 hover:border-primary bg-[#F8F9FA] hover:cursor-pointer"
    >
      <div className="mb-4">
        <time className="md:text-base text-sm">{formattedDate}</time>
      </div>
      <h4 className="xl:text-2xl lg:text-lg text-base text-primary group-hover:font-bold mb-5">
        {title || "пусто"}
      </h4>
      <p className="xl:text-xl lg:text-sm text-xs">
        {content || "описание пусто."}
      </p>
    </article>
  );
};

export default NewsItem;
