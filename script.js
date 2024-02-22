var element = [
    {name: "Relax"},{name: "Sleep"},{name: "Podcast"},{name: "Feel Good"},{name: "Sad"},{name: "Romance"},{name: "Energize"},{name: "Party"},{name: "Commute"},{name: "Focus"},
]
function features(){
    var data = ""
 element.forEach(function(details){
    data += `<div class="elem">
    <h3>${details.name}</h3>
</div>`
    document.querySelector(".elements").innerHTML = data
 })
}

features()

var arr = [
    {songName: "Ram-Aayenge", url: "./songs/Ram-Aayenge.mp3", image: "./images/ram-aayenge.jpg", duration: "3:20"},
    {songName: "Chupke Se Aana", url: "./songs/Chupke-Se-Aana.mp3", image: "./images/chupke-se-aana.jpg", duration: "5:42"},
    {songName: "Guli Mata", url: "./songs/Guli Mata.mp3", image: "./images/Guli-Mata.jpg", duration: "3:55"},
    {songName: "Tu Hai Kahan", url: "./songs/Tu-Hai-Kahan.mp3", image: "./images/tu-hai-kahan.jpg", duration: "2:44"},
    {songName: "Man Marzi", url: "./songs/Man-Marzi.mp3", image: "./images/man-marzi.jpg", duration: "3:18"},
    {songName: "Tum Dil Ki", url: "./songs/Tum-Dil-Ki.mp3", image: "./images/tum-dil-ki.jpg", duration: "3:38"},
    {songName: "Tum Muskura Do", url: "./songs/Tum-Muskura-Do.mp3", image: "./images/tum-muskura-do.jpg", duration: "4:55"},
   
]
var allSongs = document.querySelector(".all-songs")
var audio = new Audio();
var selectedSong = 0;
var poster = document.querySelector("#part-1");
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")
var twoName = document.querySelector("#two-name")
var img  = document.querySelector("#image")

function mainFunction(){

    var clutter = "";

        arr.forEach(function(elem,index){
            clutter += `
            <div class="info" id=${index}>
            <div class="song">
                <img src="${elem.image}" alt="">
                <h3>${elem.songName} </h3>
            </div>
            <h5>${elem.duration}</h5>
        </div>`
        })

        allSongs.innerHTML = clutter;

        audio.src = arr[selectedSong].url
        poster.style.backgroundImage = `url(${arr[selectedSong].image})`
        twoName.textContent = `${arr[selectedSong].songName}`
        img.style.backgroundImage= `url(${arr[selectedSong].image})`
}


mainFunction()

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    audio.play()
})

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-line"></i>`
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length -1){
        selectedSong++
        mainFunction()
        audio.play()

    }
    else{
        forward.style.opacity = 0.5
    }
})
backward.addEventListener("click", function(){
    if(selectedSong >= 0){
        selectedSong--
        mainFunction()
        audio.play()

    }
    else{
        backward.style.opacity = 0.5
    }
})



var sound = document.querySelector("#sound")

var off = 0
sound.addEventListener("click", function(){
    if(off == 0){
        sound.innerHTML = `<i class="ri-volume-up-line"></i>`
        mainFunction()
        audio.play()
        off = 1
    }
    else{
        sound.innerHTML = `<i class="ri-volume-mute-line"></i>`
        audio.pause()
        off = 0
    }
})