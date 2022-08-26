import React from 'react'
import { useState,useEffect } from 'react'

import test from '../../../assets/test.jpg'
import gl1 from '../../../assets/gl1.png'
import gl2 from '../../../assets/gl2.png'
import data from '../../../data'


const Rating = () => {
  // паралакс 
  // useeffect запускает функцию при открытии страницы  


const examplProf = 13

const data2 = [
    {
        ratingNum:'1',
        img:{gl2},
        name:'name1',
        scores:'3234',
    },
    {
        ratingNum:'2',
        img:{gl2},
        name:'name2',
        scores:'954',
    },
    {
        ratingNum:'3',
        img:{gl2},
        name:'name3',
        scores:'879',
    },
    {
        ratingNum:'4',
        img:{gl2},
        name:'name4',
        scores:'234',
    },
    {
        ratingNum:'5',
        img:{gl2},
        name:'name5',
        scores:'132',
    },
    {
        ratingNum:'6',
        img:{gl2},
        name:'name6',
        scores:'24',
    },
    {
        ratingNum:'7',
        img:{gl2},
        name:'name7',
        scores:'24',
    },
    {
        ratingNum:'8',
        img:{gl2},
        name:'name8',
        scores:'24',
    },
    {
        ratingNum:'9',
        img:{gl2},
        name:'name9',
        scores:'24',
    },
    {
        ratingNum:'10',
        img:{gl2},
        name:'name10',
        scores:'24',
    },
    {
        ratingNum:'11',
        img:{gl2},
        name:'name11',
        scores:'24',
    },
    {
        ratingNum:'12',
        img:{gl2},
        name:'name12',
        scores:'24',
    },
    {
        ratingNum:'13',
        img:{gl2},
        name:'name13',
        scores:'24',
    },
    {
        ratingNum:'14',
        img:{gl2},
        name:'name14',
        scores:'24',
    }
  ]

  useEffect(() => {
   console.log('ss')
  }, [])

//   useEffect(() => {
//     console.log('succes')
  
//     return () => {
//       second
//     }
//   }, [])
  
  

  return (
    <div className='mt-4 h-screen'>
        <div className='font-bold text-2xl ml-5'>
            Рейтинг
        </div>
        <div className='flex justify-center mt-2'>
            <img src={gl1} className='h-48'></img>
        </div>
        <div className='w-full mt-4 border-2 h-3/5 overflow-hidden grid overflow-y-scroll'>
            {
                data2.map((currentProf) => {
                    let result = []
                    if(examplProf != currentProf.ratingNum){
                        let prof = <div className='w-full h-14 flex justify-between'>
                        <div className='flex justify-between items-center justify-stretch w-1/6'>
                            <div className='text-lg ml-2 font-medium'>{currentProf.ratingNum}</div>
                            <img src={gl2} className='h-9'/>
                        </div>
                        <div className='w-3/6 flex justify-center items-center font-medium text-lg'>
                            <h2>{currentProf.name}</h2>
                        </div>
                        <div className='w-1/6 items-center flex'>
                            <h2>{currentProf.scores}</h2>
                        </div>
                    </div>
                    result.push(prof)
                    }
                    else if(examplProf == currentProf.ratingNum){
                        let prof = <div className='w-full h-14 order-last flex justify-between'>
                        <div className='flex justify-between items-center justify-stretch w-1/6'>
                            <div className='text-lg ml-2 font-medium'>{currentProf.ratingNum}</div>
                            <img src={gl2} className='h-9'/>
                        </div>
                        <div className='w-3/6 flex justify-center items-center font-medium text-lg'>
                            <h2>{currentProf.name}</h2>
                        </div>
                        <div className='w-1/6 items-center flex'>
                            <h2>{currentProf.scores}</h2>
                        </div>
                    </div>
                    result.push(prof)
                    }

                    
                    return(result)
                })
            }
        </div>
    </div>
  )
}

export default Rating