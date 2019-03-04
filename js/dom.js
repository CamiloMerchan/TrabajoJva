// // /* 1*/ document
// // /* 2*/ document.body
// // /* 3*/document.body.header
// // /* 4*/ document.querySelector("header")
// // /* 5*/document.querySelector('.barra nav')
// // /* 6*/ $('header')
// // /* 7*/ $('siteHeader')
 console.log('1')
  ( function(){
    'use strict'
    document.dispatchEventListener('DOMContentLoaded', function(){
        console.log('2');
    })
 })();
 console.log('3');
 /* 8*/ 
 document.getElementById('barra');
 var barra=document.getElementById('barra');
 console.log(barra);

 //permite conocer si tiene un atributo llamado clase
 console.log(barra.getAttribute('class'));

  /* 9*/
  //cambiar atributos clase el primer parametro es el atributo a cambiar y el otro el nombre
  barra.setAttribute('class','bar2');
  console.log(barra);

  /* 10*/
  //seleccionando la navegacion principal y ocultandola
  var navegacionPrincipal=
  document.querySelector('.navegacionPrincipal');
  navegacionPrincipal.style.display='none';

    /* 11*/
//seleccionando elemnetos con la misma clase
var contenedor=
document.getElementsByClassName('contenedor');
console.log(contenedor);
console.log(contenedor[2]);
