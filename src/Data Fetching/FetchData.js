const base_url = "https://agro.pythonanywhere.com/api/";

export default async function FetchData(path, options) {
  return fetch(base_url + path, options);
}
