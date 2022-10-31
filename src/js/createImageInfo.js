export const createInfoDiv = (images) => {
  images.forEach((image, index) => {
    const createUserInfoDiv = document.createElement("div");
    createUserInfoDiv.classList.add(`user-info-${index}`, "image__overlay");

    const divImage = document.getElementsByClassName(`div-image-${index}`)[0];
    divImage.appendChild(createUserInfoDiv);

    const createLikesP = document.createElement("p");
    createLikesP.classList.add(`likes-${index}`, "like");
    createLikesP.innerText = `💗 ${image.likes}`;

    const createCommentsP = document.createElement("p");
    createCommentsP.classList.add(`comments-${index}`, "comments");
    createCommentsP.innerText = `💬 ${image.comments}`;

    const createDateP = document.createElement("p");
    createDateP.classList.add(`date-${index}`, "date");
    createDateP.innerText = image.date;

    const createNicknameP = document.createElement("p");
    createNicknameP.classList.add(`nickname-${index}`, "nickname");
    createNicknameP.innerText = `@${image.user}`;

    createUserInfoDiv.appendChild(createNicknameP);
    createUserInfoDiv.appendChild(createLikesP);
    createUserInfoDiv.appendChild(createCommentsP);
    createUserInfoDiv.appendChild(createDateP);
  });
};
