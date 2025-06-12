import project_image from "../assets/images/project.png";
import ConvertToJSonFormData from "../Utils/FromDataToJson";
import FetchData from "./FetchData";

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
        title: "Органическое земледелие",
        description:
          "Развитие экологически чистых методов выращивания сельскохозяйственных культур.",
        image: project_image,
      },
    ],
  };
}

export async function action({ request }) {
  const formData = await request.formData();

  const json = ConvertToJSonFormData(formData);

  // Redirect or return a response as needed
  return { success: true };
}
