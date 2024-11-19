import { TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import colors from "../constants/Colors";
import { Link } from "expo-router";

export default function MenuOptions() {
    return(
        <View
            style={{
                width: 104,
                borderRadius: 40,
                padding: 8,
                flexDirection: 'row',
                gap: 8,
                backgroundColor: colors.green
            }}
        >
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Link href="/">
                    <Feather name="home" size={24} color={colors.black} />
                </Link>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            <Link href="/camera">
                <Feather name="camera" size={24} color={colors.black} />
            </Link>
            </TouchableOpacity>
        </View>
    );
}