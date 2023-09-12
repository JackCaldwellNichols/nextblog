import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'



export const metadata = {
  title: 'NextBlog Contact Information',
  description: 'This is the contact page.',
}

const Contact = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
      <div className={styles.imgCont}>
        <Image src='/contact.png' alt='contact' fill={true} className={styles.img}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input}/>
          <input type="email" placeholder='Email' className={styles.input}/>
          <textarea type="text" placeholder='Message' className={styles.textArea} cols={30} rows={10}></textarea>
          <Button text='Send' url='#'/>
        </form>

      </div>
    </div>
  )
}

export default Contact