const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="techstore"></div>
  </div>`;
  console.warn('dombuilder');
};

export default domBuilder;
