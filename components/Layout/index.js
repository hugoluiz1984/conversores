import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react'

import NavBar from '../Nav'


export default function Home({children}) {

  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <p href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Simple Converter</span>
        </p>
      <NavBar />
    </header>
      <main className=''>
        {children}
      </main>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
    </div>
  )
}