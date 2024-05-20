import { View, Text, Image, StyleSheet, Platform, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router'



export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
     <View>

      

      <Image
     source={require("@/assets/images/NextIaLogoPreta.png")}
     /></View>
    <View style={styles.content}>
    <Text style={styles.formTitle}>Entrando na sua conta</Text>

    <TextInput style={styles.formInput}
      placeholder='CPF'
    />

    <TextInput style={styles.formInput}
      placeholder='Senha'
      autoCapitalize='none'
      secureTextEntry
    />

    <Pressable style={styles.fromButton}>
      <Text style={styles.textButton}>Logar</Text>
    </Pressable>

    <View>
      
      <Pressable>
        
        <Text style={styles.subTextButton}><Link href={"/cadastro"} >Você não possui conta? <Text style={styles.subTextLink}>Cadastre-se</Text> </Link></Text>
        
        
      </Pressable>
    </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  content:{
    backgroundColor: 'white'
  },
  container: {
    flex:1,
    backgroundColor: '#7DAF43',
    justifyContent: 'center',
    alignContent: 'center'
  },
  formTitle:{
    fontSize: 36,
    fontWeight: 'bold',
    color: '#B1B1B1',
    margin: 10
  },
  formInput:{
    borderColor: '#B1B1B1',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10
  },
  fromButton:{
    backgroundColor: '#7DAF43',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  textButton:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  subTextButton:{
    padding: 10
  },
    subTextLink:{
      color: '#466427'
    }

});