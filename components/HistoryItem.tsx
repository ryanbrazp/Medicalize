import colors from "@/constants/Colors";
import theme from "@/constants/Colors";
import { ActivityIndicatorBase, FlatList, StyleSheet, Text, View } from "react-native";

interface HistoryItemProps {
    name: string,
    activeIngredient: string
}

const HistoryItem: React.FC<HistoryItemProps> = ({ name, activeIngredient }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.activeIngredient}>{activeIngredient}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.darkGreen 
    },
    name: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium'
    },
    activeIngredient: {
        fontSize: 14,
        fontFamily: 'Inter_300Light'
    },
})

export default HistoryItem;