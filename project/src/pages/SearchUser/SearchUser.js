
import React from 'react';
import { useHistory } from 'react-router-dom';
import {goToUserInfo, goToSearchUser} from '../../Router/Cordinator'
import {Bar, Main,Search} from './SearchStyled'

const SearchUser = () => {
    const history = useHistory()
    let inputSearch = React.createRef();
    
    const searchUser = (user) => {
        if (navigator.onLine) {
            goToUserInfo(history, user)
        } else {
          alert('Você está sem conexão de internet no momento, tente mais tarde');
          goToSearchUser(history)
        }
      }

    return(
        <>
            <Bar>
                <h3>Procure por um usuário logo abaixo</h3>
            </Bar>
            <Main>
                <Search>
                    <input ref={inputSearch} placeholder='Digite um usuário...'/>
                    <button onClick={() => searchUser(inputSearch.current.value)}>Buscar</button>
                </Search>
            </Main>
        </>
    )
}
export default SearchUser;