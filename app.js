const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  const music = new Audio("./music/add-btn.mp3");
  music.play();
  e.preventDefault();
  const inputValue = input.value;

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newDeleteButton = document.createElement("button");
  const newdoneButton = document.createElement("button");
  
  newLi.setAttribute("class", "item");
  newDeleteButton.setAttribute("class", "delete-btn");
  newdoneButton.setAttribute("class", "done-btn");
  newDeleteButton.textContent = "delete";
  newdoneButton.textContent = "done";
  newSpan.textContent = inputValue;

  newLi.appendChild(newSpan);
  newLi.appendChild(newdoneButton);
  newLi.appendChild(newDeleteButton);
  newdoneButton.addEventListener("click", () => {
    newdoneButton.parentElement.classList.toggle("click");
    const music = new Audio("./music/done.mp3");
    music.play();
  });
  newDeleteButton.addEventListener("click", () => {
    newDeleteButton.parentElement.remove();
    const music = new Audio("./music/dalete-btn.mp3");
    music.play();
  });

  ul.appendChild(newLi);

  input.value = "";
});

input.addEventListener("input", () => {
  const music = new Audio("./music/keyboard.mp3");
  music.play();
});
