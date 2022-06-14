import {HStack, Image, ScrollView} from 'native-base';
import React from 'react';

const CustomScrollImage = () => {
  return (
    <ScrollView horizontal={true} marginTop={5}>
      <HStack>
        <Image
          marginX={4}
          source={require('../../../../assets/images/containerImage1.png')}
          width={330}
          height={190}
          rounded={10}
          alt="containerImage"
        />
        <Image
          marginX={4}
          source={require('../../../../assets/images/containerImage2.png')}
          width={330}
          height={190}
          rounded={10}
          alt="containerImage"
        />
        <Image
          marginX={4}
          source={require('../../../../assets/images/containerImage3.png')}
          width={330}
          height={190}
          rounded={10}
          alt="containerImage"
        />
      </HStack>
    </ScrollView>
  );
};

export default CustomScrollImage;
