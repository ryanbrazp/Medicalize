import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import CustomInput from './CustomInput';
import colors from '../constants/Colors';

const InteractionForm: React.FC = () => {
    const [inputCount, setInputCount] = useState<number>(2);
    const [inputValues, setInputValues] = useState<string[]>(['', '']); // Inicia com dois inputs vazios

    const handleAddInput = () => {
        setInputCount((prevCount) => prevCount + 1);
        setInputValues((prevValues) => [...prevValues, '']); // Adiciona um novo valor vazio
    };

    const handleInputChange = (text: string, index: number) => {
        console.log(`Texto inserido no índice ${index}: ${text}`);
        const newValues = [...inputValues];
        newValues[index] = text;
        setInputValues(newValues);
    };

    const handleSubmit = () => {
        console.log('Valores dos medicamentos:', inputValues);
    };

    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                {Array.from({ length: inputCount }).map((_, index) => (
                    <CustomInput
                        key={index}
                        placeholder={`medicamento ${index + 1}`}
                        value={inputValues[index] || ''}
                        onChangeText={(text) => handleInputChange(text, index)}
                    />
                ))}
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={handleAddInput} style={styles.button}>
                    <Feather name="plus" size={20} color={colors.green} />
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text style={styles.buttonText}>Verificar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        padding: 16,
        gap: 16
    },
    fields: {
        gap: 16,
    },
    buttons: {
        gap: 16,
        alignItems: 'center'
    },
    button: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.darkGreen,
        borderRadius: 30
    },
    divider: {
        width: '100%',
        height: 1, // Altura da linha
        backgroundColor: colors.darkGrey, // Cor da linha
    },
    submitButton: {
        width: '100%',
        height: 40,
        backgroundColor: colors.darkGreen,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto'
    },
    buttonText: {
        color: colors.black,
        fontWeight: 'bold',
    },
});

export default InteractionForm;
