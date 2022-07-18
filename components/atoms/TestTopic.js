import { useState } from "react";
import { View, Text, Pressable, Button, FlatList, StyleSheet, Modal } from "react-native";

const testSorting = [
    {title: 'მარტივი', key: 1, color: 'red'},
    {title: 'საშუალო', key: 2, color: 'green'},
    {title: 'რთული', key: 3, color: 'blue'},
];

export const TestTopic = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [topicIsChosen, setTopicIsChosen] = useState();

    const pressHandler = () => {
        setIsOpen(!isOpen);
    }

    const chooseHandler = (key) => {
        setTopicIsChosen(key);  
    }

    return(
        <View style={s.container}>
            <Pressable onPress={pressHandler} style={s.button}>
                <Text>ტესტი</Text>
            </Pressable>
            <View style={isOpen ? s.modalWrapper : s.modalClosed}>
                <FlatList contentContainerStyle={s.flatlist} data={testSorting} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => (
                    <Pressable 
                        key={item.key} 
                        onPress={() => chooseHandler(item.key)} 
                        style={
                            topicIsChosen === item.key ? 
                            [s.topicButton, {backgroundColor: `${item.color}`}, s.chosenTopicButton] 
                            : 
                            [s.topicButton, {backgroundColor: `${item.color}`}]
                        }
                    >
                        <Text style={s.title}>{item.title}</Text>
                    </Pressable>
                )}/>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 20,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 38,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
    },
    modalWrapper: {
        flex: 1,
        height: '100%',
    },
    modalClosed: {
        display: 'none',
    },
    topicButton: {
        height: 30,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
    },
    flatlist: {
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    chosenTopicButton: {
        height: 35,
    }
})
