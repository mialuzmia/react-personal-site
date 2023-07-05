const Image = ({ className, src, alt, id }) => {

    return(
        <img 
        className={`image ${className}`}
        id={id}
        src={src} 
        alt={alt}/>
    )
}

export default Image