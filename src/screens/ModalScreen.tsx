import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [ isVisible, setIsVisible ] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal Screen' />

        <Button
            title='Abrir modal'
            onPress={() => setIsVisible(true)}
        />

        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}
        >   
        {/* Fondo Negro */}
            <View style={{
                flex: 1,
                // width:100,
                // height: 100,
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}>

            {/* CONTENIDO DEL MODAL */}
            <View style={{
                backgroundColor: 'white'
            }}>
                <HeaderTitle title='Modal' />
                <Text>Cuerpo del modal</Text>

                <Button 
                    title='cerrar modal'
                    onPress={() => setIsVisible(false)}
                />
            </View>

            </View>
        </Modal>
    </View>
  )
}
