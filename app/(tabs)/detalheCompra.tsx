import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Pontos() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.formTitle2}>Ticket medio</Text>
        <Text style={styles.formTitle1}>R$ 500,00</Text>
      </View>

      <View >

        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/group16.png")} style={styles.image} />
        </View>

        <Text style={styles.formTitle2}>Lista de compras</Text>
        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/frame4.png")} style={styles.image} />
          <Image source={require("@/assets/images/frame5.png")} style={styles.image} />
        </View>
        <Text style={styles.formTitle2}>Cpmpras recentes</Text>

        <View >
          <Image source={require("@/assets/images/group18.png")} style={styles.image} />
          <Image source={require("@/assets/images/group19.png")} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -50, // Adicionado para mover o conteúdo para cima
  },
  content: {
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    padding: 10,
  },
  formTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#B1B1B1',
    margin: 10,
    alignContent: 'flex-start',
  },
  formTitle1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    margin: 10,
  },
  formTitle2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#747474',
    margin: 10,
  },
  image: {
    margin: 5,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

