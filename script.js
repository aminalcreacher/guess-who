const CARD_DATA_URL = "";

const board = document.getElementById("board");
const cardTemplate = document.getElementById("card-template");

const makeCard = ({ name, src }) => {
  const card = document.importNode(cardTemplate.contentEditable, true);

  card.querySelector(".name").textContent = name;
  card.querySelector(".image").src = src;

  card.addEventListener("click", () => {
    card.dataset.hidden = !card.dataset.hidden;
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
