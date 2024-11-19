import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  StatusBar, 
  SafeAreaView
} from 'react-native';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import RNFS from 'react-native-fs';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import colors from "../constants/Colors";
import { router } from "expo-router";

function Photo() {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'back');

  const navigation = useNavigation();

  const [showCamera, setShowCamera] = useState(true); // Abre a câmera diretamente
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const permisson = await Camera.requestCameraPermission();
      console.log(`Camera permisson status: ${permisson}`);
      if (permisson === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  /* const handleConvertToBase64AndSend = async () => {
    if (imageSource !== '') {
      try {
        const base64Image = await RNFS.readFile(imageSource, 'base64');
        console.log('Imagem em Base64:', base64Image);
      } catch (error) {
        console.error('Erro ao converter a imagem em Base64:', error);
      }
    }
  }; */

  const handleNavigateToPage = () => {
    const id = '1'; // Substitua pelo ID dinâmico que você tem
    // Navegar para a página [id] passando o ID como parâmetro
    router.push(`../medicine/${id}`);
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} hidden={true}/>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />

          <TouchableOpacity
            style={styles.backButtom}
            onPress={() => navigation.goBack()}
          >
            <Feather name="x" size={20} color={colors.black} />
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={capturePhoto}
            />
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' && (
            <Image
              style={styles.image}
              source={{
                uri: `file://${imageSource}`
              }}
            />
          )}

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[styles.btn, {borderWidth: 1, borderColor: colors.green}]}
              onPress={() => setShowCamera(true)}>
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, {backgroundColor: colors.green}]}
              onPress={()=> handleNavigateToPage()}
            >
              <Text style={styles.btnText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtom: {
    width: 30,
    height: 30,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: colors.lightGrey,
    top: 16,
    right: 16
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 20,
    padding: 20
  },
  camButton: {
    height: 65,
    width: 65,
    borderRadius: 40,
    backgroundColor: colors.lightGrey,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtons: {
    width: '100%',
    flexDirection: "row",
    gap: 16,
    padding: 16,
    position: 'absolute',
    bottom: 20,
    left: 0,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.)"
  },
  btn: {
    flexGrow: 1,
    height: 40,
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 40
  },
  btnText:{
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold'
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  }
});

export default Photo;
