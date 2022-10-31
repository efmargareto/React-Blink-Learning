import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './Exercice.css'


const initialItems = [
  {
 id: '1', 
 name: 'Item 1'
},
{
 id: '2', 
 name: 'Item 2'
},
{
 id: '3', 
 name: 'Item 3'},
{
 id: '4', 
 name: 'Item 4'
}
]

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Exercice = () => {

  const [items, setItem] = useState(initialItems)
  
  return (
    <DragDropContext 
      onDragEnd={ result => {
      console.log('on drag end result', result)
      const { source, destination } = result
      if(!destination) {
        return
      }
      if(
        source.index === destination.index &&
        source.droppableId === destination.droppableId
      ) {
        return
      } 

      setItem( preItem => {
        reorder(preItem, source.index, destination.index)
      })
    }}>
      <div className='Exercice'>
        <div className='container'>
          <h2>Drag and Drop Exercice</h2>

          <Droppable droppableId='items'>
  
            { droppableProvided => (
              <ul 
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="items-container"
              >
                {
                  items.map( (item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    { (draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className='item'
                      >
                        {item.name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>

          {/* <div className='target'></div> */}
        </div>
      </div>
    </DragDropContext>
  )
}
