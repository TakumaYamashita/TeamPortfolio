'use strict';

 const div=document.createElement('div');
 div.classList.add('box');

 div.addEventListener('click',()=>{
  div.classList.toggle('cercle');

});

document.body.appendChild(div);