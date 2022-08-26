import React from 'react'
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { useState } from 'react'

import {List, closeModal} from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Modalwindow from './components/Modalwindow';
import '../../app.css'

const Course = () => {

  const [modalTitle, setModalTitle] = useState('a')
  const [modalHexagonsAll, setModalHexagonsAll] = useState(1)
  const [modalHexagonsColored, setModalHexagonsColored] = useState(0)
  
  return (
    <React.Fragment>
      <div onClick={closeModal}>
      <Header/>
      <List setModalTitle={setModalTitle} a='5' setModalHexagonsAll={setModalHexagonsAll} setModalHexagonsColored={setModalHexagonsColored} />
      </div>
      <div>
        <Modalwindow modalTitle={modalTitle} modalHexagonsAll={modalHexagonsAll} modalHexagonsColored={modalHexagonsColored} />
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Course