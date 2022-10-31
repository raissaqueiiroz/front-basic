import { createInfoDiv } from "./createImageInfo.js";

export const createImagesBoard = (images) => {
  images.forEach((image, index) => {
    const divBoard = document.getElementsByClassName("boardImages")[0];

    const divImageText = document.createElement("div");
    divImageText.classList.add("imageText");
    divImageText.addEventListener("click", () =>
      window.open(image.link, "_blank")
    );

    const divImage = document.createElement("div");
    divImage.classList.add(`div-image-${index}`, "div-image");

    const divLegenda = document.createElement("div");
    divLegenda.classList.add("div-text");
    divLegenda.innerHTML = image.legenda + "...";

    const img = document.createElement("img");
    img.src = image.url;
    img.id = `image-${index}`;
    img.classList.add("image-board");

    divImageText.appendChild(divImage);
    divImage.appendChild(img);
    divImageText.appendChild(divLegenda);
    divBoard.appendChild(divImageText);
  });

  createInfoDiv(images);
};
