
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {URL, authentication} from '../../Assets/Url';
import {goToUserStarreds} from '../../Router/Cordinator';
import {goToSearchUser} from '../../Router/Cordinator';
import {goToUserInfo} from '../../Router/Cordinator';
import {Buttons, Main, Bar, Repos} from './ReposStyled'

import axios from 'axios';

const UserRepos = () => {
    const history = useHistory()
    const [repos, setRepos] = useState([])
    const user = useParams().user
    
    useEffect(() => {
      if (navigator.onLine) {
        let getRepoUrl = URL+user+'/repos'+authentication
        axios.get(getRepoUrl)
        .then((res) => {
          setRepos(res.data)
          if (Object.keys(res.data).length === 0){
            alert(`Esse perfil não tem repositórios, você será redirecionado à página de detalhes do(a) ${user}`)
            goToUserInfo (history, user)
          } 
        })
        .catch((err) => {
          alert('Error') // tratar possíveis erros
        })
      } else {
        alert('Você está sem conexão de internet no momento, tente mais tarde');
        goToSearchUser(history)
      }
    }, []);

    const reposInfo = repos.map((repo) => {
      console.log(repo)
      return(
        <div>
          <p>{repo.name}</p>
        </div>
      )
    })

    return(
      <Main>
        <Bar>
          <Buttons>
              <h3 onClick={() => goToSearchUser (history)}>Nova busca</h3 >
              <h3 onClick={() => goToUserInfo(history, user)}>Ver Detalhes</h3>
              <h3 onClick={() => goToUserStarreds (history, user)}>Mais Visitados</h3 >
          </Buttons>
        </Bar>
        <Repos>
          <div>
            <h1>Repositórios</h1>
            <h3>{reposInfo}</h3>
          </div>
        </Repos>
      </Main>
    )
}

export default UserRepos;