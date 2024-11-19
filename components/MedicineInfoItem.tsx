import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import colors from "../constants/Colors";

interface MedicineInfoItemProps {
    title: string,
    description: string
}

const MedicineInfoItem: React.FC<MedicineInfoItemProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Alternar a visibilidade do body
    const toggleBody = () => setIsOpen(prevState => !prevState);

    return(
        <TouchableOpacity onPress={toggleBody}>
            <View style={[styles.container, isOpen && styles.containerOpen]}> 
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <Feather 
                        name={isOpen ? "chevron-up" : "chevron-down"} 
                        size={24} 
                        color={colors.black} 
                    />
                </View>
                
                {isOpen && (
                    <View style={[styles.body, isOpen && styles.bodyOpen]}>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 1,
        borderColor: colors.darkGrey,
        borderRadius: 10,
        gap: 12,
    },
    containerOpen: {
        backgroundColor: colors.lightGrey,
        borderWidth: 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
    body: {
        overflow: 'hidden'
    },
    bodyOpen: {
        height: 'auto'
    },
    description: {
        fontSize: 15,
        fontFamily: 'Inter_400Regular'
    },
})

export default MedicineInfoItem;
