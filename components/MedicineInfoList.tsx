import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MedicineInfoItem from './MedicineInfoItem';

interface MedicineInfoListProps {
  data: {
    id: number;
    title: string;
    description: string;
  }[];
}

const MedicineInfoList: React.FC<MedicineInfoListProps> = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <MedicineInfoItem title={item.title} description={item.description} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default MedicineInfoList;
