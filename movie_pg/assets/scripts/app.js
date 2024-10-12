const addMovieModal = document.getElementById("add-modal");
const modalButton = document.getElementById("add-movie");
const backdrop = document.getElementById("backdrop");
const modalCancelBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = modalCancelBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteModal = document.getElementById("delete-modal");

const movies = []; //This is the main array where movies will be stored.

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const cancelDeleteMovieHandler = () => {
  deleteModal.classList.remove("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  updateUI();
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (id) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const startMovieDeletionHandler = (id) => {
  deleteModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionBtn = deleteModal.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteModal.querySelector(".btn--danger");

  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

  confirmDeletionBtn = deleteModal.querySelector(".btn--danger");

  cancelDeletionBtn.removeEventListener("click", cancelDeleteMovieHandler);

  cancelDeletionBtn.addEventListener("click", cancelDeleteMovieHandler);
  confirmDeletionBtn.addEventListener(
    "click",
    deleteMovieHandler.bind(null, id)
  );
};

const deleteMovieHandler = (id) => {
  deleteMovie(id);
  cancelDeleteMovieHandler();
  updateUI();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}"> 
  </div>
  <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
  </div>
  `;

  newMovieEl.addEventListener(
    "click",
    startMovieDeletionHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieEl);
};

modalButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
modalCancelBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
const startAddMovieButton = document.querySelector("header button");
