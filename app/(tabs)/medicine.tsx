import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import MedicineInfoList from "@/components/MedicineInfoList";
import colors from '@/constants/Colors';

export default function Medicine() {
    const data = {
        "id": 1,
        "name": "Dipirona",
        "activeIngredients": "Dipirona",
        "infos": {
            "composicao": ["comp01", "comp02", "comp03"],
            "indicacoes": "Texto de indicações",
            "efeitos colaterais": ["efeito01", "efeito02", "efeito03", "efeito04"]
        }
    };

    // Transformar o objeto `data` em um array de itens para a `FlatList`
    const infoArray = [
        { id: 1, title: "Composição", description: data.infos.composicao.join(", ") },
        { id: 2, title: "Indicações", description: data.infos.indicacoes },
        { id: 3, title: "Indicações", description: data.infos.indicacoes },
        { id: 4, title: "Indicações", description: data.infos.indicacoes },
        { id: 5, title: "Indicações", description: data.infos.indicacoes },
        { id: 6, title: "Indicações", description: data.infos.indicacoes },
        { id: 7, title: "Efeitos Colaterais", description: data.infos['efeitos colaterais'].join(", ") }
    ];

    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.activeIngredients}>{data.activeIngredients}</Text>
            </View>
            <FlatList
                style={styles.list}
                data={infoArray}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MedicineInfoList data={[item]} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        backgroundColor: colors.darkGreen,
        padding: 16,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#FFF'
    },
    activeIngredients: {
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
        color: '#FFF'
    },
    list: {
        padding: 16
    }
})