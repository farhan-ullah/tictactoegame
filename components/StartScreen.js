import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {
 
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}> Tic Tac Toe</Text>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('Tic Tac Toe')}>
           
          <Text style={styles.appButtonText} >Play Game</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#327965',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 70,
    width: 300,
    fontFamily: 'sans-serif',
  },
  
  start: {
    fontSize: 18,
    paddingLeft: 60,
    paddingRight: 60,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonframe: {
    paddingTop: 70,
  },
  
});
