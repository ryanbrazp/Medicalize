import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HistoryItem from './HistoryItem'; 
import { Link } from 'expo-router';

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
          <Link href={`../medicine/${item.id}`} asChild>
            <HistoryItem name={item.name} activeIngredient={item.activeIngredient} />
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});

export default HistoryList;
