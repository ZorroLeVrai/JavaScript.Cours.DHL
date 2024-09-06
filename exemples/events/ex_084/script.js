let clickCounter = 0;
const areaElement = document.getElementById("area");
const positionElement = document.getElementById("position");
const actionElement = document.getElementById("action");

const handleClick = () => actionElement.textContent = `${++clickCounter} click(s)`;
const handleMouseMove = (event) => positionElement.textContent = `X: ${event.pageX}; Y: ${event.pageY}`;

areaElement.addEventListener("click", handleClick);
areaElement.addEventListener("mousemove", handleMouseMove);
