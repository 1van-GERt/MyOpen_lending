const body = document.body;
const header_burger = document.getElementById('header_burger');
const btn_closeMenu = document.getElementById('btn_closeMenu');
const mobile_nav_container = document.getElementById('mobile_nav_container');
const mobile_nav = document.getElementById('mobile_nav');
const mobile_nav_link = document.getElementsByClassName('mobile_nav_link');

const text_more_container_1 = document.getElementById('text_more_container_1');
const btn_more_1 = document.getElementsByClassName('btn_more_1');

const text_more_container_2 = document.getElementById('text_more_container_2');
const btn_more_2 = document.getElementsByClassName('btn_more_2');

const text_more_container_3 = document.getElementById('text_more_container_3');
const btn_more_3 = document.getElementsByClassName('btn_more_3');

const text_more_container_4 = document.getElementById('text_more_container_4');
const btn_more_4 = document.getElementsByClassName('btn_more_4');

const token_modal_btn = document.getElementById('token_modal_btn');
const token_modal = document.getElementsByClassName('token_modal');
console.log(token_modal_btn)

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


for (let i = 0; i < btn_more_1.length; i++) {
	btn_more_1[i].addEventListener('click', event =>{
		if( text_more_container_1.classList.contains('show_more')){
			text_more_container_1.classList.remove('show_more');
		}	else{
			text_more_container_1.classList.add('show_more');
		}
	});
}
	for (let i = 0; i < btn_more_2.length; i++) {
		btn_more_2[i].addEventListener('click', event =>{
			if( text_more_container_2.classList.contains('show_more')){
				text_more_container_2.classList.remove('show_more');
			}	else{
				text_more_container_2.classList.add('show_more');
			}
		});
}

for (let i = 0; i < btn_more_3.length; i++) {
	btn_more_3[i].addEventListener('click', event =>{
		if( text_more_container_3.classList.contains('show_more')){
			text_more_container_3.classList.remove('show_more');
		}	else{
			text_more_container_3.classList.add('show_more');
		}
	});
}

for (let i = 0; i < btn_more_4.length; i++) {
	btn_more_4[i].addEventListener('click', event =>{
		if( text_more_container_4.classList.contains('show_more')){
			text_more_container_4.classList.remove('show_more');
		}	else{
			text_more_container_4.classList.add('show_more');
		}
	});
}

/*___________________________  show_modal  ______________________*/

token_modal_btn.addEventListener('click', event =>{

	if( body.classList.contains('show_modal')){
		closeModal();
	}	else{
		showModal();
	}
});

token_modal.addEventListener('click', event =>{

	event.stopPropagation()
});

mobile_nav_container.addEventListener('click', event =>{

	if( body.classList.contains('show_modal')){
		closeModal();
	}	else{
		showModal();
	}
});


function showModal(){
	body.classList.add('show_modal');
};

function closeModal(){
	body.classList.remove('show_modal');
};