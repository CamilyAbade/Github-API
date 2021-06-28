
import React, {useState, useEffect}from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {URL} from '../../Assets/Url';
import {authentication} from '../../Assets/key'
import {goToUserRepos} from '../../Router/Cordinator';
import {goToSearchUser} from '../../Router/Cordinator';
import {goToUserInfo} from '../../Router/Cordinator';
import {Buttons, Main, Bar, Repos, CardRepo} from './UserStarredStyled';
import axios from 'axios';

const UserStarred = () => {
    const history = useHistory()
    const [starreds, setStarreds] = useState([])
    const user = useParams().user
    
    useEffect(() => {
        if (navigator.onLine) {
            let starredUrl = URL+user+'/starred'+authentication
            axios.get(starredUrl)
            .then((res) => {
                setStarreds(res.data)
                if (Object.keys(res.data).length === 0){
                    alert(`Esse perfil não tem repositórios mais visitados, você será redirecionado à página de detalhes do ${user}`)
                    goToUserInfo (history, user)
                } 
            })
            .catch((err) => {
                alert('Esse usuário não existe, você será redirecionado para a pagina de pesquisa novamente')
                goToSearchUser (history)
            })
        } else {
          alert('Você está sem conexão de internet no momento, tente mais tarde');
          goToSearchUser(history)
        }
    }, []);

    const starredRepos = starreds.map((starred) => {
        return(
            <CardRepo>
                <h3><a href={starred.html_url}>{starred.name}</a></h3>
            </CardRepo>
        )
    })

    return(
        <Main>
            <Bar>
            <Buttons>
                <h3 onClick={() => goToSearchUser (history)}>Nova busca</h3>
                <h3 onClick={() => goToUserInfo(history, user)}>Ver Detalhes</h3>
                <h3 onClick={() => goToUserRepos (history, user)}>Repositórios</h3>
            </Buttons>
            </Bar>
            <Repos>
                <h1>Mais visitados</h1>
                {starredRepos}
            </Repos>
        </Main>
    )
}
export default UserStarred;