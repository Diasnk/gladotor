import React from 'react'

import './modalwindow.css'

const Modalwindow = ({modalTitle, modalHexagonsAll, modalHexagonsColored}) => {

  function drawHex(){
    let result = []
    for(let i = 1; i <= modalHexagonsAll; i++){
      const lowerColored = 'hexagon w-10 h-10 bg-blue mtm mrm'
      const upperColored = 'hexagon w-10 h-10 bg-blue'
      const lowerEmpty = 'hexagon h-10 w-10 border-2 mtm mrm'
      const upperEmpty = 'hexagon h-10 w-10 border-2'
      const lower = 'mr-3 mp-2'
      if(i <= modalHexagonsColored){
        if(i % 2 == 0){
          result.push(<div className={lowerColored}>{i}</div>)
        }
        else{
          result.push(<div className={upperColored}>{i}</div>)
        }
      }
      else{
        if(i % 2 == 0){
          result.push(<div className={lowerEmpty}>{i}</div>)
        }
        else{
          result.push(<div className={upperEmpty}>{i}</div>)
        }
      }

    }
    return result
  }

  return (
    <div id='modalWindow' className='hidden w-full left-0 absolute z-10'>
      <div id='smallModalWindow' className='modalBackground flex items-center justify-center  '>
        <div className='modalContainer bg-white content-start w-2/3 px-2 h-48 border-2 rounded-md'>
          <h1>{modalTitle}</h1>
          <div className='w-full flex'>
            {drawHex()}
          </div>
          <h5 className=''>Прогресс {modalHexagonsColored} из {modalHexagonsAll}</h5>
          <div className='w-full grid'>
          <button className='border-2 h-7 rounded-sm justify-self-center w-3/5 text-blue '>Теория</button>
          <button className='mt-0.5 bg-blue text-white border-2 h-7 rounded-sm justify-self-center w-3/5'>Задачи</button>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Modalwindow
