import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router'

export default function Pontos() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require("@/assets/images/frame1.png")} style={styles.image} />
        <Text style={styles.formTitle1}>Next Points</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.formTitle}>Brindes</Text>

        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/frame2.png")} style={styles.image} />
          <Image source={require("@/assets/images/frame2.png")} style={styles.image} />
        </View>

        <Text style={styles.formTitle}>Descontos</Text>
        <View style={styles.imageRow}>
          <Image source={require("@/assets/images/group11.png")} style={styles.image} />
          <Image source={require("@/assets/images/group11.png")} style={styles.image} />
        </View>
        <View style={styles.imageRow}>
        <Link href={'/lista'}><Image source={require("@/assets/images/group11.png")} style={styles.image}/></Link>
          <Image source={require("@/assets/images/group11.png")} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DAF43',
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
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

