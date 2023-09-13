import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
    
  }

return res.json()
}

const Blog = async () => {
const data = await getData();
 

  return (
    <div className={styles.container}>
      {data?.map((ele) => (
      <Link className={styles.wrapper} href={`/blog/${ele._id}`}>
        <div className={styles.imgCont}>
          <Image className={styles.img} src={ele.image} alt='BlogImg' fill={true}/>
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            {ele.title}
          </h1>
          <p className={styles.desc}>{ele.desc}</p>
        </div>
        </Link>
   ))}
    </div>
  )
}

export default Blog