import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export const Search = () => {
    return(
        <View style={s.container}>
            <TextInput style={s.inputStyle} placeholder="ძიება"/>
            <Feather name="search" size={24} color="black" />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        elevation: 10,
        backgroundColor: 'white',
        marginTop: 20,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputStyle: {
        width: '90%',
        height: '100%',
    }
})