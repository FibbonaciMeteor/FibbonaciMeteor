console.log("hello world");

let slider1 = document.getElementById("myRange");
let output1 = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  console.log("The value is: ", this.value);
};
