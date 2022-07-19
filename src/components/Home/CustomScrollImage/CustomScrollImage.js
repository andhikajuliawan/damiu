import {HStack, Image, ScrollView, View} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';

const CustomScrollImage = () => {
  const {width} = Dimensions.get('window');
  const height = width * 0.54;

  const images = [
    require('../../../../assets/images/containerImage1.png'),
    require('../../../../assets/images/containerImage2.png'),
    require('../../../../assets/images/containerImage3.png'),
  ];
  const [page, setPage] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== page) {
      setPage(slide);
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal={true}
        marginTop={5}
        width={width}
        height={height}
        showsHorizontalScrollIndicator={false}
        onScroll={change}>
        <HStack>
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              width={width}
              height={height}
              rounded={10}
              resizeMode="contain"
              alt="containerImage"
            />
          ))}
        </HStack>
      </ScrollView>
      <HStack position="absolute" bottom={0} alignSelf="center">
        {images.map((i, k) => (
          <Text
            key={k}
            style={k == page ? style.pagingActiveText : style.pagingText}>
            ⬤
          </Text>
        ))}
      </HStack>
    </View>
  );
};

const style = StyleSheet.create({
  pagingText: {color: '#888', margin: 2, fontSize: 12},
  pagingActiveText: {color: '#fff', margin: 2, fontSize: 12},
});

export default CustomScrollImage;
