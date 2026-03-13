import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#c9c9c9" }}>

      <View style={{ backgroundColor: "#000000", paddingVertical: 20, alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          MomentCam
        </Text>
        <Text style={{ color: "white", fontSize: 12 }}>
          Capture, Salve e Compartilhe
        </Text>
      </View>

      <View style={{ backgroundColor: "#3b3b3b", height: 30 }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>

        <Image
          source={require('./img/CAMERA.jpg')}
          style={{ width: 180, height: 180, marginBottom: 30 }}
        />

        <Text style={{
          fontSize: 24,
          textAlign: "center",
          color: "#222",
          lineHeight: 34
        }}>

          Capture agora,{"\n"}
        salve para sempre{"\n"}
        e nunca perca{"\n"}
        um momento.{"\n"}

        </Text>

      </View>

      <View style={{ backgroundColor: "#000000", height: 40 }} />

    </View>
  );
}

export default App;