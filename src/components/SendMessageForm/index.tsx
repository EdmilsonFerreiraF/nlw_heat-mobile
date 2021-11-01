import React, { useState } from 'react';

import {
    TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)
    
  return (
    <View>
        <TextInput
            keyboardAppearance="dark"
            placeholder="Qual sua expectativa para o evento?"
            placeholderTextColor={COLORS.BLACK_PRIMARY}
            multiline
            maxLength={140}
            style={styles.input}
            value={message}
            editable={!sendingMessage}
        />

        <Button
            title="ENVIAR MENSAGEM"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
        />
    </View>
  );
}