// Complete Day 1 goals here
let display = document.querySelector(".display");

let imgCol = document.querySelector("#colImg");
let imgList = [];

let songCol = document.querySelector("#colSongs");
let songList = [];

let artistCol = document.querySelector("#colArtists");
let artistList = [];

let lengthCol = document.querySelector("#colLengths");
let lengthList = [];

let linkCol = document.querySelector("#colLinks");
let linkList = [];


let addButton = document.querySelector("button");

function displaySongInfo() {
  let ul = document.createElement("ul");
  songCol.innerHTML="";
  songCol.appendChild(ul);



  for (let i = 0; i < songList.length; i++) {
    let newSong = document.createElement("li");
    newSong.textContent = songList[i];
    console.log(newSong);
    songCol.appendChild(newSong);
  }

}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  // $(".songs").innerHTML
  // $(".images").empty();
  // $(".artists").empty();
  // $(".lengths").empty();
  // $(".links").empty();

  // document.querySelector(".songs").innerHTML="";
  // document.querySelector(".images").innerHTML="";
  // document.querySelector(".artists").innerHTML="";
  // document.querySelector(".lengths").innerHTML="";
  // document.querySelector(".links").innerHTML="";
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  imgList.push(document.querySelector(".image").value)

  let songInput = document.querySelector(".title").value;
  songList.push(songInput);





}


addButton.addEventListener("click", function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});


$("#add").click(function () {

});

//displaySongInfo();
