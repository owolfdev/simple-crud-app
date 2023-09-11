document.addEventListener("DOMContentLoaded", (event) => {
  const createForm = document.getElementById("create-form");
  const createInput = document.getElementById("create-input");
  const entriesList = document.getElementById("entries-list");
  const updateSection = document.getElementById("update-section");
  const updateForm = document.getElementById("update-form");
  const updateInput = document.getElementById("update-input");

  let updateIndex = null;

  createForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = createInput.value + " ";

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => {
      updateIndex = Array.from(li.parentNode.children).indexOf(li);
      updateInput.value = li.textContent.trim();
      updateSection.hidden = false;
    });
    li.appendChild(updateButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    entriesList.appendChild(li);

    createInput.value = "";
  });

  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const li = entriesList.children[updateIndex];
    li.textContent = updateInput.value + " ";

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => {
      updateIndex = Array.from(li.parentNode.children).indexOf(li);
      updateInput.value = li.textContent.trim();
      updateSection.hidden = false;
    });
    li.appendChild(updateButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    updateSection.hidden = true;
    updateInput.value = "";
  });
});
