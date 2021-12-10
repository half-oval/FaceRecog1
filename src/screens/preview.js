import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

export function PreviewScreen({ navigation }) {
    
    const image = useSelector(state => state.imageReducer);

    const uploadImage = async () =>{
        console.log(image.image)
        var formdata = new FormData();
        formdata.append("image", image.image);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data;'
          }
        };
        await fetch("http://172.105.39.161/api/v1/encodings/generateEncodings", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));  
    }

    return (
      <View style={styles.container}>
        { image && <Image
            source={{ uri: image.image }}
            style={{ width: 412, height: 700, marginBottom: 0 , transform: [{rotateY: '180deg'}]}}
            
        />}
        <View style={styles.buttonGroup}>
            <Button
                title="Retake"
                onPress={() => navigation.navigate('Capture')}
                buttonStyle={styles.buttonStyle}
            />
            <Button
                title="Upload"
                onPress={() => uploadImage()}
                buttonStyle={styles.buttonStyle}
            />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
    },
    buttonGroup:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
    },
    buttonStyle: {
        borderRadius:40,
        width:150,
        marginHorizontal:5,
    },
})