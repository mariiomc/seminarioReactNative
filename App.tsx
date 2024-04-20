
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GetUsers from './src/GET/User';
import CreateUser from './src/POST/User';

export default function App() {
  const [usersUpdated, setUsersUpdated] = useState(false);

  const updateUserList = () => {
    setUsersUpdated(!usersUpdated);
  };

  return (
    <View style={styles.container}>
      <GetUsers usersUpdated={usersUpdated} />
      <CreateUser updateUserList={updateUserList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
