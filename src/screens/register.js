import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function RegisterScreen({ navigation }) {
    return (
      <View style={{flex:1}}>
        <LinearGradient colors={['#00ff9b', '#00734a']} style={styles.container}>
          {/* <Text style={{ fontWeight: 'bold', fontSize: 30, }}>Register</Text> */}
          <View style={styles.bottomCard}>
            <Text style={styles.title}>Register</Text>
            <Input placeholder='Username'/>
            <Input placeholder='Name'/>
            <Input placeholder='Organization Id'/>
            <View style={styles.addPhoto}>
              <Icon name="plus-circle" size={30} color="#00734a" />
              <Text style={{fontSize: 24, color:"#00734a",marginLeft:10}}>Add Photo</Text>
            </View>
            <Button
              title="Register"
              buttonStyle={styles.registerButtonStyle}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      //justifyContent: 'center',
      backgroundColor:"#ffb832" 
    },
    bottomCard: {
      flex:1,
      backgroundColor:"white",
      width:"100%",
      marginTop:200,
      borderTopLeftRadius:60,
      borderTopEndRadius:60,
      padding:40,
      alignItems: 'center',
    },
    title:{
      fontWeight: 'bold', 
      fontSize: 30,
      color:"#00734a",
      marginBottom:40,

    },
    registerButtonStyle: {
      backgroundColor:"#00ff8a",
      borderRadius:40,
      width:300,
      shadowColor:"#00d959",
      shadowRadius:10,
      marginTop:50
    },
    buttonTitle:{
      color:"#ffffff",
      fontSize: 26,
    },
    addPhoto:{
      flexDirection:"row",
      margin:10
    }
  });