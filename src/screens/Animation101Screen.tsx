import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0.4)).current;

    const fadeIn = ( ) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    };


    const fadeOut = ( ) => {
        Animated.timing(
            opacity,
            {
                toValue: 0.4,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    };


  return (
    <View style={styles.container}>
        <Animated.View  style={{
            ...styles.purpleBox,
            marginBottom: 20,
            opacity: opacity
            }}/>

            <Button
                title='FadeIn'
                onPress={fadeIn}
            />
            <Button
                title='FadeOut'
                onPress={fadeOut}
            />
    </View>
  )
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
