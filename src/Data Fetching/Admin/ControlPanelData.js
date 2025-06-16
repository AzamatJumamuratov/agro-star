import FetchData from "../FetchData.js";

export async function loader() {
  // let language = localStorage.getItem("language");
  let response = await FetchData("news", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading Admin Control Panel Page. Code : " +
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
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  // let response = await FetchData("news", {
  //   method: "POST",
  //   body: formData,
  // });
  // if (response.ok) {
  //   return await response.json();
  // } else {
  //   console.error(
  //     "Error Loading Admin Control Panel Page. Code : " +
  //       response.status +
  //       " Text : " +
  //       response.statusText
  //   );
  // }

  // здесь можешь отправить на сервер через fetch или сохранить на сервере

  return null; // или redirect
}
