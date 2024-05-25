const myVideo = document.querySelector('#myVideo')
const btnPause = document.querySelector('#pause')
const sound = document.querySelector('#sound')
const playlist = ['OneShot Trailer (720p).mp4','Farewell to a Machine (OneShot) (720p)','OneShot_ World Machine Edition - Announcement Trailer - Nintendo Switch (720p)']
const src = document.querySelector('.video__src')
const title = document.querySelector('.video__title')
const disk = document.querySelector('.video__teaxt')
const title_list = ['0','1','2']
const disk_list = []
let number = 0
console.log(btn_pause)
function play(){
console.log("шшшшш")
if (myVideo.paused){
	myVideo.play()
 btnPause.innerHTML = "Пауза"

} else{
myVideo.pause()	
btnPause.innerHTML = "Продолжить"
}
}
function mute(){
	if (myVideo.muted){
		myVideo.muted=false
		sound.innerHTML = "Выключить"
	}else{
		
		myVideo.muted=true
		sound.innerHTML = "Включить"
		}
	}

function next(){

number++
myVideo.src =`video/${playlist[number]}.mp4`

}

function prev(){

}
console.log(playlist.longth)