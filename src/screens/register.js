import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { addImage } from '../redux/actions';

const { height, width } = Dimensions.get("screen");

export function RegisterScreen({ navigation }) {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [orgId, setOrgId] = useState('');
  const [orgIdError, setOrgIdError] = useState('');

  const dispatch = useDispatch();
  const photoAdded = useSelector(state => state.imageReducer);

  const validateForm = () => {
    if (userName.length <= 2) {
      if (userName == '') {
        setUserNameError('Please enter username');
      } else {
        setUserNameError('Username must be greater than 2 letters')
      }
    }
    else if (name == '') {
      setNameError('Please enter name');
    }
    else if (orgId == '') {
      setOrgIdError('Please enter organzation ID')
    }
    else {
      handleRegister();
    }
  }

  const handleRegister = async () => {
    try {
      var formdata = new FormData();
      formdata.append('image', {
        uri: photoAdded.image,
        type: "image/jpeg",
        name: "photo.jpg"
      });
      formdata.append('username', userName);
      formdata.append('name', name);
      formdata.append('org_id', orgId);
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        headers: {
          'Accept': '*/*',
          //'Content-Type': 'multipart/form-data;'
        }
      };
      fetch("http://192.168.1.88:5000/api/v2/register/", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.status)
          if (result.status == "warning") {
            Alert.alert(
              "Try Again!!",
              result.message,
              [{ text: "OK" }]
            );
            navigation.navigate("Register");
            dispatch(addImage(true));
          }
          else if (result.status == "success") {
            Alert.alert(
              "Success",
              result.message,
              [{ text: "OK" }]
            );
            navigation.navigate("Register");
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <KeyboardAvoidingView style={styles.footer}>
        <Text style={styles.title}>Register</Text>
        <Input
          //label={'Username'}
          placeholder='Username'
          //leftIcon={<Icon name="user" size={24} color="#00734a" style={{marginHorizontal:10}}/>}
          onChangeText={(value) => { setUserName(value), setUserNameError('') }}
          errorStyle={{ color: 'red' }}
          errorMessage={userNameError}
          inputContainerStyle={styles.inputStyle}
        />
        <Input
          placeholder='Name'
          onChangeText={value => { setName(value), setNameError('') }}
          errorStyle={{ color: 'red' }}
          errorMessage={nameError}
          inputContainerStyle={styles.inputStyle}
        />
        <Input
          placeholder='Organization Id'
          onChangeText={value => { setOrgId(value), setOrgIdError('') }}
          errorStyle={{ color: 'red' }}
          errorMessage={orgIdError}
          inputContainerStyle={styles.inputStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Capture')}>
          <View style={styles.addPhoto}>
            <Icon name="plus-circle" size={30} color="#00734a" />
            <Text style={{ fontSize: 24, color: "#00734a", marginLeft: 10 }}>Add Photo</Text>
          </View>
        </TouchableOpacity>
        <Button
          title="Register"
          buttonStyle={styles.registerButtonStyle}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => validateForm()}
          disabled={photoAdded.addImage}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ef9b",
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: "10%"
  },
  footer: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10%',
    borderTopLeftRadius: 60,
    borderTopEndRadius: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "#00734a",
    marginBottom: "15%",

  },
  registerButtonStyle: {
    backgroundColor: "#00ff8a",
    borderRadius: 40,
    width: width * 0.8,
    shadowColor: "#00d959",
    shadowRadius: 10,
    marginTop: "7%"
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 26,
  },
  addPhoto: {
    flexDirection: "row",
    margin: "4%"
  },
  inputStyle: {
    backgroundColor: "#c4f5d2",
    borderRadius: 20,
    borderBottomWidth: 0,
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginBottom: '22.5%'
  }
});