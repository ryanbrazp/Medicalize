import InteractionForm from '@/components/InteractionForm'
import colors from '@/constants/Colors'
import { StyleSheet, View, Text } from 'react-native'

export default function Interaction(){
    return (
      <View style={styles.container}>
         <View style={styles.titles}>
              <Text style={styles.title}>Verifique se os medicamentos possuem interações entre si</Text>
              <Text style={styles.subtitle}>Insira no mínimo dois medicamentos</Text>
          </View>
        <InteractionForm />
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
    color: colors.darkGreen
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center'
  }
})