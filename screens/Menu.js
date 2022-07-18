import { Text, View, FlatList, StyleSheet } from "react-native"
import { Search, TopicItem, TestTopic, Title, Topic } from "../components/atoms";

const FakeData = [
    {title: 'ფსიქოლოგია', imgUrl: 'https://www.all-about-psychology.com/psychology-fb.jpg', key: 1},
    {title: 'მოტივაცია', imgUrl: 'https://www.all-about-psychology.com/psychology-fb.jpg', key: 2},
    {title: 'ფილოსოფია', imgUrl: 'https://www.all-about-psychology.com/psychology-fb.jpg', key: 3},
    {title: 'სავარჯიშო', imgUrl: 'https://www.all-about-psychology.com/psychology-fb.jpg', key: 4},
    {title: 'სხეულის ენა', imgUrl: 'https://www.all-about-psychology.com/psychology-fb.jpg', key: 5},
];

export const Menu = () => {
    return(
        <View>
            <Search/> 
            {/* this code should be updated */}
            <TopicItem title="სხეულის ენა" imgUrl="blaa"/>
            <TestTopic/> 
            <Title title="რეკომენდებული" marginHorizontal={20} marginVertical={15}/>
            <View style={s.topicWrapper}>
                <FlatList data={FakeData} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => (<Topic title={item.title} imgUrl={item.imgUrl}/>)}/>
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    topicWrapper: {
        marginHorizontal: 15,
    }
})


