import React from 'react';
import { View, Text, FlatList } from 'react-native';

function App() {

    let autor = "Fabio Rodrigues" ;
    let data = "15/05/2026";
    const dados = [
        { id: '1', nome: 'João' },
        { id: '2', nome: 'Maria' },
        { id: '3', nome: 'Pedro' },
        { id: '4', nome: 'Ana' }
    ];

    function recuperarId(item){
        return item.id;
    }

    function mostrarItem({ item }){
        return(
            <Text style={{ fontSize: 18 }}>
                {item.nome}
            </Text>
        )
    }

    return (

        <View id='fundo' style={{ padding: 20, backgroundColor:'skyblue', flex:1 }}>
            <View id='cabecalho' style={{ backgroundColor:'powderblue', flex:0.1,
                justifyContent:'center', alignItems:'center',
                borderRadius:25, marginBottom:10
            }}>
                <Text style={{fontSize:36, color:'darkred'}} >COMPONENTE LISTA</Text>
            </View>

            <View id='conteudo' style={{ backgroundColor:'lightgray', flex:0.6,
                justifyContent:'center', alignItems:'center',
                borderRadius:25, marginTop:10
            }}>
                <FlatList style={{backgroundColor:'white' , width:'80%', padding:20, marginVertical:10}}
                    data={dados}
                    keyExtractor={recuperarId}
                    renderItem={mostrarItem}
                />
            </View>

            <View id='Rodape'style={{ backgroundColor:'powderblue', flex:0.1,
                justifyContent:'space-around', alignItems:'center',
                borderRadius:25, marginTop:10, flexDirection:'row'
            }}>
                <Text style={{fontSize:20}}>{autor}</Text>
                <Text style={{fontSize:20}}>{data}</Text>
            </View>

        </View>
    )
}

export default App