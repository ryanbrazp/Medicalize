import HistoryList from '@/components/HistoryList';
import SearchBar from '@/components/searchBar';
import SessionTitle from '@/components/SessionTitle';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default function home(){

    // ESSES DADOS SERÃO PEGO DA API
    const data = [
        { id: '1', name: 'Paracetamol', activeIngredient: 'Paracetamol' },
        { id: '2', name: 'Ibuprofeno', activeIngredient: 'Ibuprofen' },
        { id: '3', name: 'Aspirina', activeIngredient: 'Ácido acetilsalicílico' },
        // Adicione mais itens conforme necessário
      ];

    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (text: string) => {
        setInputValue(text); 
    };

    return(
        <View  style={styles.container}>
            <SearchBar 
                placeholder='Buscar...' 
                onChange={handleInputChange}
            />
            

            <View style={styles.session}>
                <SessionTitle text='Ultimas Pesquisas' />
                <HistoryList data={data} />
            </View>

            <View style={styles.session}>
                <SessionTitle text='Interações Recentes' />
                <HistoryList data={data} />
            </View>
            
        </View >
    );

    /*
    const historyData = [
        { id: '1', name: 'Paracetamol', activeIngredient: 'Paracetamol' },
        { id: '2', name: 'Ibuprofeno', activeIngredient: 'Ibuprofen' },
        { id: '3', name: 'Aspirina', activeIngredient: 'Ácido acetilsalicílico' },
        // Adicione mais itens conforme necessário
      ];

      const data = [
        { id: '1', title: 'Item 1', details: 'Detalhes do Item 1' },
        { id: '2', title: 'Item 2', details: 'Detalhes do Item 2' },
        { id: '3', title: 'Item 3', details: 'Detalhes do Item 3' },
      ];

      const data2 = [
        { id: '1', title: 'Item 1', description: 'Detalhes do Item 1' },
        { id: '2', title: 'Item 2', description: 'Detalhes do Item 2' },
        { id: '3', title: 'Item 3', description: 'Detalhes do Item 3' },
      ];

    return (
      
      
      <View style={{
        flex: 1,
        backgroundColor: "#FFF"
      }}>
        <Text>HOME PAGE</Text>
        <SearchBar 
            placeholder='Buscar...' 
            onChange={handleInputChange}
            />

        <HistoryList data={historyData} />

        <MedicineInfoList data={data2} />

      </View>
    ) */

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16
    },
    session: {
        marginTop: 28
    }
})