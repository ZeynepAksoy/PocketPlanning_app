import AsyncStorage from '@react-native-async-storage/async-storage';


// verileri depolamak için kullandığım iki yerel fonksiyon 
const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value); // verileri ve anahtar değerleri saklar 
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key) => { // yerel depolama alanından verileri alır
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  export default{ // fonksiyonları dışarı aktarır
    storeData,
    getData,
  }