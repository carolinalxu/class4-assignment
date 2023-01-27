import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Link href="/about">About Page</Link>
      <Link href="/grades">Grades Page</Link>
      <h1>Welcome to my home page</h1>
      <ul>
        <li>Create</li>
        <li>Read</li>
        <li>Update</li>
        <li>Delete</li>
      </ul>

      <button type="button">View all this info</button>

      </main>

      <footer>
        <p> In Class Example #1</p>
      </footer>
    </>
  )
}