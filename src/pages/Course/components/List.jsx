import React from 'react'
import { useState } from 'react'

import './list.css'
import Modalwindow from './Modalwindow'
import data from '../data'

function List (props) {

  function showModal(id){
    let modalWindow = document.getElementById('modalWindow')
    modalWindow.classList.remove('hidden')
    let modalPlace = document.getElementById('modalPlace' + id)
    modalPlace.appendChild(modalWindow)
    
    let hex = data.find(hexObj => hexObj.id == id)

    props.setModalTitle(hex.title)
    props.setModalHexagonsAll(hex.hexall)
    props.setModalHexagonsColored(hex.colored)
  }

  return (
    <React.Fragment>
      <div className='flex mb-5 mainScreen justify-center'>
        <div className='grid h-screen mt-10 w-2/3 grid-cols-2 place-items-center gap-2'>
          {
          data.map((currentHex, index) => {
            let hexagon = (
              <div className='text-center'>
                <div onClick={() => {
                  showModal(currentHex.id)
                  }} id={currentHex.id} className="hexagon text-center w-24 h-24 bg-red-300">{currentHex.img}</div>
                <h5>{currentHex.title} </h5>
              </div>
            )
            let empty = <div></div>
            let modalPlace = <div id={'modalPlace' + currentHex.id} className='w-full col-span-2'></div>
            let result = []
            if(index %2 == 0){
              result.push(empty, hexagon)
            }
            else{
              result.push(hexagon, empty)
            }
            result.push(modalPlace)
            return(result)
          }
        )}
        </div>
      </div>
    </React.Fragment>
  )
}




function closeModal(event){
  let target = event.target
  if (target.classList.contains('hexagon') == false){
    let modalWindow = document.getElementById('modalWindow')
    modalWindow.classList.add('hidden')
  }
}



export {List,closeModal}