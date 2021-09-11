import clearDom from '../helpers/data/clearDom';

const showVocabcards = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Card</button>  <button class="btn btn-success btn-lg mb-4" id="add-tech-btn">Add A Technology</button>';
  document.querySelector('#add-button').innerHTML += `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Alphabetically/a></li>
    <li><a class="dropdown-item" href="#">Oldest</a></li>
    <li><a class="dropdown-item" href="#">Newwest</a></li>
  </ul>
</div>`;

  array.forEach((item) => {
    console.warn(item.title);
    document.querySelector('#techstore').innerHTML += `
      <div class="card">
          <div class="card-body" style="height: 180px;">
          <p class="card-title">${item.title}</p>
          <p class="card-title">${item.definition}</p>
          <h5 class="card-title">${item.tech_id}</h5>

            <hr>
            <i class="btn btn-success fas fa-eye" id="view-voca-btn--${item.firebaseKey}"></i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};
const emptyCards = () => {
  document.querySelector('#techstore').innerHTML = '<h1>No Items</h1>';
};

export { showVocabcards, emptyCards };
