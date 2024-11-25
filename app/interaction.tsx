
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native'
import colors from '../constants/Colors'
import InteractionForm from '../components/InteractionForm'
import MenuOptions from '../components/MenuOptions'

export default function Interaction(){
    return (
      <View style={styles.container}>
         <View style={styles.titles}>
              <Text style={styles.title}>Verifique se os medicamentos possuem interações entre si</Text>
              <Text style={styles.subtitle}>Insira no mínimo dois medicamentos</Text>
          </View>
          <ScrollView 
            style={styles.form}
            contentContainerStyle={styles.scrollContent}  
          >
            <InteractionForm />
          </ScrollView>
          <View 
              style={{
                width: '100%',
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
  },
  titles: {
    height: 150,
    paddingHorizontal: 16,
    backgroundColor: colors.green ,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center', 
    color: colors.white
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: colors.white
  },
  form: {
    backgroundColor: colors.white,
    padding: 16,
    flex: 1
  },
  scrollContent: {
    flexGrow: 1
  }
})