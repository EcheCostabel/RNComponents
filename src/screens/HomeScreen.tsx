import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';




export const HomeScreen = () => {


  return (
    <View style={{ flex:1, ...styles.globalMargin}}>

        

        <FlatList 
            data={menuItems}
            renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
            keyExtractor={(item) => item.name.toString()} //Le paso a string pq me da error sino
            ListHeaderComponent={() => <HeaderTitle title='Opciones de menu' />}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    </View>
  )
};
