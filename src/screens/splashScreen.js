import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

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
        titleStyle={styles.buttonTitle2}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffb832"
  },
  registerButtonStyle: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 45,
    height: 90,
    width: 400,
  },
  buttonTitle: {
    color: "#ffb832",
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonTitle2: {
    color: "#fff",
    //fontWeight: 'bold',
    fontSize: 30,
  },
  captureButtonStyle: {
    backgroundColor: "#ffb832",
    borderRadius: 30,
    height: 60,
    width: 400,
    borderWidth: 2,
    borderColor: 'white'
  },
});