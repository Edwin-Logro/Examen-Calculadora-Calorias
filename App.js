import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Platform,ToastAndroid, StyleSheet,SafeAreaView,  TextInput, View, TouchableOpacity, Image,Button, Text, Alert, TouchableOpacityBase} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
const genderOptions  = [   
  {label:"Femenino" , value:"Femenino" },   
  {label:"Masculino" ,  value:"Masculino" },  
 
];

type Props = {};
export default class App extends Component <Props> {
  constructor(props){
  super(props)
  //selector
  this.state={
    gender:'',
  };
  this.state={altura:0,peso:0, edad:0, resultado:0, resultTexto:"", nombre:""}
  this.calcularFem=this.calcularFem.bind(this)
  this.calcularMas=this.calcularMas.bind(this)
  this.state={data:['Mujeres','Hombres'],
  checked:0
    }
  }
  setGender(gender){
    this.setState({gender: gender});
  }
  calcularFem(){
    //mujeres
    let caloria=  655 + (9,6 * this.state.peso) + (1,8 * this.state.altura) - (4,7 * this.state.edad)
  
    let s=this.state
     s.resultado = caloria
    this.resultado =caloria
    this.setState(s)

   
  }
  calcularMas(){
    //mujeres
    let caloria=  66 + (13,7 * this.state.peso) + (5 * this.state.altura) - (6.8 * this.state.edad)
  
    let s=this.state
     s.resultado = caloria
    this.resultado =caloria
    this.setState(s)

   
  }
 render(){

    return (
    
    
      //SELECION HOMBRE Y MUJER
   <SafeAreaView style={styles.fondo}>

    <SwitchSelector
      options={genderOptions}
      initial={0}
      onPress={value=> this.setGender(value)}
     
    />   
 


     <View style={styles.form}>
     
     <Image
     
         style={{width: 250, height: 180, marginLeft: 50,marginTop: -0}}
         source={{uri: 'https://lh3.googleusercontent.com/proxy/da7U7ClfUL-_CewkEfOERSHguxX3Ou-Cwf-1BMo3tAET5wJIKBjgZtC2pafcJ0mSiVnhTCN7i0aZJv6f5PwokaN-Y0_lTbbk-UJGshqCWRnWxbVXu5marUdR8GPQSgeiUVd9kQ'}}
       />
       <Text style={styles.result}>                  Calculadora de Calorias</Text>
   </View>
   <View style={styles.form}> 
       <TextInput style={styles.input} placeholder="Nombre" />  
       <TextInput style={styles.input} placeholder="peso en kg" keyboardType='numbers-and-punctuation' onChangeText={(altura)=>{this.setState({altura})}}/>
       <TextInput style={styles.input} placeholder="altura en cm" keyboardType='numbers-and-punctuation' onChangeText={(peso)=>{this.setState({peso})}}/>
       <TextInput style={styles.input} placeholder="edad" keyboardType='nnumbers-and-punctuation' onChangeText={(edad)=>{this.setState({edad})}}/>
       <TouchableOpacity style={styles.buton} onPress={this.calcularFem}><Text>                  Calcular Caloria</Text></TouchableOpacity>
       <TouchableOpacity style={styles.buton} onPress={this.clear}><Text>                 Limpiar</Text></TouchableOpacity>
      
       <Text style={styles.result}>{this.state.resultado}</Text>
       <Text style={styles.result}>Tasa Metábolica Basal </Text>
       <Text style={styles.result}>Calorias para lantener el peso </Text>
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


