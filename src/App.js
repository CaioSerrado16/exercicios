import React from 'react'
import { View, StyleSheet } from 'react-native'

import Diferenciar from './components/Diferenciar'
import ContadorV2 from './components/contador/ContadorV2'
import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
import Contator from './components/Contator'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Aleatorio from './components/Aleatorio'
import MinMax from './components/MinMax'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <Diferenciar />
        {/* 
        <ContadorV2 />
        <Pai />
        <Pai/>
        <Contator inicial={100} passo={13} />
        <Contator />
        <Botao/>
        <Titulo principal="Cadastro Produto" 
                secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={50} />
        <Aleatorio min={1} max={50} />
        <Aleatorio min={1} max={50} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </View>
)

const style = StyleSheet.create({ 
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})
