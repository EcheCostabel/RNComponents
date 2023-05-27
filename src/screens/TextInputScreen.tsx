import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='TextInputScreen' />


        <TextInput
            style={stylesScren.inputStyle}
        />

    </View>
  )
};


const stylesScren = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.3)'
    }
})
