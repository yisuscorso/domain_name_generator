/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let pronoun = ["el", "la"];
let adj = ["maravilloso", "grande"];
let noun = ["jugada", "venus"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let newDomain = pronoun[i] + adj[j] + noun[k];
      let lista = document.getElementById("domain"); //Buscar el elemento con la id dada
      let newLi = document.createElement("li"); //crear nuevo elemento
      let contenido = document.createTextNode(newDomain); //crea texto
      lista.appendChild(newLi); //añade newLi a lista
      newLi.appendChild(contenido); // añade texto al nuevo newli
    }
  }
}
