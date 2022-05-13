import React from 'react';
import {StyleSheet,Image,Dimensions, Text, View} from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <> 
    <Image source={topo}  style={estilos.topo} />
    <Text style={estilos.titulo}>Detelhe da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <Text style={estilos.nomeFazenda}>Fazenda do Dandan</Text>
        <Text style={estilos.descricao}>Uma cesta com produtos 
            selecionados cuidadosamente 
            pelo Dandan para sua cozinha
            </Text>
            <Text style={estilos.para}>R$ 45,77</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
       position: "absolute", 
       textAlign: "center",
       fontSize: 16,
       lineHeight: 26,
       color: "white",
       fontWeight: "bold",
       padding: 16,
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontSize: "bold"
    },
    cesta:{
            paddingVertical: 8,
            paddingHorizontal: 16,
     },
    nomeFazenda:{
        fontsize: 16,
        lineHeight: 26,
        fontweight: "bold",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }

});