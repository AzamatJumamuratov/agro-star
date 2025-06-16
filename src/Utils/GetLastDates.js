export default function GetLastDates(arr, count = 3, currentId = null) {
  return arr
    .filter((item) => item.id !== currentId) // исключить текущую новость
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at)) // сортировка по дате
    .slice(0, count); // взять нужное количество
}
