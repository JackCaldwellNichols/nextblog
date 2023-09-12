import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'


const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }

  return notFound
}

const Category = ({params}) => {
const data = getData(params.catName)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.catName}</h1>
      {data.map((ele) => (

   
      <div className={styles.item} key={ele.id}>
      <div className={styles.content}>
    <h1 className={styles.title}>{ele.title}</h1>
    <p className={styles.desc}>{ele.desc}</p>
    <Button text='See More' url='#'/>
</div>
<div className={styles.imgCont}>
    <Image className={styles.img} fill={true} src={ele.image}></Image>
</div>

      </div>
     ))}
    </div>
  )
}

export default Category