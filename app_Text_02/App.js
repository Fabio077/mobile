//importar a biblioteca geral do React
import React from 'react';

//importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: 'pink', height: '100%', width: '100%', padding: 10}}>

      <View style={{ backgroundColor: 'green', height: '20%', width: '100%', borderWidth: 3, borderColor: 'red', borderRadius: 15, marginBottom: 10, justifyContent: 'center', padding: 10 }}>
        <Text style={{ fontFamily: 'serif', textAlign: 'center', color: 'white', fontSize: 16 }}>
Era uma vez um gato xadrez. Caiu da janela e foi só uma vez.
Era uma vez um gato azul. Levou um susto e fugiu pro sul.
Era uma vez um gato vermelho. Entrou no banheiro e fez careta no espelho.        </Text>
      </View>

      <View style={{ backgroundColor: 'grey', height: '25%', width: '100%', borderWidth: 3, borderColor: 'blue', borderRadius: 15, marginBottom: 10, justifyContent: 'center', padding: 10}}>
        <Text style={{ fontFamily: 'monospace', textAlign: 'center', fontSize: 16 }}>
A lebre zombava da tartaruga por ser lenta e a desafiou para uma corrida. A lebre disparou, mas parou para comer cenouras e dormiu. A tartaruga, com um ritmo constante, passou pela lebre e cruzou a linha de chegada primeiro. Ela provou que ser constante e inteligente é melhor do que ser rápida e confiante demais.        </Text>
      </View>

      <View style={{ backgroundColor: 'blue', height: '30%', width: '100%', borderWidth: 3, borderColor: 'yellow', borderRadius: 15, marginBottom: 10, justifyContent: 'center', padding: 10 }}>
        <Text style={{ fontFamily: 'sans-serif-condensed', color: 'white', textAlign: 'center', fontSize: 16 }}>
Um leão estava dormindo quando um ratinho começou a correr sobre seu corpo. O leão acordou zangado e quase comeu o rato, que implorou por liberdade. Dias depois, caçadores amarraram o leão. O ratinho ouviu os rugidos, roeu as cordas e libertou o rei da selva, provando que pequenos amigos podem ser grandes aliados.        </Text>
      </View>

      <View style={{ backgroundColor: 'orange', height: '25%', width: '100%', borderWidth: 3, borderColor: 'purple', borderRadius: 15, justifyContent: 'center', padding: 10 }}>
        <Text style={{ fontFamily: 'sans-serif-light', textAlign: 'center', fontSize: 16 }}>
Pedro adorava brincar o dia todo, mas tinha dificuldade em dormir. Uma fada mágica, sabendo disso, transformou a hora de dormir em uma aventura. Ela sussurrou que as poças de sonhos coloridos esperavam por ele. Pedro, cansado de tanto brincar com os coelhinhos saltitantes, fechou os olhos e voou nas costas de um dragãozinho felpudo para a terra dos sonhos.        </Text>
      </View>

    </View>
  );
}

export default App;