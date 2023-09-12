import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div>Copyright 2023 NextBlog. All rights reserved.</div>
      <div className={styles.iconWrapper}>
        <Image src='/1.png'  width={15} height={15} alt='NextBlog'className={styles.icon}/>
        <Image src='/2.png'  width={15} height={15} alt='NextBlog' className={styles.icon}/>
        <Image src='/3.png'  width={15} height={15} alt='NextBlog' className={styles.icon}/>
        <Image src='/4.png'  width={15} height={15} alt='NextBlog' className={styles.icon}/>

      </div>
    </div>
  )
}

export default Footer