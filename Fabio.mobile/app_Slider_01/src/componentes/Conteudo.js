import React, { use, useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { estilos } from "./styleSheet/estilos";
import Slider from "@react-native-community/slider";

function Conteudo(){
    let texto = "O componente Slider permite que o usuário escolha um valor de um intervalo predefinido de valores, arrastando um botão ao longo de uma linha do controle deslizante";

    const [corFundoCxTxt, setCorFundoCxTxt] = useState("white");
    const [nomeUsr, setNomeUsr] = useState("");
    const [corTexto, setCorTexto] = useState("black");
    const [corFundoConteudo, setCorFundoConteudo] = useState("yellow")

    function alteraCorFundo(){
        if (corFundoCxTxt == 'white')
            setCorFundoCxTxt('orange');
        else
            setCorFundoCxTxt('white');
    }

    function alteraNomeUsr(nomeUsr){
        setNomeUsr(nomeUsr);
    }

    function deslizaSlider1(index){
        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorTexto(cor);
    }

    function deslizaSlider2(index){
        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorFundoConteudo(cor);
    }

    function verifica(){
        if (nomeUsr == ""){
            alert("Você precisa digitar o nome na caixa de texto correspondente!");
        }
        else
            alert("Olá " + nomeUsr + "... Experimente deslizar os Sliders abaixo e verificar o que acontece!")
    }

    return(
        <View style={[estilos.area_conteudo, {backgroundColor:corFundoConteudo}]}>
            <Text style={[estilos.texto_conteudo, {color: corTexto}]}>
                {texto}
            </Text>
            <Text style={estilos.texto_conteudo}>
                Digite seu nome:
            </Text>
            <TextInput style={[estilos.inputNome_conteudo, {backgroundColor:corFundoCxTxt}]}
                onFocus={alteraCorFundo} onBlur={alteraCorFundo}
                value={nomeUsr} onChangeText={alteraNomeUsr} />
            <Text style={estilos.texto_conteudo}>
                Deslize o slider 1:
            </Text>
            <Slider id="Slider1" style={estilos.slider1} step={10}
                minimumValue={0} maximumValue={100} minimumTrackTintColor="white"
                maximumTrackTintColor="red" onValueChange={deslizaSlider1} />
            <Text style={estilos.texto_conteudo}>
                Deslize o slider 2:
            </Text>
            <Slider id="Slider1" style={estilos.slider1} step={10}
                minimumValue={0} maximumValue={100} minimumTrackTintColor="white"
                maximumTrackTintColor="red" onValueChange={deslizaSlider2} />
            <TouchableHighlight
                onPress={verifica}
                style={estilos.botao_conteudo}>
                <Text style={{color: '#ffff00', fontweight: 'bold', textAlign: 'center' }}>
                    CLIQUE AQIO
                </Text>
            </TouchableHighlight>
        </View>
    );
}

export default Conteudo;
