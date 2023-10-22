//bg-body-secondary

/**let about = document.querySelector('#aboutme');
let abttxt = document.querySelector('#abttxt');
let interests = document.querySelector('#interests');
let tstack = document.querySelector('#tstack');
let carddiv = document.querySelector('#carddiv');

about.addEventListener('mouseover', () => {
    about.classList.add('animate__fadeInRight');

    setTimeout(() => {
    	abttxt.classList.add('animate__fadeInRight');
    }, 40);

    setTimeout(() => {
		carddiv.classList.add('animate__fadeInRight');
	}, 40);

    setTimeout(() => {
    	interests.classList.add('animate__fadeInRight');
    }, 80);

    setTimeout(() => {
		tstack.classList.add('animate__fadeInRight');
	}, 200)
});


removeclass = function(animation, element){
	return element.classList.remove(animation);
}



let projects = document.querySelector('#projects');
// let abttxt = document.querySelector('#abttxt');
// let interests = document.querySelector('#interests');
// let tstack = document.querySelector('#tstack');
// let carddiv = document.querySelector('#carddiv');

projects.addEventListener('mouseover', () => {
    projects.classList.add('animate__fadeInRight');

 //    setTimeout(() => {
 //    	abttxt.classList.add('animate__fadeInRight');
 //    }, 40);

 //    setTimeout(() => {
	// 	carddiv.classList.add('animate__fadeInRight');
	// }, 40);

 //    setTimeout(() => {
 //    	interests.classList.add('animate__fadeInRight');
 //    }, 80);

 //    setTimeout(() => {
	// 	tstack.classList.add('animate__fadeInRight');
	// }, 200)
});*/

let animated_elms = document.querySelectorAll('.animate__animated');

document.addEventListener('scroll', () => {

	animated_elms.forEach(el => {
		if(isInView(el)){
			el.classList.remove('faders')
			el.classList.add('animate__fadeInUp');
		}
	})
});


function isInView(element){
	const rect = element.getBoundingClientRect();

	return (
		rect.bottom > 0 &&
		rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
	);
}