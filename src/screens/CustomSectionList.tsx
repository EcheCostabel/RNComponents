import React from 'react';
import { View, SectionList, Text, } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
};


const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin',]
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman','Antman', 'Thor', 'Spiderman', 'Antman','Antman', 'Thor', 'Spiderman', 'Antman','Antman', 'Thor', 'Spiderman', 'Antman',]
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama',]
    },
]


export const CustomSectionList = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
        <SectionList
            sections={casas}
            renderItem={({item}) => <Text>{item}</Text>}
            stickySectionHeadersEnabled
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section}) => (
                <View style={{backgroundColor: 'white'}}>
                    <HeaderTitle title={section.casa} />
                </View>
            )}
        />


    </View>
  )
};
