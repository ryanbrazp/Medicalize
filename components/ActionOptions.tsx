import React from 'react';
import { View, Image, ImageSourcePropType, Text } from 'react-native';
import SearchBar from './SearchBar';
import colors from '../constants/Colors';

import Feather from '@expo/vector-icons/Feather';

interface ActionOptionsProps {
    imageSource: ImageSourcePropType;
    title: string;
    subtitle: string
}

const ActionOptions: React.FC<ActionOptionsProps> = ({ imageSource, title, subtitle }) => {
    return (
        <View 
            style={{ 
                width: '100%', 
                flexDirection:'row',
                alignItems: 'center',
                gap: 24,
                padding:16,
                borderRadius: 10,
                backgroundColor: colors.white
            }}>

            <View style={{
                width: 100,
                height: 100,
                backgroundColor: colors.green,
                borderRadius: 10,
                padding: 16
            }}>
                <Image 
                    source={imageSource} 
                    resizeMode='cover'
                    style={{width: '100%', height: '100%'}}
                /> 
            </View>
            <View
                style={{
                    flex: 1,
                    gap: 4,
                    //height: 100
                }}
            >
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'Inter_700Bold',
                    color: colors.green
                }}>{title}</Text>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'Inter_400Regular'
                }}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default ActionOptions;
