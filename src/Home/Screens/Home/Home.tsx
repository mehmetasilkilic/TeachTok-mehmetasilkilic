import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { QuestionProps } from "../../Models";

import Header from "../../Components/Header/Header";
import HeaderTime from "../../Components/HeaderTime/HeaderTime";
import Playlist from "../../Components/Playlist/Playlist";
import Interactions from "../../Components/Interactions/Interactions";
import Info from "../../Components/Info/Info";
import Questions from "../../Components/Questions/Questions";

import { styles } from "./styles";

const Home = () => {
  const [question, setQuestion] = useState<QuestionProps | undefined>(
    undefined
  );
  const [correctOption, setCorrectOption] = useState("");

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      "https://cross-platform.rp.devfactory.com/for_you"
    );
    setQuestion(data);
  };

  const fetchAnswer = async () => {
    const { data } = await axios.get(
      `https://cross-platform.rp.devfactory.com/reveal?id=${question?.id}`
    );
    setCorrectOption(data.correct_options[0].id);
  };

  useEffect(() => {
    // fetchQuestions();
  }, []);

  useEffect(() => {
    if (question) {
      fetchAnswer();
    }
  }, [question]);

  return (
    <>
      {question && (
        <View style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: question?.image }}
            style={styles.backgroundImage}
          >
            <View style={styles.tint} />
            <SafeAreaView style={{ flex: 1 }}>
              <Header
                title="For You"
                leftElement={<HeaderTime timeleft="10m" />}
                rightElement={
                  <FontAwesome name="search" size={24} color="#fff" />
                }
              />
              <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{question.question}</Text>
                </View>
                <View>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <Questions
                        options={question.options}
                        correctOption={correctOption}
                      />
                      <Info
                        username={question.user.name}
                        description={question.description}
                      />
                    </View>
                    <Interactions profileImage={question.user.avatar} />
                  </View>
                  <Playlist playlistText={question.playlist} />
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

export default Home;
