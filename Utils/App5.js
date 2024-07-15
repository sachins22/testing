import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import EmojiPicker from 'react-native-emoji-picker';

const EmojiPickerComponent = () => {
  const [emoji, setEmoji] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleEmojiSelected = (emojiObject) => {
    setEmoji(emojiObject.emoji);
    setPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPickerVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Pick an Emoji</Text>
      </TouchableOpacity>
      <Text style={styles.emojiText}>{emoji}</Text>
      <Modal visible={isPickerVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <EmojiPicker onEmojiSelected={handleEmojiSelected} />
          <TouchableOpacity onPress={() => setPickerVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  emojiText: {
    fontSize: 50,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmojiPickerComponent;
