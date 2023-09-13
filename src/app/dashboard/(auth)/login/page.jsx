'use client'
import React from 'react'
import styles from './page.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {

const session = useSession()
const router = useRouter()
if(session.status === 'loading'){
  return (
    <p>Loading...</p>
  )
}



if(session.status === 'authenticated'){
  router?.push('/dashboard')
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    
    try {
      signIn('credentials', {email, password})
    } catch (error) {
      setError(true)
    }
  }
 return(
  <div className={styles.container} >
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" className={styles.input} placeholder='Email' required/>
        <input type="password" className={styles.input} placeholder='Password' required/>
        <button className={styles.button }>Log In</button>
      </form>
      <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.github}
      >
        Login with Github
      </button>
      <button
        onClick={() => {
          signIn('google');
        }}
        className={styles.google}
      >
        Login with Google
      </button>

    </div>
 )
}

export default Login