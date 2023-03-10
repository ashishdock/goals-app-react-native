import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalHandler}
              color="#666ee0de"
            />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#666ee0de" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#2a46069a',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    color: 'blue',
    width: '100%',
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 19,
    paddingVertical: 9,
  },

  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row',
  },

  button: {
    width: '40%',
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
