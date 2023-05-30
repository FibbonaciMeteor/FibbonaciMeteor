let spawnCounter = 0;
const box = document.getElementById("spawnBox");
//const enterButton = document.querySelector("enterButton");
function spawn() {
  spawnCounter = spawnCounter + 1;
  const helloSpawnling = document.createElement("p");
  //helloSpawnling.setAttribute("id", spawnCounter);
  // let h = "Hello";
  //h.concat(" ", spawnCounter);
  helloSpawnling.innerText = "Hello World";
  console.log(spawnCounter);
  box.appendChild(helloSpawnling);
}
