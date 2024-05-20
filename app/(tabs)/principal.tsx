import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle1}>Olá,</Text>
      <Text style={styles.formTitle1}>Seja Bem-vindo</Text>
      <View style={styles.content}>
        <Text style={styles.formTitle}>Pontos Adquiridos</Text>

        <View style={styles.imageRow}>
        <Image source={require("@/assets/images/addPontos.png")} style={styles.image} />
        <Image source={require("@/assets/images/addPontos1.png")} style={styles.image} />
        </View>
        <Text style={styles.formTitle}>Ofertas ativas</Text>
        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/ofertaNuggets.png")} style={styles.image} />
          <Image source={require("@/assets/images/ofertaBeterraba.png")} style={styles.image} />
        </View>
        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/ofertaArroz.png")} style={styles.image} />
          <Image source={require("@/assets/images/ofertaBiscoito.png")} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1D6',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignContent: 'flex-start'
  },
  formTitle1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
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
