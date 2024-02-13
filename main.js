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



// var countDownDate = new Date("dec 31, 2023 23:59:59").getTime();
// // var countDownDate = new Date("dec 31, 2023 18:14:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime()
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById("watch").innerHTML = days + " : " + hours + " : "  + minutes + " : " + seconds;
//   if (distance < 0) {
//     clearInterval(x);
	
// window.scroll(0, 0);

// document.getElementById("Coming").style.cssText += `
// 	opacity: 0;
// 	transition: all 1000ms;
//   `;
//   document.getElementById("watch").style.cssText += `
// 	color: gold
//   `;

//   document.getElementById("watch").innerHTML = "Happy New Year"

//   document.getElementById("tagline").className ="test2"
  


//   setTimeout(
// 	() => {		
// 		document.getElementById("countdown_container").style.cssText += `
// 		opacity: 0;
// 		transition: all 1000ms;
// 	  `;
// 	},
// 	5000
//   );
//   setTimeout(
// 	() => {		
// 		document.body.classList.remove("body_fix");
// 		document.getElementById("countdown_container").style.cssText += `
// display: none
// 	  `;
// 	},
// 	6000
//   );

//   }
// }, 1000);