const base_url = "https://server.beruniy-agrostar.uz/api/";

export default async function FetchData(path, options) {
  return fetch(base_url + path, options);
}
