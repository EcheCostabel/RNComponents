import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'


export const TextInputScreen = () => {

  const [ form, setForm ] = useState({
      name: '',
      email: '',
      phone: '',
  });

  const onChange = ( value: string, field: string ) => {
    setForm({
      ...form,
      [field]: value
    })
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback>
            <View style={styles.globalMargin}>
                <HeaderTitle title='TextInputScreen' />


                <TextInput
                    style={stylesScren.inputStyle}
                    placeholder='Ingrese su name'
                    autoCorrect={false}
                    autoCapitalize='words'
                    onChangeText={ (value) => onChange(value, 'name')} //Con esto le digo que me cambie el name
                    />
                <TextInput
                    style={stylesScren.inputStyle}
                    placeholder='Ingrese su email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={ (value) => onChange(value, 'email')}
                    keyboardType='email-address' 
                    />
                <HeaderTitle title={JSON.stringify(form, null, 3)} />
                <HeaderTitle title={JSON.stringify(form, null, 3)} />

                <TextInput
                    style={stylesScren.inputStyle}
                    placeholder='Ingrese su phone'
                    onChangeText={ (value) => onChange(value, 'phone')} 
                    keyboardType='phone-pad'
                    />


                 <View style={{height: 100}}></View>
            </View>

        </TouchableWithoutFeedback>
      </ScrollView>
  </KeyboardAvoidingView>
  )
};


const stylesScren = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        marginVertical: 10
    }
});
