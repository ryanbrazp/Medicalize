import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import theme from "@/constants/Colors";
import { useState } from "react";
import colors from "@/constants/Colors";

interface SearchBarProps {
    placeholder?: string;
    onChange?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text: string) => {
        setInputValue(text);
        if (onChange) {
            onChange(text);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textField}>
                <Feather name="search" size={20} color={colors.darkGrey} />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colors.darkGrey}
                    value={inputValue}
                    onChangeText={handleInputChange}
                />
            </View>
            <TouchableOpacity style={styles.photoButton}>
                <Feather name="camera" size={20} color={colors.black} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 8,
    },
    textField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightGrey, /* COLOCAR NA CONSTANTE DE CORES */
        borderRadius: 40,
        paddingHorizontal: 10,
        height: 40,
    },
    input: {
        flex: 1,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: colors.black,
        marginLeft: 10,
    },
    photoButton: {
        width: 40,
        height: 40,
        backgroundColor: "#A7D397", /* COLOCAR NA CONSTANTE DE CORES */
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    }
})

export default SearchBar;