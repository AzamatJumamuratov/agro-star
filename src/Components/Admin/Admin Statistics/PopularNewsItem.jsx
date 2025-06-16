import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";

const PopularNewsItem = ({ index, title, published_at }) => {
  const formattedDate = formatDateToDDMMYYYY(published_at, ".");
  return (
    <div className="xl:p-9 lg:p-6 p-4 rounded-2xl border-2 border-[#E1E1E1] ">
      <h3 className="mb-5 2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold">
        {index}.{title || "Пусто..."}
      </h3>
      <span className="gap-4 2xl:text-almostN xl:text-xl lg:text-sm text-xs text-[#ACC67E]">
        Технологии • Редакция • {formattedDate} • 245 просмотров
      </span>
    </div>
  );
};

export default PopularNewsItem;
