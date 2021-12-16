import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { setCurrentImage } from '../redux/actions';

export function CaptureAttendanceScreen({ navigation }) {

  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const captureHandle = async () => {
    try {
      const data = await takePicture();
      var formdata = new FormData();
      formdata.append('image', {
        uri: data.uri,
        type: "image/jpeg",
        name: "photo.jpg"
      });
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        headers: {
          'Accept': '*/*',
          //'Content-Type': 'multipart/form-data;'
        }
      };
      await fetch("http://172.105.39.161/api/v1/encodings/generateEncodings", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
        <Image
          source={require('../assets/user-outline2.png')}
          style={{ width: "100%", height: "70%", marginBottom: "13%", transform: [{ rotateY: '180deg' }] }} />
        <Icon
          name="circle"
          size={100}
          color="white"
          style={styles.captureButton}
          onPress={() => captureHandle()}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  captureButton: {
    marginBottom: "13%",
  }
})
