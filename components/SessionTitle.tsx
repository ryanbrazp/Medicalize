import colors from "@/constants/Colors";
import theme from "@/constants/Colors";
import { Text, StyleSheet } from "react-native";

interface SessionTitleProps {
    text: string
}

const SessionTitle: React.FC<SessionTitleProps> = ({ text }) => {
    return(
        <>
            <Text style={styles.title}>{text}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: 'Inter_700Bold',
        paddingBottom: 6,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGrey,
        color: colors.black
    }
})

export default SessionTitle;