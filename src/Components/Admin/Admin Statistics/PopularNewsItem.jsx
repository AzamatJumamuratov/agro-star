import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";

const PopularNewsItem = ({
  index,
  title,
  published_at,
  tags_display,
  views,
}) => {
  const formattedDate = formatDateToDDMMYYYY(published_at, ".");
  const formattedTagsString = formatTagsArray(tags_display);
  return (
    <div className="xl:p-9 lg:p-6 p-4 rounded-2xl border-2 border-[#E1E1E1] ">
      <h3 className="mb-5 2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold">
        {index}.{title || "Пусто..."}
      </h3>
      <span className="gap-4 2xl:text-almostN xl:text-xl lg:text-sm text-xs text-[#ACC67E]">
        {formattedTagsString == "" ? "Без Тэгов" : formattedTagsString} •{" "}
        {formattedDate} • {views} просмотров
      </span>
    </div>
  );
  function formatTagsArray(arr) {
    if (Array.isArray(arr) && arr.length === 1 && typeof arr[0] === "string") {
      try {
        const parsed = JSON.parse(arr[0]);
        if (Array.isArray(parsed)) {
          return parsed.join(" • ");
        }
      } catch (e) {
        console.error("Ошибка парсинга тега:", e);
      }
    }

    return "Без Тэгов";
  }
};

export default PopularNewsItem;
