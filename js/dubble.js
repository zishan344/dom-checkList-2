// console.log(dubbleNumber(5))
function dubbleNumber(idInput, dubble) {
  const inputId = document.getElementById(idInput);
  //   problem error
  //   if (inputId.value != "number") {
  //     alert("Please enter number");
  //   }
  if (dubble == true) {
    const inputidTExt = parseFloat(inputId.value);
    const dubbleValue = inputidTExt * 2;
    //clear input
    inputId.value = "";
    return dubbleValue;
  } else {
    const inputidTExt = parseFloat(inputId.value);
    const dubbleValue = inputidTExt * 3;
    //clear input
    inputId.value = "";
    return dubbleValue;
  }
}
document.getElementById("dubble-btn").addEventListener("click", function () {
  const dubbleElement = document.getElementById("dubble");
  dubbleElement.innerText = dubbleNumber("duuble-input", true);
});

document.getElementById("triple-btn").addEventListener("click", function () {
  const tripleElement = document.getElementById("triple");
  tripleElement.innerText = dubbleNumber("triple-input", false);
});
