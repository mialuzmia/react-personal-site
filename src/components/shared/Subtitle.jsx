import styles from '../../styles/components/subtitle.module.css'

const  Subtitle = ({ text, className }) => {

    return(
        <h2 className={`${ styles.subtitle } ${ className }`}>{text}</h2>
    )
}

export default Subtitle