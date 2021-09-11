import { getTech } from '../../helpers/data/techData';

const selectTech = (techId) => {
  let domString = `<label for="techKey">Select an Tech</label>
    <select class="form-control" id="techKey" required>
    <option value="">Select an Tech</option>`;

  getTech().then((techArray) => {
    techArray.forEach((tech) => {
      domString += `
          <option 
            value="${tech.tech_id}" 
            ${techId === tech.tech_id ? 'selected' : ''}>
              ${tech.tech}
          </option>`;
    });

    domString += '</select>';

    document.querySelector('#select-tech').innerHTML = domString;
  });
};

export default selectTech;
