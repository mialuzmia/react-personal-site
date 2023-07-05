

import styles from '../styles/components/homecard.module.css'

import Subtitle from './shared/Subtitle'
import Text from './shared/Text'

const HomeCard = ({ title, text, Icon }) => {
  return (

    <div className={ styles.homecardContainer }>
        <Icon 
            color='#686AAC'
            weight='thin'
            size={150}
        />
        <Subtitle 
            className={ styles.homecardTitle } 
            text={ title } 
        />
        <Text 
            className={ styles.homecardText }
            textContent={ text }
            
        />
    </div>
  )
}

export default HomeCard