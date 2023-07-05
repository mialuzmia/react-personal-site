import styles from '../styles/components/footer.module.css'
import Text from './shared/Text'

const Footer = ({ content }) => {
  return (
    <footer className={styles.footerContainer}>
      <Text className={styles.footerText} textContent={ content }/>
    </footer>
  )
}

export default Footer