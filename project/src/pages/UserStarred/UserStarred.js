
import React, {useState, useEffect}from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {URL, authentication} from '../../Assets/Url';
import {goToUserRepos} from '../../Router/Cordinator';
import {goToSearchUser} from '../../Router/Cordinator';
import {goToUserInfo} from '../../Router/Cordinator';
import {Bar, Buttons} from '../UserInfo/UserInfoStyled'
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
            })
        } else {
          alert('Você está sem conexão de internet no momento, tente mais tarde');
          goToSearchUser(history)
        }
    }, []);

    const starredRepos = starreds.map((repo) => {
        return(
            <div>
            <p>{repo.name}</p>
            </div>
        )
    })

    return(
        <>
            <Bar>
                <Buttons>
                    <h3 onClick={() => goToSearchUser (history)}>Nova busca</h3>
                    <h3 onClick={() => goToUserInfo(history, user)}>Ver Detalhes</h3>
                    <h3 onClick={() => goToUserRepos (history, user)}>Repositórios</h3>
                </Buttons>
            </Bar>
            {starredRepos}
        </>
    )
}

export default UserStarred;