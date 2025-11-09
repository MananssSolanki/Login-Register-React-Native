import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
  Text,
  View,
  Image,
  StatusBar,
  Platform
} from 'react-native';

const { width } = Dimensions.get('window');
const COLORS = { primary: '#491B6D', white: '#fff' };

const slides = [
  {
    id: '1',
    images: require('../images/Image1.png'),
    title: 'Welcome To DWD',
    subTitle: 'Welcome as you learn a world changing skill to get a better job',
  },
  {
    id: '2',
    images: require('../images/Image2.png'),
    title: 'Choose Your Course',
    subTitle:
      'Choose the course of your choice and gain industry knowledge and experience in it.',
  },
  {
    id: '3',
    images: require('../images/Images3.png'),
    title: 'Get Certificate',
    subTitle:
      'Start learning and get certified after your training to get a lucrative job',
  },
];

const Slide = ({ item }) => (
  <View style={styles.slideContainer}>
    <Image
      source={item.images}
      style={{ height: 200, width: width * 0.9, resizeMode: 'contain' }}
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subTitle}</Text>
  </View>
);

function OnBoardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ensure status bar is visible */}
      

      {/* Skip button below status bar */}
      <View style={styles.header}>
        <Pressable onPress={() => console.log('Skip pressed')}>
          <Text style={styles.textStyle}>Skip</Text>
        </Pressable>
      </View>

      {/* Slides */}
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  textStyle: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  slideContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,

  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 24,
    color: '#444',
  },
});
