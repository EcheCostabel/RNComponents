import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

    const showAlert = () => {

        Alert.alert(
            'Title', 'Este es el mensaje de la alerta', 
            [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]
    )
}

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alerts' />

        <Button 
            title='Show Alert'
            onPress={showAlert}
        />
    </View>
  )
};
