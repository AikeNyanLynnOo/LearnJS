const copyBtn = document.querySelector("#copy-btn");
const p = document.querySelector("p");
copyBtn.addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(p.textContent)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("Clipboard feature - not supported by browser!");
  }
});
