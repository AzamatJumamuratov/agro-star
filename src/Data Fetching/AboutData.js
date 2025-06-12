import FetchData from "./FetchData";

export async function loader() {
  let response = await FetchData("company-info", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.log("Eror Code : " + response.status + "Text : " + response.status);
  }
}
