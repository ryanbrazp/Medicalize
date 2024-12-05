import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Alert as RNAlert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import CustomInput from './CustomInput';
import colors from '../constants/Colors';
import axios from 'axios';

interface Interaction {
  pair: string[];
}

const InteractionForm: React.FC = () => {
  const [inputCount, setInputCount] = useState<number>(2);
  const [inputValues, setInputValues] = useState<string[]>(['', '']);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [interactionResult, setInteractionResult] = useState<string[]>([]);

  const handleAddInput = () => {
    if (inputCount >= 5) {
      RNAlert.alert('Limite atingido', 'Você pode adicionar no máximo 5 medicamentos.');
      return;
    }
    setInputCount((prevCount) => prevCount + 1);
    setInputValues((prevValues) => [...prevValues, '']);
  };

  const handleInputChange = (text: string, index: number) => {
    const newValues = [...inputValues];
    newValues[index] = text;
    setInputValues(newValues);
  };

  const handleSubmit = async () => {
    const uniqueValues = Array.from(new Set(inputValues.filter(Boolean)));

    if (uniqueValues.length < 2) {
      RNAlert.alert('Erro', 'Por favor, insira pelo menos dois medicamentos únicos.');
      return;
    }

    try {
      const response = await axios.post('https://api-interaction.onrender.com/check-interactions', {
        medications: uniqueValues,
      });

      if (response.data.message === 'Nenhuma interação de risco encontrada.') {
        setInteractionResult(['Nenhuma interação de risco encontrada.']);
      } else {
        const interactions: Interaction[] = response.data.interactions || [];
        const interactionsText = interactions.map(
          (interaction: Interaction) => `${interaction.pair.join(' e ')}`
        );
        setInteractionResult(interactionsText);
      }

      setModalVisible(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro na requisição Axios:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Erro genérico:', error.message);
      } else {
        console.error('Erro desconhecido:', error);
      }
      RNAlert.alert('Erro', 'Erro ao conectar ao servidor. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        {Array.from({ length: inputCount }).map((_, index) => (
          <CustomInput
            key={index}
            placeholder={`Medicamento ${index + 1}`}
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
            <View
                style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
                backgroundColor:
                    interactionResult.length > 0 &&
                    interactionResult[0] !== 'Nenhuma interação de risco encontrada.'
                    ? colors.red
                    : colors.green,
                padding: 16,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                }}
            >
                <Text style={styles.interactionHeader}>Resultado</Text>
                <Feather name="x" size={20} color={colors.white} onPress={() => setModalVisible(false)} />
            </View>

            <View style={{ gap: 8, marginHorizontal: 16, padding: 4 }}>
                {interactionResult.length > 0 &&
                interactionResult[0] !== 'Nenhuma interação de risco encontrada.' ? (
                <>
                    <Text style={{ 
                      fontFamily: 'Inter_400Regular', 
                      fontSize: 16, 
                      textAlign: 'center',
                      color: colors.red 
                    }}>Risco de interação</Text>
                    {interactionResult.map((line, index) => (
                    <View key={`interaction-${index}`} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style={styles.interactionItem}>{line}</Text>
                    </View>
                    ))}
                </>
                ) : (
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}>Nenhuma interação de risco encontrada.</Text>
                )}
            </View>

            <View style={{ width: '100%', justifyContent: 'center', paddingHorizontal: 16, marginBottom: 16 }}>
            <TouchableOpacity 
              style={[
                styles.modalButton, 
                { backgroundColor: interactionResult.length > 0 && interactionResult[0] !== 'Nenhuma interação de risco encontrada.' 
                    ? colors.red 
                    : colors.green 
                }
              ]} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={{
                color: colors.white,
                fontFamily: 'Inter_500Medium', 
                fontSize: 16
              }}>OK</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    flex: 1,
  },
  fields: {
    gap: 16,
  },
  buttons: {
    gap: 16,
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 30,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGrey,
  },
  submitButton: {
    width: '100%',
    height: 40,
    backgroundColor: colors.green,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Inter_500Medium', 
    fontSize: 16
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 16,
  },
  interactionHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    flexGrow: 1,
  },
  interactionItem: {
    fontFamily: 'Inter_400Regular',
    color: colors.black,
    fontSize: 16,
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.red,
    borderRadius: 40
  },
});

export default InteractionForm;
