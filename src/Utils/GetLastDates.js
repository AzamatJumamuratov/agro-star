export default function GetLastDates(arr, count) {
  return arr
    .slice() // копия массива, чтобы не мутировать оригинал
    .sort((a, b) => new Date(b["published_at"]) - new Date(a["published_at"]))
    .slice(0, count);
}
