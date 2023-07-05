import styles from '../../styles/components/text.module.css'

const Text = ({ textContent, className, children} ) => {


    return(
        <p className={`${ className } ${styles.text}`}>
            {children }
            { textContent }
        </p>
    )
}

export default Text