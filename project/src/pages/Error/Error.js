
import { useHistory } from 'react-router-dom'
import {Bloco} from './ErrorStyled'
import { goToSearchUser } from '../../Router/Cordinator'

export const Error = () => {
    const history = useHistory()
    return(
        <Bloco>
            <h3>Página não encontrada :(</h3>
            <button onClick={() => goToSearchUser(history)} >Voltar para a Home</button>
        </Bloco>
    )
}
export default Error;