import './src/app/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from './src/views/search';
import {SafeAreaView} from "react-native";

export default function App() {
  return (
      <Search />
  );
}
