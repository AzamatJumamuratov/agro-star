import ConvertToJSonFormData from "../../Utils/FromDataToJson.js";
import FetchData from "../FetchData.js";

export async function loader() {
  // let language = localStorage.getItem("language");
  let response = await FetchData("partners/", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading Admin Partners Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
  }

  // return {
  //   results: [
  //     {
  //       id: "1",
  //       title: "Запуск нового проекта по органическому земледелию",
  //       content:
  //         "С радостью сообщаем о старте инновационного проекта, направленного на развитие органического земледелия. Его главная цель - внедрение экологически чистых методов выращивания сельхозпродукции.",
  //       published_at: "2025-06-12T11:18:46.935073+05:00",
  //     },
  //   ],
  // };
}

export async function action({ request }) {
  const formData = await request.formData();
  const dataJSON = ConvertToJSonFormData(formData);

  let response = await FetchData("/partners/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: dataJSON,
  });

  let result;
  if (response.ok) {
    result = await response.json();
  } else {
    console.error(
      "Error in Action from Admin Partners Page.Error Code : " +
        response.status +
        "Text : " +
        response.statusText
    );
    result = {
      message: "Произошла Ошибка!",
    };
  }

  return {
    success: response.ok,
    result,
  };
}
