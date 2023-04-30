import estilos from './estilos'
import Botao from '../Botao'
import { View, Text } from 'react-native'

export default function StatusCarrinho({ total }) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do Carrinho:</Text>
            <Text style={estilos.total}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style={estilos.botao}>
            <Botao valor='Concluir Pedido' />
        </View>
    </View>


}