const vocabForm = (obj = {}) => {
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-vocab-form" class="mb-4">
        <div class="form-group">
          <label for="title">Enter a Term</label>
          <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Title" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
        <div class="form-group">
          <label for="lang">Language/Tech</label>
          <input type="text" class="form-control" id="lang" placeholder="Lang" value="${obj.lang || ''}" required>
        </div>
        <div class="form-group" id="select-author">
        </div>
        <button type="submit" 
          id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit Book
        </button>
      </form>`;
  // selectTech(`${obj.author_id || ''}`);
};

export default vocabForm;
