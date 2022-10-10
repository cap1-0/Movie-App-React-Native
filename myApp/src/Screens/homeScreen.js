import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {GET} from '../redux/api';

function HomeScreen({navigation}) {
  const [movies, setMovies] = useState([]);
  const [searchmovies, setSearchMovies] = useState([]);
  const [search, setSearch] = useState('');
  const images_URL = `https://image.tmdb.org/t/p/original`;
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET(
        `https://api.themoviedb.org/3/discover/movie?api_key=d32309c65fdfbb3d94460e54b7c2e2f8`,
      );
      setMovies(response.results);
      // console.log(response);
    };

    console.log('searchmovies', search);
    searchMoviesfunc();
    getMovies();
  }, []);
  const searchMoviesfunc = async () => {
    console.log('run');
    const response =
      await GET(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=d32309c65fdfbb3d94460e54b7c2e2f8
    `);
    // https://api.themoviedb.org/3/search/movie?query=Avengers&api_key=d32309c65fdfbb3d94460e54b7c2e2f8

    // console.log(response.);
    setSearchMovies(response.results);
  };
  const updateSearch = search => {
    // console.log('searchmovies', searchmovies);
    console.log('hello', search);
    searchMoviesfunc();
  };
  const Item = ({title, overview, vote_average, backdrop_path}) => {
    let poster = images_URL + backdrop_path;
    const handleclick = id => {
      navigation.navigate('DetailsScreen', {
        title: title,
        desc: overview,
        rating: vote_average,
        poster: backdrop_path,
        poster: poster,
      });
    };

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          handleclick();
        }}>
        <View style={styles.cardFooter}></View>
        <Image style={styles.cardImage} source={{uri: poster}} />
        <View style={styles.cardHeader}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      overview={item.overview}
      vote_average={item.vote_average}
      backdrop_path={item.backdrop_path}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{paddingLeft:20}}
            placeholder="search movie!                                       "
            onChangeText={text => setSearch(text)}
            underlineColorAndroid="transparent"
          />
          <Button
            title="search"
            onPress={() => {
              updateSearch();
            }}
          />
        </View>
      </View>
      {searchmovies !==0 ? (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          horizontal={true}
          keyExtractor={item => {
            return item.id;
          }}
          data={searchmovies}
          renderItem={renderItem}
        />
      ) : null}

      <Text style={{fontSize: 20, color: '#000000', marginTop: 10}}>
        {' '}
        trending movies
      </Text>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={true}
        keyExtractor={item => {
          return item.id;
        }}
        data={movies}
        renderItem={renderItem}
      />

      <Text style={{fontSize: 20, color: '#000000', margin: 10}}>
        all movies
      </Text>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        data={movies}
        renderItem={renderItem}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
  list: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    width: '90%',
    shadowColor: '#00000021',
    // borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  title: {
    paddingBottom: 15,
    fontSize: 15,
    // flex:1,
    alignSelf: 'center',
    color: '#000000',
  },
  searchcontainer: {
    marginTop: 30,
    padding: 2,
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
