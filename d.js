import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,SafeAreaView,  TextInput, View, TouchableOpacity, Image,Button, Text, Alert} from 'react-native';
type Props = {};
export default class App extends Component <Props> {
  constructor(props){
  super(props)
  this.state={altura:0,peso:0, edad:0, resultado:0, resultTexto:"", nombre:""}
  this.calcular=this.calcular.bind(this)
  }
  calcular(){
    //mujeres
    let caloria=  655 + (9,6 * this.state.peso) + (1,8 * this.state.altura) - (4,7 * this.state.edad)
  
    let s=this.state
     s.resultado = caloria
    this.resultado =caloria
    this.setState(s)

   
  }
 
 
 render(){
  return (
       
    <SafeAreaView style={styles.fondo}>
      
      <View style={styles.form}>
      
      <Image
      
          style={{width: 250, height: 180, marginLeft: 50,marginTop: -50}}
          source={{uri: 'https://lh3.googleusercontent.com/proxy/da7U7ClfUL-_CewkEfOERSHguxX3Ou-Cwf-1BMo3tAET5wJIKBjgZtC2pafcJ0mSiVnhTCN7i0aZJv6f5PwokaN-Y0_lTbbk-UJGshqCWRnWxbVXu5marUdR8GPQSgeiUVd9kQ'}}
        />
        <Text style={styles.result}>                  Calculadora de Calorias</Text>
    </View>
    <View style={styles.form}>
    
        <TextInput style={styles.input} placeholder="Nombre" />  
        <TextInput style={styles.input} placeholder="peso en kg" keyboardType='numeric' onChangeText={(altura)=>{this.setState({altura})}}/>
        <TextInput style={styles.input} placeholder="altura en cm" keyboardType='numeric' onChangeText={(peso)=>{this.setState({peso})}}/>
        <TextInput style={styles.input} placeholder="edad" keyboardType='numeric' onChangeText={(edad)=>{this.setState({edad})}}/>
        <TouchableOpacity style={styles.buton} onPress={this.calcular}><Text>                  Calcular Caloria</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buton} onPress={this.clear}><Text>                 Limpiar</Text></TouchableOpacity>
       
        <Text style={styles.result}>{this.state.resultado}</Text>
        <Text style={styles.result}>Tasa Metábolica Basal </Text>
        
      </View>
    </SafeAreaView>
  );
}
}
const styles = {
  fondo:{
    background: '#FFAB91',
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center'
  },
  form:{
    alignSelf: 'center'
  },
  input:{
    height: 40,
    backgroundColor: '#E8EAF6',
    width: 250,
    borderRadius: 10,
    padding: 4,
    margin: 7
  },
  buton:{
    height: 30,
    backgroundColor: '#1E88E5',
    width: 250,
    borderRadius: 10,
    padding: 4,
    margin: 7
  },
 
}


