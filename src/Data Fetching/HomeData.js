export async function loader() {
  // let response = await FetchData("company-info", {
  //   headers: {
  //     "Accept-Language": "ru",
  //   },
  // });
  // if (response.ok) {
  //   return { success: true };
  // } else {
  //   console.log("Eror Code : " + response.status + "Text : " + response.status);
  // }

  return {
    results: [
      {
        id: "1",
        title: "Запуск нового проекта по органическому земледелию",
        content:
          "С радостью сообщаем о старте инновационного проекта, направленного на развитие органического земледелия. Его главная цель - внедрение экологически чистых методов выращивания сельхозпродукции.",
        published_at: "2025-06-12T11:18:46.935073+05:00",
      },
    ],
  };
}
