const STORAGE_KEY = "feedback-form-state";
const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const input = document.querySelector("textarea");
populateTextarea();
function populateTextarea() {
    const saveMsg = localStorage.getItem(STORAGE_KEY);
if (saveMsg) {
    const parsedMsg = JSON.parse(saveMsg);
    form.email.value = parsedMsg.email || "";
    form.message.value = parsedMsg.message || "";
    formData.email = parsedMsg.email || "";
    formData.message = parsedMsg.message || "";
    }
    }
form.addEventListener("input", onFormInput);
function onFormInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
};
