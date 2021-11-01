import React from 'react';

import {
  View,
  ScrollView
} from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){
const message = {
    id: '1',
    text: 'user_text',
    user: {
        name: 'username',
        avatar_url: 'https://github.com/rodrigorgtic.png',
    }
}
    
  return (
      <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      >
          <Message data={message} />
      </ScrollView>
  );
}