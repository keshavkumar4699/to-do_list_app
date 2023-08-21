// Get references to the delete button and all checkboxes using their IDs and name
const deleteButton = document.getElementById("delete-task");
const checkboxes = document.getElementsByName("taskCheckbox");

// Add a click event listener to the delete button
deleteButton.addEventListener("click", () => {
  // Collect IDs of selected checkboxes
  const selectedIds = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedIds.push(checkbox.id);
    }
  });

  // Create href URL with selected IDs
  // const url = "deleteTask/?id=" + selectedIds.map((id) => `selected[]=${id}`).join("&");
  const url = "deleteTask/?id=" + selectedIds.map((id) => `${id}`).join("&");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle the response data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    window.location.href = "/";
});
