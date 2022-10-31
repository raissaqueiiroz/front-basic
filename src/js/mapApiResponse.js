import { createImagesBoard } from "./createImagesBoard.js";

const mapDate = (date) => {
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(0, 4);
  const hour = date.substring(11, 13);
  const minute = date.substring(14, 16);

  return `<time>📅 ${day}/${month}/${year} ${hour}:${minute}</time>`;
};

export const mapApiResponse = (response) => {
  let newResponse = [];

  response.forEach((publication) => {
    let legenda = publication.legenda.substr(0, 30);

    newResponse.push({
      url: publication.imagens.resolucaoPadrao.url,
      link: publication.link,
      legenda,
      likes: publication.upvotes,
      comments: publication.comentarios,
      user: publication.usuario.username,
      date: mapDate(publication.criadoEm),
    });
  });

  createImagesBoard(newResponse);
};
