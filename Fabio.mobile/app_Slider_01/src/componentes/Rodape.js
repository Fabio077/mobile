import React from "react";
import {View, Text, Image} from 'react-native';
import { estilos } from "./styleSheet/estilos";

function Rodape(){
    let autor = "Fabio Rodrigues";
    let data = "08/05/2026";
    return(
        <View style={estilos.area_rodape}>
            <Text style={estilos.texto_rodape}>{autor}</Text>
            <Text style={estilos.texto_rodape}>{data}</Text>
        </View>
    );
}

export default Rodape;