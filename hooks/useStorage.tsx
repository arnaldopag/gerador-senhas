import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {

    const getItem = async (key: string) => {
        try {
            const passwords = await AsyncStorage.getItem(key) as string;
            return JSON.parse(passwords) || []
        } catch (err) {
            console.log("erro do caralho: ", err)
            return [];
        }
    }

    const saveItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log("erro ao salvar: ", err);
        }
    }

    const removeItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key)
            let myPasswrds = passwords.filter((password: string) => {
                return (password !== value)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswrds));
            return myPasswrds;
        } catch (err) {
            console.log("erro ao remover: ", err);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}


export default useStorage;