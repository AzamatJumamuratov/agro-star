export async function loader() {
  // let response = await FetchData("partners", {
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
        name: "Министерство сельского хозяйства Республики Узбекистан",
        description: "adadadad",
        is_foreign: false,
      },
    ],
  };
}
