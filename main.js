const body = document.body;
const burger = document.getElementById('burger');
const btn_closeMenu = document.getElementById('btn_closeMenu');
const mask = document.getElementById('mask');
const menu_links = document.getElementsByClassName('menu_link');

burger.addEventListener('click', event =>{

	if( body.classList.contains('show_menu')){
		closeMenu();
	}	else{
		showMenu();
	}
});

btn_closeMenu.addEventListener('click', event =>{

	if( body.classList.contains('show_menu')){
		closeMenu();
	}	else{
		showMenu();
	}
});

mask.addEventListener('click', event =>{

	if( body.classList.contains('show_menu')){
		closeMenu();
	}	else{
		showMenu();
	}
});

for (let i = 0; i < menu_links.length; i++) {
	menu_links[i].addEventListener('click', event =>{
		closeMenu();
	});
}

function showMenu(){
	body.classList.add('show_menu');
};

function closeMenu(){
	body.classList.remove('show_menu');
};