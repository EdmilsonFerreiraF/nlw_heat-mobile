import React from 'react'
import { View } from 'react-native'

import { MessageList } from '../../components/MessageList'
import { Header } from '../../components/Header'
import { SignInBox } from '../../components/SignInBox'
import { styles } from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <MessageList />
            <SignInBox />
        </View>
    )
}