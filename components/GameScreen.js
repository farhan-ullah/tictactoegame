import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  ScrollView,
  TextComponent,Alert,
} from 'react-native';
import Constants from 'expo-constants';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default function GameScreen ({navigation}) {
  
   const [currentPlayer , setPlayer]=useState(1);
   const [gameState, setgameState]=useState([
     [0,0,0],
     [0,0,0],
     [0,0,0]

   ]);
  function renderIcon(row,col){
    var value=gameState[row][col];
    switch(value){
      case 1: return <Icon name='close' style={styles.cross}/>;
      case -1:return <Icon name='circle-outline' style={styles.circle}/>;
      default:return <View/>
    }
  }
  function onboxClick(row,col){
    var value=gameState[row][col];
    if (value!==0){
      return;
    }
   var array=gameState.slice();
   array[row][col]=currentPlayer;
   setgameState(array);
   var nextPlayer=(currentPlayer==1)?-1:1;
   setPlayer(nextPlayer);
    var winner =getWinner();
    if(winner==1){
      alert("player 1 has won");
    }
    else if (winner==-1){
      alert("player 2 has won");
    }
   

     }
   
function getWinner(){
  const Num_box=3;
  var array=gameState;
   var sum;
   //checking rows
   for(var i=0;i<Num_box;i++){
     
     sum=array[i][0]+array[i][1]+array[i][2];
     if (sum==3){
       return 1;

     }
     else if (sum==-3){
       return -1;
     }
   }
   //checking columns
   for(var i=0;i<Num_box;i++){
     
     sum=array[0][i]+array[1][i]+array[2][i];
     if (sum==3){
       return 1;

     }
     else if (sum==-3){
       return -1;
     }
     

   }
   //checking left diagonal
   sum=array[0][0]+array[1][1]+array[2][2];
    if (sum==3){
       return 1;

     }
     else if (sum==-3){
       return -1;
     }
     //checking right diagonal
      sum=array[2][0]+array[1][1]+array[0][2];
    if (sum==3){
       return 1;

     }
     else if (sum==-3){
       return -1;
     }
     return 0;
}
function initializeGame(){
  setgameState([
    [0,0,0],
     [0,0,0],
     [0,0,0]
  ])
}

  return (
    <View style={styles.container }>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(0,0)}>
          
          {renderIcon(0,0)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(0,1)}>
        {renderIcon(0,1)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(0,2)}>
      {renderIcon(0,2)}
        </TouchableOpacity>
   </View>
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(1,0)}>
        {renderIcon(1,0)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(1,1)}>
        {renderIcon(1,1)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(1,2)}>
          {renderIcon(1,2)}
        </TouchableOpacity>
   </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(2,0)}>
        {renderIcon(2,0)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(2,1)}>
      {renderIcon(2,1)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>onboxClick(2,2)}>
        {renderIcon(2,2)}
        </TouchableOpacity>
   </View>
   <View style={styles.buttonframe}>
      <TouchableOpacity style={styles.appButtonContainer} onPress={initializeGame}>
           
          <Text style={styles.appButtonText} >Play Again</Text>
        </TouchableOpacity>
        
   
       </View>
        <View style={styles.buttonframe}>
      <TouchableOpacity style={styles.appButtonContainer1} onPress={() => navigation.navigate('Home')} >
           
          <Text style={styles.appButtonText} >Exit</Text>
        </TouchableOpacity>
        
   
       </View>
        
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    backgroundColor: '#327965',
    paddingTop:70,
  },
  
  box:{
    borderWidth:2,
    height:80,
    width:80,
     
  },
  cross:{
   color:'black',
   fontSize:80,
   alignItems:'center',
   justifyContent:'center',


  },
  circle:{
    color:'black',
   fontSize:80,
   alignItems:'center',
   justifyContent:'center',
  },
  appButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
   appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
    buttonframe: {
    paddingTop: 20,
  },

});
