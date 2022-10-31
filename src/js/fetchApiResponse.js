import { mapApiResponse } from "./mapApiResponse.js";
import { errorPage } from "./errorPage.js";

export const responseApi = () => {
  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => mapApiResponse(data))
    .catch((err) => {
      console.error("Fetching error: ", err);
      errorPage();
    });
};
