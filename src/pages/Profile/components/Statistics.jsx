import React from 'react'

import {HiFire} from 'react-icons/hi'


const statistics = () => {
  return (
    <div className='mt-4 border-t-2'>
      <div className='stats'>
        <h1 className='m-4 ml-5 text-2xl font-bold'> Статистика </h1>

        <div className='grid grid-cols-2 gap-3'>

          <div className='udarniyRezhim grid grid-rows-2 grid-cols-4 w-4/5 h-16 justify-self-end border-2 shadow-lg hover:shadow-slate-600/60'>
            <HiFire className='text-yellow-300 mt-2 row-span-2 grid content-end justify-self-center w-6 h-6'/>
            <div className='col-span-3 font-bold grid content-end text-sm'>23</div>
            <div className='text-sm justify-self-stretch col-span-3'>Ударный режим</div>
          </div>
          <div className='exp grid grid-rows-2 grid-cols-4 w-4/5 h-16 justify-self-start border-2 shadow-lg hover:shadow-slate-600/60'>
            <HiFire className='text-yellow-300 mt-2 row-span-2 grid content-end justify-self-center w-6 h-6'/>
            <div className='col-span-3 font-bold grid content-end text-sm'>142</div>
            <div className='text-sm justify-self-stretch col-span-3'>Очки опыта</div>
          </div>
          <div className='league grid grid-rows-2 grid-cols-4 w-4/5 h-16 justify-self-end border-2 shadow-lg hover:shadow-slate-600/60'>
            <HiFire className='text-yellow-300 mt-2 row-span-2 grid content-end justify-self-center w-6 h-6'/>
            <div className='col-span-3 font-bold grid content-end text-sm'>Золотая лига</div>
            <div className='text-sm justify-self-stretch col-span-3'>Текущяя лига</div>
          </div>
          <div className='top grid grid-rows-2 grid-cols-4 w-4/5 h-16 justify-self-start border-2 shadow-lg hover:shadow-slate-600/60'>
            <HiFire className='text-yellow-300 mt-2 row-span-2 grid content-end justify-self-center w-6 h-6'/>
            <div className='col-span-3 font-bold grid content-end text-sm'>0</div>
            <div className='text-sm justify-self-stretch col-span-3'>Топ 3</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default statistics