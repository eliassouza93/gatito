import react from 'react-native'
import { TextInput } from 'react-native'
export default function CampoInteiro({ valor, acao }) {

    const numeroEmTexto = String(valor)//muda numero para texto no input
    return <TextInput
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => { acao(novoValor) }}
        value={numeroEmTexto}
    />
}