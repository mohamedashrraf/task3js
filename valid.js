const getMyElement = (id) => document.querySelector(`#${id}`);

const addUser = getMyElement("addUser");
const userData = getMyElement("userData");
const complete = getMyElement("complete");
const remove = getMyElement("remove");
const formElements = ["title", "description", "statues"];
const userDataNew = document.querySelector(".userDataNew");

const validateForm = () => {
    let titleValid = false;
    let descValid = false;
    if (formElements[0].length < 5 && formElements[0].length > 20) {
        alert("title is invalid");
        titleValid = true;
    }
    if (formElements[1].length < 5 || formElements[1].length > 300) {  
        alert("discription must be between 5 and 300 characters long.");  
        descValid = true;  
    }
}  

const drawData = (user) => {
    console.log(user);
    const d =`
    <div id="userData" class="userDataNew col-12 m-3 p-3 border border-primary-3">
              <h3>${user.title}</h3>
              <p>${user.description}</p>
              <div>
                <button id="complete" class="btn btn-success" onclick="completee()">Complete</button>
                <button id="remove" class="btn btn-danger" onclick="removee()">Remove</button>
              </div>
            </div>`
    userData.innerHTML+=d 
}

addUser.addEventListener("submit", (e) => { //لما يتعمل للفورم سابميت يعني دوست زرار add
    e.preventDefault();
    const user = { };
    formElements.forEach(el => {
        if (el == "statues")
            user[el] = addUser.elements[el].checked ? userData.classList.add("bg-success") : "";
            
        else
        user[el] = addUser.elements[el].value;
    })
    validateForm(formElements[0], formElements[1]);
    drawData(user);
    addUser.reset();
})

function completee() {
    userData.classList.toggle("bg-success");
}
function removee() {
    userData.classList.add("d-none");
}