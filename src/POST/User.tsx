/*     import React, {useState } from 'react';
    import { View, Text, TextInput, Button } from 'react-native';
    import axios from "axios";
    import { User } from "./models/user.ts";
    import { strict } from "assert";
    import {GetUsers} from './GET/User';

    interface CreateUserProps {
    updateUserList: () => void;
    }

    function CreateUser({ updateUserList } : CreateUserProps) {
    const [first_name, setFirsName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!first_name.trim()) {
            setError('First Name is required');
            return false;
        }
        setError('');
        return true;
    }
    
    const Submit = (e: any) => {
        e.preventDefault();
        const user : User = {
            name: {
                first_name: first_name ,
                middle_name: middle_name,
                last_name: last_name,
            },
            email: email,
            phone_number: phone_number,
            gender: gender
    
        };

        axios.post("http://localhost:3000/user", user)
        .then(result => {
            console.log(result)
            updateUserList();

            setFirsName('');
            setMiddleName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setGender('');

        })
        .catch(err => console.log(err));
        console.log(user);
    }
        
    return (
            <View>
                <form onSubmit={Submit}>
                    <View>
                        <label>First Name</label>
                        <input type="text" value={first_name} onChange={(e: any) => setFirsName(e.target.value)}/> 
                    </View>
                    <View>
                        <label>Middle Name</label>
                        <input type="text" value={middle_name} onChange={(e: any) => setMiddleName(e.target.value)}/> 
                    </View>
                    <View>
                        <label>Last Name</label>
                        <input type="text" value={last_name} onChange={(e: any) => setLastName(e.target.value)}/> 
                    </View>
                    <View>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)}/> 
                    </View>
                    <View>
                        <label>Phone Number</label>
                        <input type="text" value={phone_number} onChange={(e: any) => setPhoneNumber(e.target.value)}/> 
                    </View>
                    <View>
                        <label>Gender</label>
                        <input type="text" value={gender} onChange={(e: any) => setGender(e.target.value)}/> 
                    </View>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button>Submit</button>
                </form>
            </View>
        )
    }

    export default CreateUser; */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from "axios";
import { User } from '../models/user';


interface CreateUserProps {
   updateUserList: () => void;
}

function CreateUser({ updateUserList }: CreateUserProps) {
   const [first_name, setFirstName] = useState('');
   const [middle_name, setMiddleName] = useState('');
   const [last_name, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone_number, setPhoneNumber] = useState('');
   const [gender, setGender] = useState('');
   const [error, setError] = useState('');

   const validateForm = () => {
       if (!first_name.trim()) {
           setError('First Name is required');
           return false;
       }
       setError('');
       return true;
   }
   
   const Submit = () => {
       const user: User = {
           name: {
               first_name: first_name,
               middle_name: middle_name,
               last_name: last_name,
           },
           email: email,
           phone_number: phone_number,
           gender: gender
       };

       axios.post("http://localhost:3000/user", user)
       .then(result => {
           console.log(result)
           updateUserList();

           setFirstName('');
           setMiddleName('');
           setLastName('');
           setEmail('');
           setPhoneNumber('');
           setGender('');
       })
       .catch(err => console.log(err));
       console.log(user);
   }
       
   return (
        <View>
            <View>
                <Text>First Name</Text>
                <TextInput
                    value={first_name}
                    onChangeText={setFirstName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Middle Name</Text>
                <TextInput
                    value={middle_name}
                    onChangeText={setMiddleName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Last Name</Text>
                <TextInput
                    value={last_name}
                    onChangeText={setLastName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Phone Number</Text>
                <TextInput
                    value={phone_number}
                    onChangeText={setPhoneNumber}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Gender</Text>
                <TextInput
                    value={gender}
                    onChangeText={setGender}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <Button title="Submit" onPress={Submit} />
        </View>
    )
}

export default CreateUser;
