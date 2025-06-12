// import project_image from "../assets/images/project.png";
import ConvertToJSonFormData from "../Utils/FromDataToJson";
import FetchData from "./FetchData";

export async function loader() {
  let response = await FetchData("projects", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.Log("Eror Code : " + response.status + "Text : " + response.status);
  }

  // return {
  //   results: [
  //     {
  //       id: "1",
  //       title: "Органическое земледелие",
  //       description:
  //         "Развитие экологически чистых методов выращивания сельскохозяйственных культур.",
  //       image: project_image,
  //     },
  //   ],
  // };
}

export async function action({ request }) {
  const formData = await request.formData();
  const dataJson = ConvertToJSonFormData(formData);

  let response = await FetchData("project-comments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataJson,
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.log(
      "Eror Code : " + response.status + "Text : " + response.statusText
    );
  }

  // // Redirect or return a response as needed
  // return { success: true };
}
