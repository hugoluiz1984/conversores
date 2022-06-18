import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Comprimento from '../../components/Comprimento'

export default function Numeros() {



  return (
    <div className='container'>
      <Head>
        <title>Conversor de unidades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">Comprimento</button>
            <button type="button" class="btn btn-success">Volume</button>
          </div>
          <Comprimento />
        </div>
    </div>
  )
}
