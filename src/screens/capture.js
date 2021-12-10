import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentImage } from '../redux/actions';

export function CaptureScreen({ navigation }) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    
    const dispatch = useDispatch();

    const captureHandle = async () => {
      try{
        const data = await takePicture();
        dispatch(setCurrentImage(data.uri));
        navigation.navigate('Preview')
      }catch(error){
        console.log(error);
      }
    }

    return (
      <View style={styles.container}>  
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
          style={styles.preview}  
        >
          <Icon 
            name="camera" 
            size={50} 
            color="#ffffff"
            style={styles.captureButton}
            onPress={() => captureHandle()}
          />
        </RNCamera>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      // alignItems: 'center', 
      // justifyContent: 'center'
    },
    preview:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
    },
    captureButton:{
      marginBottom:40,
    }
  })
