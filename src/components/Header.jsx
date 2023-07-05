import styles from '../styles/components/header.module.css'

import Image from './shared/Image'
import Title from './shared/Title'

const Header = ({ title, image, altText }) => {
  return (
		<section className={styles.headerContainer}>
			<Title 
				text={ title }
				className={ styles.headerTitle }
			/>
			<Image 
				className={ styles.headerImage } 
				src={ image } 
				alt={ altText } 
			/>
			
		</section>
  )
}

export default Header