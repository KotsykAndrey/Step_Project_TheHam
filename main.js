let currentActiveImages = showInitialImages();

function showInitialImages() {
	let allImages = document.getElementsByClassName('amazing_work_block');
	let imagesToShow = 12;
	allImages = Array.from(allImages);
	let activeImages = allImages.slice(0, imagesToShow);
	activeImages.forEach(img => img.classList.add('active'));
	activeImages.forEach(img => img.classList.remove('hidden'));

	return activeImages.length;
}


document.querySelector('.list_services').addEventListener('click', event => {
	document.querySelector('.services_tab.active').classList.remove('active');
	event.target.classList.add('active');
	document.querySelector('.services_block.active').classList.remove('active');
	document.querySelectorAll('.services_block')[`${event.target.dataset.id}`].classList.add('active');
}); // Our services tabs


let listHiddenImages = document.querySelectorAll(".amazing_work_block.hidden");
let buttonLoadImages = document.getElementsByClassName("btn_load_images")[0];
let buttonHideImages = document.getElementsByClassName("btn_hide_images")[0];

buttonLoadImages.addEventListener('click', () => loadImages(event));
buttonHideImages.addEventListener('click', () => hideImages(event));

function loadImages(event){
	listHiddenImages.forEach(img =>{
		img.classList.add('active');
		img.classList.remove('hidden');
	});
	currentActiveImages = 24;
	changeActiveTabs();
	buttonLoadImages.classList.add("hidden");
	buttonHideImages.classList.remove("hidden");
}	

function hideImages(event){
	listHiddenImages.forEach(img =>{
		img.classList.add('hidden');
		img.classList.remove('active');
	});
	currentActiveImages = 12;
	changeActiveTabs();
	buttonHideImages.classList.add("hidden");
	buttonLoadImages.classList.remove("hidden");
}

let listsWorkTabs = document.getElementsByClassName("amazing_work_list")[0];
listsWorkTabs.addEventListener('click', () => changeActiveTabs(event));

function changeActiveTabs(event){
	let tabId=null;
	let category=null;
	if(event){
		 tabId= event.target.dataset.works;
		 category=event.target.dataset.category
	}else{
			tabId= document.querySelector('.work_tab.active').dataset.works;
			category=document.querySelector('.work_tab.active').dataset.category;
	}
    	let allWorkTabs = document.getElementsByClassName('work_tab');
    	allWorkTabs = Array.from(allWorkTabs);
    	allWorkTabs.forEach(tab => tab.classList.remove('active'));
    	let targetTab = allWorkTabs.find(tab => tab.dataset.works === tabId);
    	targetTab.classList.add('active');

    	if (category === 'all') {
    		let allImages = document.querySelectorAll('.amazing_work_block');
    		let allActiveImages = Array.from(allImages).slice(0, currentActiveImages);
    		allActiveImages.forEach(img => img.classList.add('active'));
    		return;
    	}
    	
    	let allImages = document.querySelectorAll('.amazing_work_block');
    	let allActiveImages = Array.from(allImages).slice(0, currentActiveImages);
    	allImages.forEach(img => img.classList.add('hidden'));
    	let activeCategoryImages = allActiveImages.filter(img => img.dataset.category === category)
    	allImages.forEach(img => img.classList.remove('active'));
    	activeCategoryImages.forEach(img => img.classList.add('active'));
}

let counterSwitchArrowTabs=0;
function switchArrowTabs(event, index){
	document.querySelector(".quotes.active").classList.remove("active");
	document.querySelector(".images.active").classList.remove("active");
	document.querySelector(".active-images.active").classList.remove("active");
	document.querySelector(".names.active").classList.remove("active");
	document.querySelector(".positions.active").classList.remove("active");

	document.querySelectorAll(".images")[index].classList.add("active");
	document.querySelectorAll(".active-images")[index].classList.add("active");
	document.querySelectorAll(".quotes")[index].classList.add("active");
	document.querySelectorAll(".names")[index].classList.add("active");
	document.querySelectorAll(".positions")[index].classList.add("active");
}
function switchSliderContent(event){
	document.querySelector(".quotes.active").classList.remove("active");
	document.querySelectorAll('.quotes')[`${event.target.dataset.id}`].classList.add('active');

	document.querySelector(".active-images.active").classList.remove("active");
	document.querySelectorAll('.active-images')[`${event.target.dataset.id}`].classList.add('active');

	document.querySelector(".images.active").classList.remove("active");
	document.querySelectorAll('.images')[`${event.target.dataset.id}`].classList.add('active');

	document.querySelector(".names.active").classList.remove("active");
	document.querySelectorAll('.names')[`${event.target.dataset.id}`].classList.add('active');

	document.querySelector(".positions.active").classList.remove("active");
	document.querySelectorAll('.positions')[`${event.target.dataset.id}`].classList.add('active');
	counterSwitchArrowTabs = event.target.dataset.id;
}
document.getElementsByClassName("slider")[0].addEventListener("click", e => {
	if(e.target.classList.contains("images")){
		switchSliderContent(e);
	}else if(e.target.classList.contains("arrow-switch-left")){
		counterSwitchArrowTabs --;
		if(counterSwitchArrowTabs < 0){
			counterSwitchArrowTabs = 3;
		}
		switchArrowTabs(e, counterSwitchArrowTabs);
	}else if(e.target.classList.contains("arrow-switch-right")){
		counterSwitchArrowTabs++;
		if(counterSwitchArrowTabs > 3){
			counterSwitchArrowTabs = 0;
		}
		switchArrowTabs(e, counterSwitchArrowTabs);
	}
});