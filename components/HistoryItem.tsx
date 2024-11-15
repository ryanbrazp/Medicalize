import colors from "@/constants/Colors";
import Feather from '@expo/vector-icons/Feather';
import { ActivityIndicatorBase, FlatList, StyleSheet, Text, View } from "react-native";

interface HistoryItemProps {
    name: string,
    activeIngredient: string
}

const HistoryItem: React.FC<HistoryItemProps> = ({ name, activeIngredient }) => {
    return(
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.activeIngredient}>{activeIngredient}</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#A7D397", /* ADICIONAR NA CONSTANTE DE CORES */
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        color: colors.black
    },
    activeIngredient: {
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
        color: colors.black
    },
    texts: {
    }
})

export default HistoryItem;