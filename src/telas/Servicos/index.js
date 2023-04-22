import React from 'react';
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import Item from './Item';
import estilosGlobal from "./estilos"

const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: 'NÃO DE BANHO NO SEU GATO! mas se precisar nós damos'
    },
    {
        id: 2,
        nome: 'Vacina v4',
        preco: 89.9,
        descricao: 'Uma dose da vaciana v4. Seu gato precisa de duas'
    },
    {
        id: 3,
        nome: 'Vacina Antirrábica',
        preco: 99.9,
        descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano'
    }
]

export default function () {
    return (
        <SafeAreaView style={estilosGlobal.preencher}>

            <StatusBar />
            <KeyboardAvoidingView 
             >
                <FlatList
                    data={servicos}
                    removeClippedSubviews={false}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={(titulo) => titulo.id}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}