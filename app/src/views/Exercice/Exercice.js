import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useNavigate } from "react-router-dom";
import { store } from '../../store.js';

const options = [
  {
    id: "2",
    text: "JavaScript",
  },
  {
    id: "4",
    text: "React",
  },
  {
    id: "3",
    text: "PHP",
  },
  {
    id: "1",
    text: "CSS",
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

  useEffect(() => {
    store.getState()?.enableExercice !== undefined && navigate('/') 
  }, [])

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
        enableResult: true,
        enableExercice: true
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
          <h1>Ordena alfabéticamente las siguientes palabras:</h1>
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


