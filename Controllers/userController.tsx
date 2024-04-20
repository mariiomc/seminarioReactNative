import
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {User} from './models/users';



const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/2/3');
      const json = await response.json();
      setData(json.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getUsers = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/user/2/3',
      );
      const json = await response.json();
      return json.users;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};



  