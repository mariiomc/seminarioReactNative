import React, { useState, useEffect } from "react";
import { User } from '../models/user';
import axios from "axios";
import { View, Text, TouchableOpacity, RefreshControl, FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";


interface GetUsersProps {

    usersUpdated: boolean;
}

// const GetUsers: React.FC<GetUsersProps> = ({ usersUpdated, route, navigation }) => {
    const GetUsers: React.FC<GetUsersProps> = ({ usersUpdated }) => {
    const [users, setUsers] = useState<User[]>([]); 
    const [userData, setUserData] = useState<Record<string, any>>({});

const [items, setItems] = useState([]);
const [refreshing, setRefreshing] = useState(false);
const itemsPerPage = 5;

const fetchData = () => {
    //axios.get('http://10.0.2.2:3000/user')//para android
    axios.get('http://127.0.0.1:3000/user')//para web
        .then((result) => {
            console.clear();
            console.log(result.data);
            setUserData(result.data); // Rellenar la variable userData con result.data
            setUsers(result.data);
            setRefreshing(false);
        })
        .catch((err) => console.log(err));
        setRefreshing(false);
};
  

    useEffect(() => {

        fetchData();
    }, [usersUpdated])
    //,currentPage] ) 

    
   // const handlePageClick = (page: number) => setCurrentPage(page);

    const handleRefresh = () => {
        setRefreshing(true); // Se establece refreshing en true al iniciar la actualización
        fetchData(); // Llama a la función fetchData para obtener los datos actualizados
    };

    const handleEmpty = () => {
        console.log("los usuarios son:",users);
        return <Text> No Users!</Text>;
    };


        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                    }>
                    <View style={styles.container}>
                        <FlatList
                            data={users}
                            renderItem={({ item, index }) => (
                                <View style={styles.userContainer}>
                                    <Text>Name:                 {item.name.first_name} {item.name.middle_name} {item.name.last_name}</Text>
                                    <Text>Email:                  {item.email}</Text>
                                    <Text>Phone Number:  {item.phone_number}</Text>
                                    <Text>Gender:               {item.gender}</Text>
                                    <Text>Birthday:             {item.birthday}</Text>
                                </View>
                            )}
                            ListEmptyComponent={handleEmpty}
                            showsVerticalScrollIndicator
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };

export default GetUsers;

  const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    userContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});