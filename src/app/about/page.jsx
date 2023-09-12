import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
         <div className={styles.imgCont} >
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        fill={true} 
        className={styles.img}
        alt=''
        /> 
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Artistry</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textCont}>
      <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas magnam odio et, excepturi, explicabo sint vitae eius nobis voluptatem magni odit 
            cupiditate unde rem nulla? 
            <br /><br />
            Magnam rerum architecto consequatur cupiditate? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Expedita repellendus ratione, accusamus quam soluta dolores tempora. 
            Molestiae quis facilis itaque saepe, 
            quaerat delectus voluptatem deserunt explicabo, 
            nostrum laboriosam, tenetur iure!</p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Who we do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas magnam odio et, excepturi, explicabo sint vitae eius nobis voluptatem magni odit 
            cupiditate unde rem nulla? 
            <br /><br />
            Magnam rerum architecto consequatur cupiditate? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Expedita repellendus ratione, accusamus quam soluta dolores tempora. 
            Molestiae quis facilis itaque saepe, 
            quaerat delectus voluptatem deserunt explicabo, 
            nostrum laboriosam, tenetur iure!
            </p>
            <Button url='contact' text='Contact'/>
        </div>
      </div>
    
    </div>
  )
}

export default About