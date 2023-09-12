'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'




const Dashboard = () => {
  const session = useSession()

  console.log(session)
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  return (
    <div>dashboard</div>
  )
}

export default Dashboard