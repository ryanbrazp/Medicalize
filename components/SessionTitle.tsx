import { Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";

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
        marginBottom: 16,
        color: colors.black
    }
})

export default SessionTitle;