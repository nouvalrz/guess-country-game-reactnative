import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { countryList, objectImageList, objectNameList } from "../../data/Data";

const GuessTheCountryScreen = (props) => {

  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  
  const { navigation } = props;


  const randomIndex = () => {
    const pickRandomIndex = Math.floor(Math.random() * countryList.length);
    setIndex(pickRandomIndex);
  }

  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index]) {
      setResult('true');
      setScore(score + 10);
    } else {
      setResult('false');
    }
    setTimeout(() => {
      setResult('');
      setAnswer('');
      randomIndex();
    }, 1500);
  }

  // useEffect(() => {
  //   randomIndex();
  // }, [])

  useEffect(() => {
    if (score === 50) {
      navigation.navigate('Win');
    }
  }, [score])

  useEffect(() => {
    const homePage = navigation.addListener('focus', () => {
      randomIndex();
      setScore(0);
    })
    return homePage;
  })

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textDecorationLine: 'underline', fontSize: 28, fontFamily: 'serif', marginBottom: 16, color: 'black' }}>
          Guess The Country
        </Text>
        <Image style={{ width: 250, height: 250, borderRadius: 10 }} source={{ uri: objectImageList[index] }} />
        <View style={{ margin: 8, backgroundColor: 'lavender', padding: 4, borderWidth: 1 }}>
          <Text style={{ fontSize: 18, color: 'black' }}>
            {objectNameList[index]}
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          margin: 8
        }}>
          <TextInput style={{
            borderWidth: 1,
            width: '50%',
            color: 'black'
          }}
            placeholder="Write your answer" placeholderTextColor={'black'} onChangeText={(text) => setAnswer(text)} value={answer} />
          <TouchableOpacity style={{
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 8,
            marginLeft: 8,
            marginBottom: 8,
            marginTop: 8,
            backgroundColor: 'skyblue'
          }} onPress={() => checkAnswer()}>
            <Text style={{ fontSize: 18, color: 'black' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <Text>{result}</Text>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16
        }}>
          <View style={{
            borderWidth: 1,
            padding: 8,
            alignItems: 'center',
            backgroundColor: 'mistyrose',
            borderRadius: 20
          }}>
            <Text style={{ color: 'black' }}>Score : {score}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default GuessTheCountryScreen;