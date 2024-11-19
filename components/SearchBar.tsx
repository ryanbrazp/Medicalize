import { Alert, Button, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import colors from "../constants/Colors";

interface SearchBarProps {
    placeholder?: string;
    onChange?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const [isMounted, setIsMounted] = useState(true);

    const navigation = useNavigation();

    const handleInputChange = (text: string) => {
        setInputValue(text);
        if (onChange) {
            onChange(text);
        }
    };

    useEffect(() => {
        return () => {
            setIsMounted(false); // Definir como false quando o componente for desmontado
        };
    }, []);

    const handleSearch = () => {
        if (isMounted) {
            router.push(`../medicine/${inputValue}`);
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
                    onSubmitEditing={handleSearch} // Executa a pesquisa ao pressionar Enter
                    returnKeyType="search"
                />
            </View>
            <TouchableOpacity 
                style={styles.photoButton}
            >
                <Link href="/camera">
                    <Feather name="camera" size={20} color={colors.black} />
                </Link>
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
        backgroundColor: colors.white,
        borderRadius: 40,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    input: {
        flex: 1,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: colors.black,
        marginLeft: 10,
        textAlignVertical: 'center',
        padding: 0,
        height: '100%',
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