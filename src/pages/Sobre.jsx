import styles from '../styles/pages/sobre.module.css'

import erin from '../assets/erin2.jpg'

import headerImg from '../assets/sobre.svg'
import Header from '../components/Header'
import Subtitle from '../components/shared/Subtitle'
import Text from '../components/shared/Text'
import SobreCard from '../components/SobreCard'


const Sobre = () => {
  return (
  <>
    <Header
      title='Mais sobre mim'
      image={headerImg}
      altText='img sobre'
    />

    <section className={ styles.aboutContainer}>
      <Subtitle 
        text='Prazer, Mia Luz.' 
      />
      <Text 
        className={ styles.aboutText }
        textContent='Sou Roraimense, tenho 19 anos, sou uma mulher trans e autista e apaixonada por Front-End (porém quero ser Full-Stack). Hoje faço o Bootcamp Front-End da reprograma e espero estar ativa no mercado em breve :).'
      />
    </section>

    <section>

      <Subtitle 
        text='Curiosidades sobre mim.'
      />

      <div className={ styles.cardsContainer}>
        <SobreCard 
          image={ erin }
          imageId='erinImg'
          altText='foto da gata erin, que é uma frajolinha e está de barriga pra cima'
          title='Gatos 😺'
          text='Tenho uma gata frajolinha chamada Erin'
        />
        <SobreCard 
          image='https://thumbs.gfycat.com/IgnorantHarmfulChrysalis-small.gif'
          altText='gif dos mugiwaras de one piece se abraçamdo e sorrindo'
          title='Animes'
          text='Sou bem nerd e gosto de animes e o meu favorito é One Piece.'
        />
        
        <SobreCard 
          image='https://64.media.tumblr.com/d9b551dba41e52ccbe887cf6573ac301/7c1f6918a0543597-98/s640x960/2bc072cd248ebfb02bf4962520d7a1725dd4a7c9.gif'
          altText='gif do jogo spiritfarer'
          title='Jogos'
          text='Também gosto de jogar no meu tempo livre e meu jogo favorito é Spiritfarer.'
        />
        <SobreCard 
          image='https://i.pinimg.com/originals/8f/79/07/8f79079819585381a31a04a3a8b0d3c5.gif'
          altText='gif de anime escrevendo em japonês'
          title='Línguas'
          text='Eu gosto de aprender línguas, eu falo inglês e agora tô aprendendo japonês.'
        />
      </div>

    </section>
   
  </>
    
  )
}

export default Sobre