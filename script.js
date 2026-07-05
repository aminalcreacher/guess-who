const CARD_DATA_URL = "./hollow-knight.json";

const board = document.getElementById("board");
const cardTemplate = document.getElementById("card-template");

const makeCard = ({ name, src }) => {
  const cloned = document.importNode(cardTemplate.content, true);
  const card = cloned.querySelector(".card");

  card.querySelector(".name").textContent = name;
  card.querySelector(".image").src = src;

  card.addEventListener("click", () => {
    card.classList.toggle("hidden");
  });

  board.appendChild(card);
};

const loadCards = async () => {
  try {
    const response = await fetch(CARD_DATA_URL);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();

    data.forEach(makeCard);
  } catch (error) {
    alert(error);
  }
};

loadCards();
