import styles from '../styles/components/sobrecard.module.css'

import Image from './shared/Image'
import Subtitle from './shared/Subtitle'
import Text from './shared/Text'

const SobreCard = ({ title, text, image, altText, imageId }) => {
  return (

    <div className={ styles.sobrecardContainer }>
        <Image 
            src={ image }
            alt={ altText}
            className={ styles.sobrecardImage}
            id={imageId}

        />
        <Subtitle 
            className={ styles.sobrecardTitle } 
            text={ title } 
        />
        <Text 
            className={ styles.sobrecardText }
            textContent={ text }
            
        />
    </div>
  )
}

export default SobreCard