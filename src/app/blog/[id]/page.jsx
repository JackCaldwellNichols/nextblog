import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
    
  }

return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}



const BlogPost = async ({params}) => {
const data = await getData(params.id)

  return (
    <div className={styles.container}>
 
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.userCont}>
        <Image src={data.image} alt='' className={styles.userImg} height={30} width={30}/>         
            <span className={styles.userName}>{data.userName}</span>
            </div>
        </div>
     
      <div className={styles.topRight}>
 <Image src={data.image} alt='' className={styles.userImg} height={30} width={30}/>  
      </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.blogText}>
          {data.content}
        </span>
      </div>

    </div>
  )
}

export default BlogPost