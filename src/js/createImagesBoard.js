import { createInfoDiv } from "./createImageInfo.js";

export const createImagesBoard = (images) => {
  images.forEach((image, index) => {
    const divBoard = document.getElementsByClassName("boardImages")[0];

    const divFigure = document.createElement("figure");

    const divImageText = document.createElement("div");
    divImageText.classList.add("imageText");
    divImageText.addEventListener("click", () =>
      window.open(image.link, "_blank")
    );

    const divImage = document.createElement("div");
    divImage.classList.add(`div-image-${index}`, "div-image");

    const pLegenda = document.createElement("p");
    pLegenda.classList.add("div-text");
    pLegenda.alt = `legenda imagem ${index + 1}`;
    pLegenda.innerHTML = image.legenda + "...";

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = `imagem ${index + 1}`;
    img.id = `image-${index}`;
    img.classList.add("image-board");

    divImageText.appendChild(divImage);
    divFigure.appendChild(img);
    divImage.appendChild(divFigure);
    divImageText.appendChild(pLegenda);
    divBoard.appendChild(divImageText);
  });

  createInfoDiv(images);
};
