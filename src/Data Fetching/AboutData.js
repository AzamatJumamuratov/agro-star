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
        title: "Структура компании",
        description:
          "Компания включает в себя несколько ключевых отделов: производственный, исследовательский, образовательный и отдел международного сотрудничества.",
      },
      {
        id: "2",
        title: "Наша история",
        description:
          "Основанная с целью модернизации сельского хозяйства, компания активно развивается и внедряет инновационные решения.",
      },
      {
        id: "3",
        title: "Местоположение",
        description:
          "Главный офис расположен в Ташкенте, с филиалами в ключевых сельскохозяйственных регионах Узбекистана.",
      },
    ],
  };
}
