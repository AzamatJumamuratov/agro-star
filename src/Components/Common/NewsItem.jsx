import { formatDateToReadable } from "../../Utils/formatDateToReadable";

const NewsItem = ({ title, content, date }) => {
  const formattedDate = formatDateToReadable(date);
  return (
    <article className="lg:pt-6 md:pt-4 pt-3 px-5 xl:pb-24 lg:pb-16 md:pb-9 pb-5 rounded-2xl border-l-8 border-b-8 border-primary bg-[#F8F9FA]">
      <div className="mb-4">
        <time className="md:text-base text-sm">{formattedDate}</time>
      </div>
      <h4 className="xl:text-2xl lg:text-lg text-base text-primary font-bold mb-5">
        {title}
      </h4>
      <p className="xl:text-xl lg:text-sm text-xs">{content}</p>
    </article>
  );
};

export default NewsItem;
