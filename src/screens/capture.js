import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export function CaptureScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold',
      fontSize: 30, }}>Capture Screen</Text>
        <Button
          title="Go to Splash"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
    );
  }