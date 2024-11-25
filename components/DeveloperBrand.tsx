import { Image, Text, View } from "react-native";

export default function DeveloperBrand() {
    return(
        <View
            style={{
                marginTop: 'auto',
                alignItems: "center",
                gap: 4
            }}
        >
            <Image 
                source={require('../assets/images/medicalize_logo.png')} 
                //resizeMode='cover'
                style={{height: 30}}
            /> 
            <Text style={{
                textAlign: "center",
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                color: 'rgba(0,0,0,0.5)'
            }}>Desenvolvido por Medicalize</Text>
        </View>
    );
}