import { useEffect, useState } from 'react'

import Axios  from 'axios'

import styles from '../styles/pages/portfolio.module.css'

import headerImg from '../assets/portfolio.svg'
import Header from '../components/Header'
import RepoCard from '../components/RepoCard'
import Subtitle from '../components/shared/Subtitle'



const Portifolio = () => {
  const [inputValue, setInputValue] = useState('');
  const [reposData, setReposData] = useState([]);
  const [filteredReposList, setFilteredReposList] = useState([]);
  const url = 'https://api.github.com/users/mialuzmia/repos'
  
  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  useEffect(() => {
    const getRepos = async () => { 
      try {
        const response = await Axios.get(url) 
        
        setReposData(response.data)
        console.log(response.data)
  
        
      } catch (error) {
        console.error('error captured: ' + error)
  
      }
    }
    getRepos()
    console.log(reposData)
  }, []);

  useEffect(() => {
    const filteredRepos =  reposData.filter((repo) => {
      return repo.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredReposList(filteredRepos)

  }, [inputValue, reposData]);

  return (
  <>
    <Header
    title='Projetinhos da Mia'
    image={headerImg}
    altText='img portifolios'
  /> 
    <section className={ styles.searchContainer }>
      <Subtitle 
        text='Meus Projetos'
      />
      <input 
        className={ styles.searchInput}
        type="text"
        placeholder='Pesquise um repositório' 
        onChange={handleChange}
      />
    </section>

    <section className={styles.reposContainer}>
      {filteredReposList.map((repo) => <RepoCard reposData={repo} key={repo.id}/> )}
    </section>
  </>
    
  )
}

export default Portifolio