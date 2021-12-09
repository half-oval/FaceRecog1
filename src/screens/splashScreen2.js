import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image  } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const image = { uri: "https://reactjs.org/logo-og.png" };

export function SplashScreen2({ navigation }) {
    return (  
        <View style={{flex:1}}>
            <LinearGradient colors={['#00ff9b', '#00734a']} style={styles.container}>
            <Image
                source={image}
                style={{ width: 300, height: 300, marginBottom: 100 }}
            />
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
                buttonStyle={styles.registerButtonStyle}
                titleStyle={styles.buttonTitle}
            />
            <Button
                title="Capture Attendance"
                onPress={() => navigation.navigate('Capture')}
                buttonStyle={styles.captureButtonStyle}
                titleStyle={styles.captureButtonTitle}
                //type="outline"
            />
            </LinearGradient>   
        </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    font: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    registerButtonStyle: {
      margin:10,
      backgroundColor:"#00ff8a",
      borderRadius:40,
      height:80,
      width:300,
      shadowColor:"#00d959",
      shadowRadius:10
    },
    buttonTitle:{
      color:"#ffffff",
      //fontWeight: 'bold',
      fontSize: 26,
    },
    captureButtonStyle: {
        margin:10,
        backgroundColor:"00db5a",
        borderRadius:30,
        height:60,
        width:300,
        borderWidth:2,
        borderColor:"#00ff8a"
    },
    captureButtonTitle:{
      color:"#00ff8a",
      fontSize: 24,
    },
    
  });