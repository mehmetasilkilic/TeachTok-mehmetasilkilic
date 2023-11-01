import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";

import { FETCH_STATUS } from "../../Helpers/fetchStatus";
import useQuestions from "../../Hooks/useQuestions";

import Header from "../../Components/Header/Header";
import HeaderTime from "../../Components/HeaderTime/HeaderTime";
import Playlist from "../../Components/Playlist/Playlist";
import Interactions from "../../Components/Interactions/Interactions";
import Info from "../../Components/Info/Info";
import Questions from "../../Components/Questions/Questions";

import { styles } from "./styles";

const Home = () => {
  const [selected, setSelected] = useState(0);

  const { questionsData, status } = useQuestions(selected);

  const isLoading = status === FETCH_STATUS.LOADING;
  const isSuccess = status === FETCH_STATUS.SUCCESS;
  const isError = status === FETCH_STATUS.ERROR;

  return (
    <>
      {isLoading && questionsData.length === 0 ? (
        <View testID="loading-indicator" style={styles.indicator}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : isSuccess && questionsData ? (
        <>
          <View style={styles.header}>
            <Header
              title="For You"
              leftElement={<HeaderTime />}
              rightElement={
                <FontAwesome name="search" size={24} color="#fff" />
              }
            />
          </View>
          <View style={styles.container}>
            <PagerView
              orientation="vertical"
              onPageSelected={(e) => setSelected(e.nativeEvent.position)}
              style={styles.pagerView}
              initialPage={0}
              scrollEnabled={selected < questionsData.length - 3}
            >
              {questionsData.map((question, index) => (
                <View style={styles.wrapper} key={index}>
                  <ImageBackground
                    resizeMode="cover"
                    source={{ uri: question.image }}
                    style={styles.backgroundImage}
                  >
                    <View style={styles.tint} />
                    <SafeAreaView style={{ flex: 1 }}>
                      <View style={styles.subContainer}>
                        {selected >= questionsData.length - 3 ? (
                          <View style={styles.secondIndicator}>
                            <ActivityIndicator size="large" color="#fff" />
                          </View>
                        ) : null}
                        <View style={styles.textContainer}>
                          {question.question.split(" ").map((word, index) => (
                            <View style={styles.wordContainer} key={index}>
                              <Text style={styles.text}>{word}</Text>
                            </View>
                          ))}
                        </View>
                        <View>
                          <View style={styles.row}>
                            <View style={styles.column}>
                              <Questions
                                options={question.options}
                                questionId={question.id}
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
              ))}
            </PagerView>
          </View>
        </>
      ) : isError ? (
        <View style={styles.indicator}>
          <Text style={styles.errorText}>ERROR</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
