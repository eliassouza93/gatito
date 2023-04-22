import { TouchableOpacity, Text } from 'react-native'
import estilosBotao from './estilos'


export default function Botao({ valor, acao }) {
    return (
        <TouchableOpacity onPress={acao} style={estilosBotao.botao} >
            <Text style={estilosBotao.texto}> {valor} </Text>

        </TouchableOpacity>

    )
}