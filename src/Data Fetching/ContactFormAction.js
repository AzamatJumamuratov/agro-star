import ConvertToJSonFormData from "../Utils/FromDataToJson";
import FetchData from "./FetchData";

export async function action({ params, request }) {
  const formData = await request.formData();

  const dataJson = ConvertToJSonFormData(formData);
  let response = await FetchData("project-contacts/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: dataJson,
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.log(
      "Eror Code : " + response.status + "Text : " + response.statusText
    );
    const errorVal = await response.json();
    return {
      status: response.status,
      error: errorVal,
    };
  }
}
