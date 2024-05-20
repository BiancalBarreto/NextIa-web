import { View, Text, Image, StyleSheet, Platform, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router'


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';




export default function cadastro() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const [userCpf, setUserCpf] = useState('');
  const [userDateOfBirth, setUserDateOfBirth] = useState('');
  const [userGender, setUserGender] = useState('');

  
  function cadastro() {
    if(userMail === '' || userPass === '' || userCpf === '' || userDateOfBirth === '' || selectedGender === ''){
      alert('Todos os campos devem ser preenchidos');
      return;
    } else {
      // Aqui você pode incluir a lógica para criar o usuário com os dados fornecidos.
    }
  }
  
  
  


  return (
   <View style={styles.container}>
    <Image
    source={require("@/assets/images/NextIaLogoPreta.png")}
    />

    <View style={styles.content}>
    <Text style={styles.formTitle}>cadastro no sistema</Text>
    
    <TextInput style={styles.formInput}
      placeholder='Nome Completo'
      autoCapitalize='none'
      autoComplete='name'
    />
    <TextInput style={styles.formInput}
      placeholder='CPF'
      keyboardType='numeric'
      value={userCpf}
      onChangeText={setUserCpf}
    />
    <TextInput style={styles.formInput}
      placeholder='E-mail'
      keyboardType="email-address"
      autoCapitalize='none'
      autoComplete='email'
      value={userMail}
      onChangeText={setUserMail}
    />

<TextInput style={styles.formInput}
  placeholder='Data de Nascimento'
  keyboardType='numeric'
  value={userDateOfBirth}
  onChangeText={setUserDateOfBirth}
/>

<Picker
  selectedValue={selectedGender}
  style={styles.formInput}
  onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
>
  <Picker.Item label="Selecione o gênero" value="" />
  <Picker.Item label="Homem" value="Homem" />
  <Picker.Item label="Mulher" value="Mulher" />
  <Picker.Item label="Outros" value="Outros" />
</Picker>



    <TextInput style={styles.formInput}
      placeholder='Senha'
      autoCapitalize='none'
      secureTextEntry
      value={userPass}
      onChangeText={setUserPass}
    />    
    
       

    <Pressable 
      style={styles.fromButton}
      onPress={cadastro}
      >
      <Text style={styles.textButton}><Link href={"/pontos"}>Logar</Link> </Text>
    </Pressable>

    <View>
      
      <Pressable>
        <Text style={styles.subTextButton}><Link href={"/index"} >você possui conta?  <Text style={styles.subTextLink}>Faça login</Text> </Link></Text>
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
    margin: 10,
    
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
