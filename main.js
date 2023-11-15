const body = document.body;
const header_burger = document.getElementById('header_burger');
const btn_closeMenu = document.getElementById('btn_closeMenu');
const mobile_nav_container = document.getElementById('mobile_nav_container');
const mobile_nav = document.getElementById('mobile_nav');
const mobile_nav_link = document.getElementsByClassName('mobile_nav_link');

console.log(mobile_nav_container)

header_burger.addEventListener('click', event =>{

	if( body.classList.contains('show_mobile_menu')){
		closeMenu();
	}	else{
		showMenu();
	}
});

mobile_nav.addEventListener('click', event =>{

	event.stopPropagation()
});
// btn_closeMenu.addEventListener('click', event =>{

// 	if( body.classList.contains('show_mobile_menu')){
// 		closeMenu();
// 	}	else{
// 		showMenu();
// 	}
// });

mobile_nav_container.addEventListener('click', event =>{
	console.log('win')
	if( body.classList.contains('show_mobile_menu')){
		closeMenu();
	}	else{
		showMenu();
	}
});

for (let i = 0; i < mobile_nav_link.length; i++) {
	mobile_nav_link[i].addEventListener('click', event =>{
		closeMenu();
	});
}

function showMenu(){
	body.classList.add('show_mobile_menu');
};

function closeMenu(){
	body.classList.remove('show_mobile_menu');
};