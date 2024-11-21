import { useEffect, useState } from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './App.css'
import { getCharacter } from './services/character';

function App() {
 

  useEffect(()=>{
 getCharacter(2);
  },[])


  return (
    <>

    <Header/>
      <Footer/>
    </>
  )
}

export default App
