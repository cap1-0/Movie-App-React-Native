import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailsScreen = ({route}) => {
  const {title, desc, rating, poster} = route.params;
  console.log(poster);

  return (
    <>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri: poster}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>description:</Text>
        <Text>{desc}</Text>
        <Text style={styles.title}>rating:{rating}</Text>
      </View>
    </>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
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
    shadowColor: '#00000021',

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
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: '80%',
    width: '100%',
    //   alignSelf: 'center',
  },
  title: {
    // margin:30,
    fontSize: 25,
    // flex:1,
    //   alignSelf: 'center',
    color: '#000000',
  },
});
