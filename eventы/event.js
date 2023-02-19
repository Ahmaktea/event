// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	alert(`хучу кущац`)
// });



// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });


// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func());
// elem.addEventListener('dblclick', func());

// function func(event) {
//     if (event.type === "click") {
//       elemButton.style.backgroundColor = "green";
//     }else if (event.type === "dblclick") {
//       elemButton.style.backgroundColor = "red";
//     }}

// let elemUl = document.querySelector('#elem');
// elemUl.addEventListener('click', func);

// function func(event) {
//   let elemTarget = event.target.tagName.toLowerCase();
//   console.log(elemTarget); 

//   if (elemTarget === 'ul') {
//     let P = document.createElement('li');
//     P.innerHTML = 'text';
//     elemUl.appendChild(P);
//   }

//   if (elemTarget === 'li') {
//     console.log(this);

//     let elemsLi = document.querySelectorAll('li');
//     for (let elemLi of elemsLi) {
//       elemLi.addEventListener('click', funcLi);
//     }
//     function funcLi() {
//       this.innerHTML += '!';
//     }  
//   }
// }


// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	elem.value = event.code;
// });


// let elem = document.querySelector('input');
// let p = document.querySelector('p');

// elem.addEventListener('keypress', function(event) {
//     if(event.code === `Enter`){
//         p.textContent = elem.value
//         elem.value = ``
//     }
// });


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.altKey) {
// 		elem.style.color = `red`
// 	}
// });



// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`click`, ()=>{
// let elemTarget = event.target.tagName.toLowerCase();
// if(elemTarget === `li` ){
//         this.innerHTML += '1';
//     }
//     if(elemTarget === `li` & event.CtrlKey){
//         this.innerHTML += '2';

//     }
// })





// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
//     this.innerHTML += `ее href`
// });


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let p = document.querySelector('p');
// elem3.addEventListener('click', function(event) {
//     event.preventDefault()
//     p.textContent = + elem1.value + + elem2.value;
// })


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	console.log('1');
// });
// elem2.addEventListener('click', function() {
// 	console.log('2');
// });
// elem3.addEventListener('click', function() {
// 	console.log('3');
// });



// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// div.addEventListener('click', function(event){
//     if(event.target.matches('div')){
//         console.log('Клик диву');
//     }
//     if(event.target.matches('ul')){
//         console.log('Клик списку');
//         let li = document.createElement('li');
//         li.setAttribute('id', 'li');
//         li.innerHTML = 'text';
//         ul1.appendChild(li);
//     }
//     if(event.target.matches('li')){
//         event.target.textContent = event.target.textContent + '!';
//         console.log('Клик  элементу списка');
//     }
// });

// let elem = document.querySelector('#elem');
// let but = document.querySelector('button');
// let block  = document.querySelector('#block');
// but.addEventListener('click', function() {
// 	block.classList.add('active');
// });
// elem.addEventListener('click', function() {
// 	block.classList.remove('active');
// });


// let ul = document.querySelector('ul')
// let li = document.querySelectorAll('li')
// ul.addEventListener('click', function() {
// event.target.innerHTML = event.target.innerHTML + '!';
//     console.log(this);         
// 	console.log(event.target);
// });