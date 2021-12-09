import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image  } from 'react-native-elements';

const image = { uri: "https://reactjs.org/logo-og.png" };

export function SplashScreen({ navigation }) {
    return (

      <View style={styles.container}>
        <Image
            source={image}
            style={{ width: 200, height: 200 }}
        />
        <Button
            title="Go to Register"
            onPress={() => navigation.navigate('Register')}
            buttonStyle={styles.registerButtonStyle}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
        />
        <Button
            title="Capture Attendance"
            onPress={() => navigation.navigate('Capture')}
            buttonStyle={styles.captureButtonStyle}
            titleStyle={styles.buttonTitle}
        />   
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor:"#ffb832" 
    },
    font: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    registerButtonStyle: {
      margin:10,
      backgroundColor:"white",
      borderRadius:40,
      height:80,
      width:300
    },
    buttonTitle:{
      color:"#ffb832",
      //fontWeight: 'bold',
      fontSize: 26,
    },
    captureButtonStyle: {
        margin:10,
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        width:300
      },
    
  });