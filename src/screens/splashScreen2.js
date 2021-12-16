import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Image  } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const image = { uri: "https://reactjs.org/logo-og.png" };
const {height, width} = Dimensions.get("screen")

export function SplashScreen2({ navigation }) {
    return (  
        <View style={{flex:1}}>
          <LinearGradient colors={['#00ef9b', '#013d28']} style={styles.container}>
          <Image
            source={require('../assets/attendance-icon.jpg')}
            style={{ width: width*0.8, height: height*0.5,}}
          />
          <Button
            title="Go to Register"
            onPress={() => navigation.navigate('Register')}
            buttonStyle={styles.registerButtonStyle}
            titleStyle={styles.registerButtonTitle}
            containerStyle={styles.registerButtonContainer}
          />
          <Button
            title="Capture Attendance"
            onPress={() => navigation.navigate('CaptureAttendance')}
            buttonStyle={styles.captureButtonStyle}
            titleStyle={styles.captureButtonTitle}
            containerStyle={styles.captureButtonContainer}
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
      width:'100%'
    },
    font: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    registerButtonStyle: {
      backgroundColor:"#00ff8a",
      height:"100%",
      width:width*0.8,
      shadowColor:"#00d959",
      shadowRadius:10
    },
    registerButtonContainer:{
      height:"12%",
      borderRadius:40,
      margin:"4%",
    },
    registerButtonTitle:{
      color:"#ffffff",
      fontSize: 26,
    },
    captureButtonStyle: {
      backgroundColor:"00db5a",
      borderRadius:30,
      height:"100%",
      width:width*0.8,
      borderWidth:2,
      borderColor:"#00ff8a"
    },
    captureButtonTitle:{
      color:"#00ff8a",
      fontSize: 24,
    },
    captureButtonContainer:{
      height:"8%",
      borderRadius:40,
      margin:10,
    },
    image:{

    }
  });