import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView  style={{flex:1}}>
      <ThemedView style={{ flex: 1, padding: 20 }}>
        <ThemedText>profile</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}