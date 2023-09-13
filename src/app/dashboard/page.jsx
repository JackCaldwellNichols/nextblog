'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from "swr";
import styles from './page.module.css'
import Image from 'next/image';





const Dashboard = () => {
  const router = useRouter()
  const session = useSession()
 
 
   const fetcher = (...args) => fetch(...args).then(res => res.json())

   const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

   const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const image = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title, desc, image, content, userName: session.data.user.name,
        })
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
   }

   const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if(session.status === 'loading'){
    return (
      <p>Loading...</p>
    )
  }

  if(session.status === 'unauthenticated'){
    return (
      router?.push('/dashboard/login')
    )
  }


  if(session.status === 'authenticated'){
    return (
    <div className={styles.container}>
      <div className={styles.posts}>
      {isLoading
            ? "loading"
            : data?.map((post) => (

  <div className={styles.post} key={post._id}>
  <div className={styles.imgCont}>
      <Image loader={()=>post.image} src='https://www.pexels.com/photo/contrast-18306635/' alt='' width={200} height={100}/>
      </div>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>

</div>
    ))}
</div>
<form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type='text' className={styles.input} placeholder='Title'/>
          <input type='text' className={styles.input} placeholder='Description'/>
          <input type='text' className={styles.input} placeholder='Image'/>
          <textarea type='text' className={styles.input} placeholder='Content'cols={30} rows={10}></textarea>
          <button className={styles.button}>Send</button>
</form>

    </div>
    )
  }
}

export default Dashboard