import React from "react";
import { useState, useEffect } from "react";
import {
  View, Text, TextInput, Image, TouchableOpacity
} from 'react-native';
import { countryList, objectImageList, objectNameList } from "../../data/Data";



const GuessTheCountry = () => {
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState(0);

  const randomIndex = () => {
    const randomNumberIndex = Math.floor(Math.random() * countryList.length);
    
    setIndex(randomNumberIndex);
  }

  useEffect(() => {
    randomIndex();
  }, []);

  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index])
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>

          <Text style={{ padding: 10, backgroundColor: 'cornflowerblue', borderRadius: 10, fontWeight: 'bold', color: 'white', fontSize: 26 }}>GuessTheCountry</Text>
        </View>
        <View>

          <Image source={{ uri: objectImageList[index] }} style={{ borderRadius: 15, width: 300, height: 300 }}></Image>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: 10 }}>{objectNameList[index]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder="Write your answer" style={{ width: 150, paddingVertical: 10, borderWidth: 1, borderColor: 'black', marginRight: 10 }}
            onChangeText={(text) => setAnswer(text)}></TextInput><TouchableOpacity style={{ padding: 10, backgroundColor: 'cornflowerblue', borderRadius: 10 }}
            ><Text style={{ fontWeight: 'bold', color: 'white' }}>Submit</Text></TouchableOpacity>
        </View>
        <Text>{answer}</Text>
      </View>
    </View>
  )
}

export default GuessTheCountry;