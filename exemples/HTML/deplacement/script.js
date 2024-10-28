const carre = document.getElementById("carre");
if (carre) {
  carre.style.top = "100px";
  carre.style.left = "100px";
}

function deplacerCarre() {
  if (!carre)
    return;

  const position_top = parseInt(carre.style.top);
  const position_left = parseInt(carre.style.left);
  carre.style.top = `${position_top + 10}px`;
  carre.style.left = `${position_left + 10}px`;
  console.log(`${carre.style.top} ${carre.style.left}`);
}
