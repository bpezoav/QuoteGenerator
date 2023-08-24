import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

export default function Home() {
  return (
    <>
       {/* Head module de NextJS, permite crear headers dinamicos para todas las paginas 
       o por página en particular en la aplicación */}
      <Head> 
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="Project for learning NextJS framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}

      {/* Utilizaremos el div con la animacion de gradiente que creamos utilizando styled-components */}
      <GradientBackgroundCon>
        
      </GradientBackgroundCon>
       
    </>
  )
}
