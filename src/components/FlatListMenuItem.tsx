import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation()


    return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(menuItem.component)}
    >
        <View style={styles.container}>
                <Icon
                    name={menuItem.icon.toString()}
                    color='grey'
                    size={23}
                    />
                <Text style={styles.itemText}>{menuItem.name}</Text>
            
            {/* Esto es para separar la flecha, es como hacer un space-between */}
            <View style={{flex: 1}}/> 
                <Icon
                    name='chevron-forward-outline'
                    color='grey'
                    size={23}
                    />
            
        </View>
    </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    itemText: {
        marginLeft: 5,
        fontSize: 18
    }
})
