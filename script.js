const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes  = document.querySelectorAll(".input-box")


function updateStorage(){
    notesContainer.innerHTML= "";
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
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

      deleteIcon.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

 
}) 