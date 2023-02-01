const newProjectPage = (maindatas) => {
  // Get Elements
  const canvas = document.getElementById("canvasEdit");
  const objectsList = document.getElementById("objectsList");

  // Canvas Settings
  canvas.clientWidth = maindatas.canvas.width;
  canvas.clientHeight = maindatas.canvas.height;

  // Objects List Settings
  maindatas.objects.forEach((situation) => {
    objectsList.innerHTML += `
    <tr>
      <td class="objectItem" id="objectItem">* ${situation.name}</td>
    </tr>
    `;
    situation.objects.forEach((object) => {
      objectsList.innerHTML += `
      <tr>
        <td class="objectItem" id="objectItem" onclick="">${object.name}</td>
      </tr>
      `;
    });
  });
};
