import { Text, View, StyleSheet } from "react-native"


export const Title = ({title, marginVertical, marginHorizontal}) => {
    return(
        <View style={{marginVertical: marginVertical, marginHorizontal: marginHorizontal}}>
            <Text style={s.textStyle}>{title}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.2,

    }
})

