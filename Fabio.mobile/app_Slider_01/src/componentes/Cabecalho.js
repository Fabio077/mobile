import React from "react";
import { View, Text, Image } from 'react-native';
import { estilos } from "./styleSheet/estilos";

function Cabecalho(){

    let img_logo = "https://cdn-icons-png.flaticon.com/512/814/814202.png";
    let titulo = "Componente Slider";

    return(
        <View style={estilos.area_cabecalho}>
            <Image source={{uri: img_logo}} style={estilos.img_cabecalho}/>
            <Text style={estilos.titulo_cabecalho}>{titulo}</Text>
        </View>
    );
}

export default Cabecalho;