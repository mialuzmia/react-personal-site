import styles from '../styles/pages/home.module.css'

import { AddressBook, BracketsCurly, Cat } from 'phosphor-react'

import headerImg from '../assets/home.svg'
import HomeCard from "../components/HomeCard"

import Header from "../components/Header"

const Home = () => { 
  return (
    <>
      <Header
        title='Site da mia'
        image={headerImg}
        altText='img home'
      />

      <section className={ styles.cardsContainer }>

        <HomeCard
          Icon={ Cat }
          title='Vida'
          text='Eu conto um pouquinho sobre mim, minha formação, o que eu gosto e algumas curiosidades.'
        />
        <HomeCard
          Icon={ BracketsCurly }
          title='Código'
          text='Aqui mostro meus projetinhos que fiz até hoje.'
        />
        <HomeCard
          Icon={ AddressBook }
          title='Contato'
          text='Aqui você pode entrar em contato comigo, tanto para entrevistas de emprego como só pra trocar ideia :).'
        />

      </section>
    </>
  )
}

export default Home