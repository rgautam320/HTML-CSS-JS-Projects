const addBtn = document.getElementById("addBtn");

const UpdateLocal = () => {
   const textArea = document.querySelectorAll("textarea");
   const myNotes = [];

   textArea.forEach((notes) => {
      return myNotes.push(notes.value);
   });

   localStorage.setItem("notes", JSON.stringify(myNotes));
};

const addNote = (mytext = "") => {
   console.log(mytext);
   console.log(typeof mytext);
   const card = document.createElement("div");

   let myClassName = "myCard col-lg-4 col-md-4 col-sm-11 col-11 mx-auto";
   let arr = card.className.split(" ");
   if (arr.indexOf(myClassName) == -1) {
      card.className += " " + myClassName;
   }

   const htmlData = `
                    <div class="myDiv">
                        <div class=" myIcons">
                            <button class="edit  btn"><i class="fas fa-edit icon"></i></button>
                            <button class="delete  btn"><i class="fas fa-trash icon"></i></button>
                        </div>
                        <div class="main ${mytext ? "hidden" : ""}"></div>
                            <textarea name="myNote" id="myNote" value="Write Your Notes Here" cols="30" rows="6" class="mytxt ${mytext ? "" : "hidden"}"></textarea>
                </div>`;

   card.insertAdjacentHTML("afterbegin", htmlData);

   document.getElementById("myCard").appendChild(card);

   //    Getting the references

   const edit = card.querySelector(".edit");
   const del = card.querySelector(".delete");
   const main = card.querySelector(".main");
   const textArea = card.querySelector("textarea");

   //    console.log(textArea);

   main.innerHTML = mytext;

   const txt = "";
   if (typeof mytext === typeof txt) {
      textArea.value = mytext;
   }

   edit.addEventListener("click", () => {
      main.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
   });

   del.addEventListener("click", () => {
      card.remove();
      UpdateLocal();
   });

   textArea.addEventListener("change", (event) => {
      main.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
      const value = event.target.value;
      main.innerHTML = value;

      UpdateLocal();
   });
};

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
   notes.forEach((note) => {
      return addNote(note);
   });
}

addBtn.addEventListener("click", addNote);
