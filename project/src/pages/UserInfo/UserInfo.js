
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {URL, authentication} from '../../Assets/Url';
import {goToSearchUser} from '../../Router/Cordinator';
import {goToUserRepos} from '../../Router/Cordinator';
import {goToUserStarreds} from '../../Router/Cordinator';
import {Bar, Buttons, Info, User} from './UserInfoStyled'
import axios from 'axios';

const UserInfo = () => {
    const history = useHistory()
    const user = useParams().user
    const [results, setResults] = useState({})

    useEffect(() => {
      if (navigator.onLine) {
        let getUserUrl = URL+user+authentication
        axios.get(getUserUrl)
        .then((res) => {
          setResults(res.data)
        })
        .catch((err) => {
          alert('Usuário não encontrado.Você será redirecionado á pagina de pesquisa novamente.')
          goToSearchUser(history)
        })
      } else {
        alert('Você está sem conexão de internet no momento, tente mais tarde');
        goToSearchUser(history)
      }
    }, []);

    return(
      <>
        <Bar>
          <Buttons>
            <h3 onClick={() => goToSearchUser (history)}>Nova busca</h3>
            <h3 onClick={() => goToUserRepos (history, user)}>Repositórios</h3>
            <h3 onClick={() => goToUserStarreds (history, user)}>Mais Visitados</h3>
          </Buttons>
        </Bar>
        <Info>
          <User>
            <img src={results.avatar_url}/>
            <h1>{results.name}</h1>
            <h2>{results.login}</h2>
            <p>{results.location} {results.location && results.company ? ',' : ''} {results.company}</p>
            <br/>
            <a href={results.html_url}>Github</a> 
          </User>
        </Info>
    </>
    )
}
export default UserInfo;