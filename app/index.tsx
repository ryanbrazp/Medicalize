import { View } from "react-native";
import ActionOptions from "../components/ActionOptions";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "expo-router";
import MenuOptions from "../components/MenuOptions";

export default function Home() {

    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (text: string) => {
        setInputValue(text); 
    };

    return(
        <View style={{ flex: 1, padding: 16 }}>
            <SearchBar 
                placeholder='Buscar...' 
                onChange={handleInputChange}
            />
            <View style={{
                gap: 16,
                marginTop: 32
            }}>
                <Link href={"/camera"}>
                    <ActionOptions 
                        imageSource={require('../assets/images/photo_icon.png')} 
                        title="Tirar foto"
                        subtitle="Identifique um medicamento através de um foto."
                    />
                </Link>

                <Link href={"/interaction"}>
                    <ActionOptions 
                        imageSource={require('../assets/images/compare_icon.png')} 
                        title="Verificar interação"
                        subtitle="Verifique se os medicamentos apresentam risco de interações entre si."
                    />
                </Link>
            </View>
        </View>
    );
}