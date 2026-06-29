// Complete Day 1 goals here
let display = document.querySelector(".display");
let songCol = document.querySelector("#colSongs");
let songList = [];
let addButton = document.querySelector("button");

function displaySongInfo() {
  let ul = document.createElement("ul");
  $(".songs").appendChild(ul);

  for (let i = 0; i < songList.length; i++) {
    let newSong = document.createElement("li");
    newSong.innerHTML = songList[songList.length - 1];
    console.log(newSong);
    songCol.appendChild(newSong);
  }

}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let songInput = document.querySelector(".title").value;
  songList.push(songInput);
  console.log(songList);

}


addButton.addEventListener("click", function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});


$("#add").click(function () {

});

//displaySongInfo();
