import styles from '../../styles/components/title.module.css'

const  Title = ({ text, className }) => {

    return(
        <h1 className={`${ className } ${ styles.title }`}>{text}</h1>
    )
}

export default Title