import React, { useEffect, useState } from 'react'
import './Exercice.css'

export const Exercice = () => {


  useEffect(() => {
   handleNewPuzzle()
  }, [])


  const allowDrop = event => event.preventDefault()

  const drag = event => event.dataTransfer.setData('id', event.target.id)

  const drop = event => {
    event.preventDefault()
    const img = document.getElementById(event.dataTransfer.getData('id'))
    const imgParent = img.parentNode
    let objective;

    if (objective === event.currentTarget.firstElementChild) {
      event.currentTarget.replaceChild(img, objective);
      imgParent.appendChild(objective);
    }

    console.log('comps')

    comp()
  }

  const handleNewPuzzle = () => {

    // Configuración juego
    const NUM_PUZZLES = 4;
    const NUM_PIEZAS = 9;

    // Generación tirada de piezas
    let arrayTirada = [];

    console.log('dentro de nuevo pzcle')

    for (let i = 0; i < NUM_PIEZAS; i++) {
      let num = Math.floor(Math.random() * NUM_PIEZAS) + 1;
      while(arrayTirada.indexOf(num)>=0){
        num = Math.floor(Math.random() * NUM_PIEZAS) + 1;
      }
      arrayTirada.push(num);
    }

    console.log(arrayTirada);

		// Colocación piezas casiila
    let puzzle = Math.floor(Math.random() * NUM_PUZZLES) + 1;
    console.log("Número de puzzle => " + puzzle);
    let ruta = "imgs/" + puzzle + "/";
    console.log(ruta);

    for (let i = 0; i < NUM_PIEZAS; i++) {
      let imagen = arrayTirada[i] + ".jpg";
      console.log(imagen);
      document.getElementById("pieza" + i)
      .innerHTML = "<img src='" + ruta + imagen + "' id='foto" + arrayTirada[i] + "' class='foto' data-order='" + arrayTirada[i] + "' draggable='true' onDragStart='drag(event)'>";
    }
  }

  function comp(){
    const elements = [1,2,3,4,5,6,7,8,9];
    const comp = [];
    const puzzle = document.querySelector("#puzzle");
    const imagenes = puzzle.querySelectorAll("img");

    for (var i = 0; i < imagenes.length; i++) {
      comp.push(parseInt(imagenes[i].getAttribute("data-order")));
    }
    console.log(comp);

    if (elements.toString() === comp.toString()) {
      alert("Has ganado!");
      handleNewPuzzle();
    }
  }



  return (
    <div>
      <p>Exercice Drag and Drop</p>

      <div className="container">

      <div id="puzzle" className="box">
        <div id="pieza0" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza1" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza2" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza3" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza4" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza5" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza6" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza7" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
        <div id="pieza8" className="pieza" onDragOver={event => allowDrop(event)} onDrop={event => drop(event)} onDragStart={event => drag(event)}></div>
      </div>


      </div>
    </div>
  )
}
