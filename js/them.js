const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const navLinks = document.querySelectorAll('.nav__link')
const main = document.querySelector('.main')

//добавить в константу мэйн
console.log(navLinks)
let color = ''
if(localStorage.getItem('bg-color') != null){
	color = localStorage.getItem('bg-color')
	header.style.background = color
	footer.style.background = color
	main.style.background = color
	//присвоить мэйну цвет
}
// localStorage.clear()
function choiceDark(){
	console.log('dark')
	header.style.background = 'rgb(0, 18, 82)'
	footer.style.background = 'rgb(0, 18, 82)'
	main.style.background = 'rgb(0, 18, 82)'
	//назначить меэйну цвет

	header.style.transition = 'ls ease'
	footer.style.transition = 'ls ease'
	main.style.transition = 'ls ease'
	//добавить плавность изменения для мэйна

	localStorage.setItem('bg-color','rgb(0, 18, 82)')
}
function choiceLight(){
	console.log('light')
	header.style.background = 'azure'
	footer.style.background = 'azure'
	main.style.background = 'azure'

	header.style.transition = 'ls ease'
	footer.style.transition = 'ls ease'
	main.style.transition = 'ls ease'

	localStorage.setItem('bg-color','azure')
}
