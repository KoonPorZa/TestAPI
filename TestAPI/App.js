import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const testapi = () => {
  const [data, setData] = useState([]);

  // const baseUrl = 'https://reqres.in';
  // const fetchUser = async () => {
  //   const url = `${baseUrl}/api/users/1`
  //   const response = await axios.get(url)
  //   const result = response.data.data.first_name
  //   console.log(result) //george
  //   setName(result)
  // }

  const baseUrl = 'http://192.168.170.131:8000';
  const fetchUser = async () => {
    try {
      const url = `${baseUrl}/course/getallcourse`;
      const response = await axios.get(url);
      const result = response;
      // console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {console.log(item.title)}
            <Text style={{color: 'black'}}>{item.title}</Text>
          </React.Fragment>
        );
      })}
      <Button title="Button" onPress={fetchUser} />
    </View>
  );
};

export default testapi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
