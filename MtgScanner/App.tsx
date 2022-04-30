import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal' />
        <Button title='Add goal'/>
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding:50
  }
});
