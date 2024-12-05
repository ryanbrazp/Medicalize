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
  const [hasPermission, setHasPermission] = useState(false); // Estado para controle da permissão

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') {
        await Linking.openSettings();
      } else {
        setHasPermission(true); // Atualiza o estado de permissão para "true"
      }
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

  const handleNavigateToPage = () => {
    const name = 'Domperidona'; 
    router.push(`../medicine/${name}`);
  }; 


  /* const uploadImage = async () => {
    try {
      const formData = new FormData();
      const file = {
        uri: `file://${imageSource}`, // Caminho absoluto do arquivo
        name: 'photo.jpg', // Nome do arquivo enviado
        type: 'image/jpeg', // Tipo MIME
      };
  
      // Converta explicitamente para um tipo aceito
      formData.append('image', file as unknown as Blob);
  
      const response = await fetch('http://192.168.1.221:5001/extrair-texto', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
  
      const result = await response.json();
      console.log('Upload concluído:', result);
      alert('Imagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
      alert('Erro ao enviar a imagem. Tente novamente.');
    }
  }; */
  


  if (!hasPermission) {
    return <></>;
  }

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
              onPress={()=> /* uploadImage() */ handleNavigateToPage()}
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
    bottom: 0,
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
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
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
    fontFamily: 'Inter_600SemiBold',
    color: colors.white
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  }
});

export default Photo;