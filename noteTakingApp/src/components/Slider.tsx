import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SvgImg from '../assets/imgs/svg/Illustration.svg';
import CarouselProps from 'react-native-snap-carousel';
const Slider = () => {
  const width = Dimensions.get('screen').width;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const carouselItems: any = [
    {
      title: 'Jot Down anything you want to achieve, today or in the future',
    },
    {
      title: 'Jot Down anything you want to achieve, today or in the future',
    },
    {
      title: 'Jot Down anything you want to achieve, today or in the future',
    },
  ];
  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <SvgImg />
        <Text
          style={[
            styles.font,
            {
              lineHeight: 28,
              fontSize: 20,
              color: 'white',
              marginTop: 20,
            },
          ]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={width}
          itemWidth={width}
          inactiveSlideOpacity={0.4}
          inactiveSlideScale={1}
          activeSlideAlignment="center"
          renderItem={renderItem}
          onSnapToItem={index => setActiveIndex(index)}
          firstItem={0}
        />
        <Pagination
          // tappableDots={true}
          // carouselRef={carouselItems}
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            marginBottom: 40,
            width: 12,
            height: 12,
            borderRadius: 10,
            marginHorizontal: 0,
            backgroundColor: '#DEDC52',
          }}
          inactiveDotOpacity={0.9}
          // inactiveDotColor="white"
          inactiveDotStyle={{backgroundColor: 'white'}}
          inactiveDotScale={0.9}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Inter-ExtraBold',
  },

  dot: {
    backgroundColor: 'red',
    padding: 10,
  },
  pagination: {
    backgroundColor: 'black',
  },
});
export default Slider;
