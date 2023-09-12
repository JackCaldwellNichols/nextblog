
"use client";
import React, { useContext } from 'react'
import styles from './darkMode.module.css'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {

    const {mode, toggle} = useContext(ThemeContext)
    

  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={mode === 'light' ? {left: '3px'} : {right: '2px'}} onClick={toggle}/>
    </div>
  )
}

export default DarkModeToggle