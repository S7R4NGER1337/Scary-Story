window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.getElementById("first-name");
  const lastNameElement = document.getElementById("last-name");
  const ageElement = document.getElementById("age");
  const storyTitleElement = document.getElementById("story-title");
  const genreElement = document.getElementById("genre");
  const storyElement = document.getElementById("story");
  const publishBtnElement = document.getElementById("form-btn");
  const previewUlElement = document.getElementById("preview-list");
  const mainElement = document.getElementById("main");
  const bodyElement = document.querySelector(".body");

  publishBtnElement.addEventListener("click", gettingTheInformation);

  function gettingTheInformation() {
    if (
      firstNameElement.value == "" ||
      lastNameElement.value == "" ||
      ageElement.value == "" ||
      storyTitleElement.value == "" ||
      storyElement.value == ""
    ) {
      return;
    }

    const liInPreview = document.createElement("li");
    liInPreview.setAttribute("class", "story-info");
    const article = document.createElement("article");
    const name = document.createElement("h4");
    name.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

    const age = document.createElement("p");
    age.textContent = `Age: ${ageElement.value}`;

    const title = document.createElement("p");
    title.textContent = `Tittle: ${storyTitleElement.value}`;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${genreElement.value}`;

    const paragraph = document.createElement("p");
    paragraph.textContent = `"${storyElement.value}"`;

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save Story";

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Story";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete Story";

    previewUlElement.appendChild(liInPreview);
    liInPreview.appendChild(article);
    article.appendChild(name);
    article.appendChild(age);
    article.appendChild(title);
    article.appendChild(genre);
    article.appendChild(paragraph);
    liInPreview.appendChild(saveButton);
    liInPreview.appendChild(editButton);
    liInPreview.appendChild(deleteButton);

    publishBtnElement.disabled = true;

    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    storyTitleElement.value = "";
    storyElement.value = "";

    editButton.addEventListener("click", edit);

    function edit() {
      //=name
      //=age
      //=title
      //=genre

      let [_, fName, sName] = name.textContent.split(' ')
      let splitedParagraph = paragraph.textContent.split('')[1]
      let splitedAge = age.textContent.split('Age: ')[1]
      let splitedTittle = title.textContent.split('Tittle: ')[1]

      firstNameElement.value = fName
      lastNameElement.value = sName
      ageElement.value = splitedAge
      storyTitleElement.value = splitedTittle
      storyElement.value = splitedParagraph

      liInPreview.remove()

      publishBtnElement.disabled = false;
    }

    saveButton.addEventListener('click', save)

    function save(){
      mainElement.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.textContent = "Your scary story is saved!"
      mainElement.appendChild(h1)
    }


    deleteButton.addEventListener('click', deleteStory)

    function deleteStory(){
      liInPreview.remove()
      publishBtnElement.disabled = false;
    }
  }
}
