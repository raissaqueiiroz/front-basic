export const errorPage = () => {
  const divBoard = document.getElementsByClassName("boardImages")[0];

  divBoard.innerHTML =
    "<p class='errorMessage'>Ops, algo deu errado! Tente mais tarde.</p>";
};
