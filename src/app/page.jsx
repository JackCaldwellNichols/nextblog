import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better design. Better future.</h1>
        <p className={styles.desc}>Converting analogue ideas into digital discoveries. One at a time.</p>
        <Button url='portfolio' text='Learn More'/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='' className={styles.image}/>
      </div>
    </div>
  )
}
