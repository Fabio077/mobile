import Reac from 'react';
import { View, Text } from 'react-native';
function App() {
    const TITULO = "BOMBA NUCLEAR";
    const PARAGRAFO = "Uma bomba nuclear (ou atômica) é um dispositivo explosivo de poder devastador que libera energia através de reações nucleares, seja por fissão (quebra de núcleos pesados) ou fusão (união de núcleos leves). A energia liberada é milhões de vezes maior que a de explosivos químicos convencionais, resultando em uma onda de choque gigantesca, calor extremo e radiação ionizante.";
    const RODAPÉ1 = "Fabio Rodrigues";
    const RODAPÉ2 = "2026";
    return (
  <View style={{
    flex: 1, backgroundColor: 'powderblue',
    paddingVertical: 30, paddingHorizontal: 20
  }}>
    <View style={{ flexDirection: 'column', height: '20%', width: '100%', backgroundColor: 'skyblue', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, fontFamily: "Times", textAlign: "center" }}>{TITULO}</Text>
    </View>
    <View style={{ height: '70%', marginTop: '10px', backgroundColor: 'skyblue', padding: '10%' }}>
      <Text style={{ fontSize: 20, textAlign: 'justify' }}>{PARAGRAFO}</Text>
    </View>
    <View style={{ height: '10%', flexDirection: 'row', justifyContent: "space-around", backgroundColor: "skyblue", marginTop: "10px", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{RODAPÉ1}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{RODAPÉ2}</Text>
    </View>
  </View>
);
}
export default App;