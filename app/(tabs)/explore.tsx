import {Pressable, StatusBar, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber/native';
import Model from '../../components/Model3';
import useControls from 'r3f-native-orbitcontrols';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { customToastConfig } from '../(tabs)/customToastConfig';  
 
export default function TabTwoScreen() {

  const [OrbitControls, events] = useControls();

  const handlePress = () => {
     Toast.show({
      type: 'success',
      text1: 'Item added to cart',
      text2: 'You have successfully added the item to your cart.',
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.modelContainer} {...events}>
         <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <Suspense fallback={null} >
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}> Armchair</Text>
          <Text style={styles.textPrice}>€200.0</Text>
          <Text style={styles.text}>
          Enhance your space with our stylish and comfortable Modern Chair, ideal for any contemporary setting.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}>
            <Text style={styles.textButton}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast config={customToastConfig} ref={(ref) => Toast.setRef(ref)} />

    </SafeAreaView>
  );
};

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',

  },
  modelContainer: {
    flex: 1.5,
    backgroundColor: '#F9F6EE',
    },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: '#051E47',
    fontWeight: 'bold',
    left: -5,
  },
  textPrice: {
    fontSize: 23,
    color: '#1B3C73',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
    
  },
  button: {
    backgroundColor: '#1B3C73',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
   },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});