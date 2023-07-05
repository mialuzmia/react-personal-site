import { useState } from "react"

import datatabase from "../services/firebase"
import { ref, push, set } from "firebase/database"

import headerImg from '../assets/contato.svg'

import styles from '../styles/pages/contato.module.css'

import Header from "../components/Header"

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleMessageChange = (e) => setMessage(e.target.value)

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    const messageListref = ref(datatabase, "messages")
    const newMessageRef = push(messageListref)

    set(newMessageRef, {
      name: name, 
      email: email, 
      text: message
    })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
    <Header
    title='Me contate!'
    image={headerImg}
    altText='img contatos'
  />

  <div className={styles.formContainer}>

    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.formInput}
        type="text"
        placeholder='Digite seu nome'
        onChange={handleNameChange}
        value={name}
      />

      <input 
        className={styles.formInput}
        type="email" 
        placeholder='Digite seu email'
        onChange={handleEmailChange}
        value={email}
      />
      <textarea
        className={styles.formInput}
        placeholder='Digite sua mensagem'
        onChange={handleMessageChange}
        value={message}
        />
        <button 
        className={styles.formButton} 
        type="submit"
        >Enviar mensagem</button>
    </form>
  </div>
    </>
  
  )
}

export default Contato