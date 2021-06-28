
import { useHistory } from 'react-router-dom'
import {Bloco} from './ErrorStyled'
import { goToSearchUser } from '../../Router/Cordinator'


const Error = () => {
    const history = useHistory()

    return(
        <Bloco>
            <h3>Erro</h3>
            <button onClick={() => goToSearchUser(history)} >Voltar para a Home</button>
        </Bloco>
    )
}

export default Error;