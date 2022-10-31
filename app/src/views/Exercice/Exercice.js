import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useNavigate } from "react-router-dom";
import { store } from '../../store.js';
import './Exercice.css'

const options = [
  {
    id: "1",
    text: "A",
  },
  {
    id: "2",
    text: "B",
  },
  {
    id: "3",
    text: "C",
  },
  {
    id: "4",
    text: "D",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const Exercice = () => {
  const [tasks, setTasks] = useState(options);
  const navigate = useNavigate()

  const saveResult = () => {
    const orderTask = document.querySelectorAll("div[data-rbd-droppable-id='options'] div .task-text")
    const result = []
  
    orderTask.forEach( elem => {
      result.push({
        text: elem.innerText,
        position: elem.id
      })
    })

    store.dispatch({
      type: 'NEW_RESULT',
      payload: {
        content: result,
        enableResult: true
      }
    })

    navigate('/')
  }

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }
        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="exercice">
        <div className='container'>
          <h1>Ordena alfabeticamente las siguientes palabras</h1>
          <Droppable droppableId="options" className='options'>
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(draggableProvided) => (
                      <div
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className='task'
                      >
                        <span className='task-order'>{index + 1}</span>
                        <span id={task.id} className='task-text'>{task.text}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
          <button onClick={saveResult} className='button button1 m-0'>GUARDAR</button>
        </div>
      </div>
    </DragDropContext>
  );
}


