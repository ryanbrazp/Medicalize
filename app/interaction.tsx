
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import colors from '../constants/Colors'
import InteractionForm from '../components/InteractionForm'
import MenuOptions from '../components/MenuOptions'

export default function Interaction(){
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.titles}>
              <Text style={styles.title}>Verifique se os medicamentos possuem interações entre si</Text>
              <Text style={styles.subtitle}>Insira no mínimo dois medicamentos</Text>
          </View>
        <InteractionForm />
        </ScrollView>
        <View 
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom:32,
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}>
                <MenuOptions />
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16
  },
  titles: {
    gap: 8,
    marginBottom: 32
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center', 
    color: colors.green
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center'
  }
})