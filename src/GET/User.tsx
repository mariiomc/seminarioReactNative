import React, { useState, useEffect } from "react";
import { User } from '../models/user';
import axios from "axios";
import { View, Text } from "react-native";

interface GetUsersProps {
    usersUpdated: boolean;
}

const GetUsers: React.FC<GetUsersProps> = ({ usersUpdated }) => {
    const [users, setUsers] = useState<User[]>([]); 
    const [userData, setUserData] = useState<Record<string, any>>({});

    /* useEffect(() => {
        axios.get('http://localhost:3000/user/3/2')
        .then((result) => setUsers(result.data))
        .catch((err) => console.log(err))
    }, [usersUpdated] ) */


 /*    useEffect(() => {
        axios.get('http://localhost:3000/user/3/2')
        .then((result) => {
            console.clear();
            console.log(result.data); // Agregar console.log para mostrar los datos recibidos
            setUsers(result.data);
        })
        .catch((err) => console.log(err))
    }, [usersUpdated] )


    return (
        <View>
            <View>
                <View>
                    <View>
                        <View>
                            <Text>Name</Text>
                            <Text>Email</Text>
                            <Text>Phone number</Text>
                            <Text>Gender</Text>
                            <Text>Posts</Text>
                        </View>
                    </View>
                    <View>
                        {users.map((user, index) => (
                            <View key={index}>
                                <Text>{user.name.first_name} {user.name.middle_name} {user.name.last_name}</Text>
                                <Text>{user.email}</Text>
                                <Text>{user.phone_number}</Text>
                                <Text>{user.gender}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default GetUsers;  */



    

    useEffect(() => {
        axios.get('http://localhost:3000/user/7/6')
        .then((result) => {
            console.clear();
            console.log(result.data); // Agregar console.log para mostrar los datos recibidos
            setUserData(result.data); // Rellenar la variable userData con result.data
            // Asignar los usuarios de userData a la variable users
            setUsers(result.data.users);
        })
        .catch((err) => console.log(err))
    }, [usersUpdated] )

    return (
        <View>
        {users.map((user, index) => (
            <View key={index}>
                <Text>Name: {user.name.first_name} {user.name.middle_name} {user.name.last_name}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Phone Number: {user.phone_number}</Text>
                <Text>Gender: {user.gender}</Text>
            </View>
        ))}
    </View>
    );
};
export default GetUsers;