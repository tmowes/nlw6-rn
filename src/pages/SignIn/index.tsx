import React, { useCallback } from 'react'
import { SafeAreaView, Image, Text, useWindowDimensions, View } from 'react-native'

import * as C from '../../components'
import illustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

export const SignIn = () => {
  const { width } = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <Image source={illustrationImg} resizeMode="stretch" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{`Conecte-se\ne organize suas\njogatinas`}</Text>
        <Text style={styles.body}>
          {`Crie grupos para jogar seus games\nfavoritos com seus amigos\n`}
        </Text>
        <C.LabelButton label="Entrar com Discord" name="discord" />
      </View>
    </SafeAreaView>
  )
}