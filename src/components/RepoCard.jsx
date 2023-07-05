import styles from '../styles/components/repocard.module.css'

import { Star } from 'phosphor-react'

import Text from './shared/Text'


const RepoCard = ({ reposData }) => {

  const { id, name, html_url, description, language, stargazers_count} = reposData
  return (
    <div className={ styles.repoCard  } key={id}>

        <a className={ styles.repoLink} href={ html_url } target="_blank">
            <h3 className={ styles.repoName}>{ name }</h3>
        </a>

        <p className={ styles.repoDescription }>{ description }</p>

        <div className={ styles.repoDetails}>
            <Text 
              textContent={ language }
              className={ styles.detailsText }
            />
            <Text 
              className={ styles.detailsText }
              children={ <Star className='icon' color='yellow' weight='fill' size='18px'/> }
              textContent={ stargazers_count }
            />
          
        </div>
    </div>
  )
}

export default RepoCard