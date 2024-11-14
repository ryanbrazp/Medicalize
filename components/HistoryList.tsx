import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HistoryItem from './HistoryItem'; 

interface HistoryListProps {
  data: {
    id: string; // ou number, dependendo da estrutura de dados
    name: string;
    activeIngredient: string;
  }[];
}

const HistoryList: React.FC<HistoryListProps> = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HistoryItem name={item.name} activeIngredient={item.activeIngredient} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    //flex: 1
  },
});

export default HistoryList;
