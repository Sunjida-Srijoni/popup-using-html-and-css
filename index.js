const text = document.querySelector("textarea");

console.log(text);
text.addEventListener("change", textHandler);

function textHandler(e) {
    console.log(e.target.value);
}