/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
const {width, height} = Dimensions.get('window');
// @ts-ignore
import flagBlueImg from './assets/flag-blue.png';
// @ts-ignore
import flagPinkImg from './assets/flag-pink.png';



const ASPECT_RATIO = width / height;
const LATITUDE = 35.296314;
const LONGITUDE = 10.709266;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;


function App(): JSX.Element {
 
  const [position, setPosition] = useState({ latitude: LATITUDE, longitude: LONGITUDE });



  const handleRegionChange = (region) => {
    const { latitude, longitude } = region;
    setPosition({ latitude, longitude });
  };

  return (
<View style={{flex : 1}}>
  <MapView   
     onRegionChange={handleRegionChange} 
  provider={PROVIDER_GOOGLE}   
           style={{flex: 1}}
           initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}    
          
      >

          <Marker
          coordinate={position}
          title="Current Position"
        
          />
         
  
  </MapView> 
</View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
