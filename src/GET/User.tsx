import { useState, useEffect } from "react";
import { User } from '../models/user';
import axios from "axios";
import { View, Text } from "react-native";

interface GetUsersProps {
    usersUpdated: boolean;
}

function GetUsers({ usersUpdated } : GetUsersProps){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/3/2')
        .then((result) => setUsers(result.data))
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
                        {
                            users.map((user, index) => (
                                    <View key = {index}>
                                    <Text>{user.name.first_name} {user.name.middle_name} {user.name.last_name}</Text>
                                    <Text>{user.email}</Text>
                                    <Text>{user.phone_number}</Text>
                                    <Text>{user.gender}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GetUsers;