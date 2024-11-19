import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => {
                console.log(`Input alterado para: ${text}`);
                onChangeText(text);
            }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 16,
        height: 40,
    },
});

export default CustomInput;
