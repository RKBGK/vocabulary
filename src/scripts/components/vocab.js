import clearDom from '../helpers/data/clearDom';

const showVocabcards = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#add-button').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Card</button>  <button class="btn btn-success btn-lg mb-4" id="add-tech-btn">Add A Technology</button>';
  array.forEach((item) => {
    console.warn(item.title);
    document.querySelector('#techstore').innerHTML += `
      <div class="card">
          <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> ${item.price}` : `${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-voca-btn--${item.firebaseKey}"></i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};

const emptyCards = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showVocabcards, emptyCards };
