
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Text,Appbar} from 'react-native-paper';
import { Searchbar,Card } from 'react-native-paper';
import SearchCard from '../components/SearchCard';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const searchData = [
    {
      imageUrl: 'https://flxt.tmsimg.com/assets/p20056_v_h10_ab.jpg',
      title: 'Titanic',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4600/674600-h',
      title: 'The Lion king',
    },
    {
      imageUrl: 'https://images.yourstory.com/cs/210/604090802d6d11e9aa979329348d4c3e/av2-1671181754729.png',
      title: 'Avatar: The Way of Water',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5520/675520-h',
      title: 'Avengers: Endgae',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7538/617538-h',
      title: 'Modern Family',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8012/1528012-h-74e957d139d8',
      title: 'The Kardashians',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5013/1575013-h-51e0c04f634b',
      title: 'Loki',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4705/1574705-h-9e65a2efc4c1',
      title: 'Ashoka',
    },
    {
      imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916',
      title: 'Moon Knight',
    },
  ];
  return (
    <>
      <Appbar.Header 
        style={styles.header}
      >
        <Text></Text>
        <Searchbar
          placeholder="Movies, shows and more"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            height: 50,
            width:350, 
            backgroundColor: '#E5E3E7',
          }}
        />
      </Appbar.Header>
      <View style={styles.container}>
          <Text variant="titleSmall" style={styles.text}>Recent Searches</Text>
          <ScrollView>
            {searchData.map((item, index) => (
              <SearchCard key={index} imageUrl={item.imageUrl} title={item.title} />
            ))}
          </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white', 
    marginLeft:7,
  },
  header: {
    marginTop:19,
    backgroundColor: 'black',
    marginBottom:9,
  },
});

export default SearchScreen;
