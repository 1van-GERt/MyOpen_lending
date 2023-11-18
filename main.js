const body = document.body;
const header_burger = document.getElementById('header_burger');
const btn_closeMenu = document.getElementById('btn_closeMenu');
const mobile_nav_container = document.getElementById('mobile_nav_container');
const mobile_nav = document.getElementById('mobile_nav');
const mobile_nav_link = document.getElementsByClassName('mobile_nav_link');

const text_more_container = document.getElementById('text_more_container');
const btn_more = document.getElementsByClassName('btn_more');
console.log(btn_more)

/*___________________________  show_mobile_menu  ______________________*/

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

mobile_nav_container.addEventListener('click', event =>{

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

/*___________________________  show_more  ______________________*/


for (let i = 0; i < btn_more.length; i++) {
	btn_more[i].addEventListener('click', event =>{
		if( text_more_container.classList.contains('show_more')){
			text_more_container.classList.remove('show_more');
			console.log('2')
		}	else{
			text_more_container.classList.add('show_more');
			console.log('1')
		}
	});
}
