const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")

// Load notes from localStorage on page load
window.addEventListener("load", () => {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";

    // Attach delete event to already saved notes
    document.querySelectorAll(".ri-delete-bin-line").forEach(deleteIcon => {
        deleteIcon.addEventListener("click", () => {
            deleteIcon.parentElement.remove();
            updateStorage();
        });
    });
});

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    inputBox.className = "input-box";

    let textArea = document.createElement("div");
    textArea.className = "text";
    textArea.setAttribute("contenteditable", "true");

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "ri-delete-bin-line";

    inputBox.appendChild(textArea);
    inputBox.appendChild(deleteIcon);
    notesContainer.appendChild(inputBox);

    updateStorage();

    deleteIcon.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    // Also update storage when user types
    textArea.addEventListener("input", updateStorage);
});
