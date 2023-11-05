import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FETCH_STATUS } from "../../Helpers/fetchStatus";
import useQuestions from "../../Hooks/useQuestions";

import Header from "../../Components/Header/Header";
import HeaderTime from "../../Components/HeaderTime/HeaderTime";
import Playlist from "../../Components/Playlist/Playlist";
import Interactions from "../../Components/Interactions/Interactions";
import Info from "../../Components/Info/Info";
import Answers from "../../Components/Answers/Answers";

import { styles } from "./styles";
import { extraHeight } from "../../../Core/Constants/extraHeight";

const Home = () => {
  const [selected, setSelected] = useState(0);

  const { height } = Dimensions.get("window");

  const { questionsData, status, whileStatus } = useQuestions(selected);

  const isLoading = status === FETCH_STATUS.LOADING;
  const isSuccess = status === FETCH_STATUS.SUCCESS;
  const isError = status === FETCH_STATUS.ERROR;

  return (
    <>
      {isLoading && questionsData.length < 6 ? (
        <View testID="loading-indicator" style={styles.indicator}>
          <ActivityIndicator size="large" color="#555" />
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
            <FlatList
              data={questionsData}
              horizontal={false}
              windowSize={6}
              pagingEnabled={true}
              scrollEnabled={selected < questionsData.length - 3}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <ImageBackground
                    resizeMode="cover"
                    source={{ uri: item.image }}
                    style={styles.backgroundImage}
                  >
                    <View style={styles.tint} />
                    <SafeAreaView style={{ flex: 1 }}>
                      <View style={styles.subContainer}>
                        {whileStatus === FETCH_STATUS.LOADING ? (
                          <View style={styles.secondIndicator}>
                            <ActivityIndicator size="large" color="#fff" />
                          </View>
                        ) : null}
                        <View style={styles.textContainer}>
                          {item.question.split(" ").map((word, index) => (
                            <View style={styles.wordContainer} key={index}>
                              <Text style={styles.text}>{word}</Text>
                            </View>
                          ))}
                        </View>
                        <View>
                          <View style={styles.row}>
                            <View style={styles.column}>
                              <Answers
                                options={item.options}
                                questionId={item.id}
                              />
                              <Info
                                username={item.user.name}
                                description={item.description}
                              />
                            </View>
                            <Interactions profileImage={item.user.avatar} />
                          </View>
                          <Playlist playlistText={item.playlist} />
                        </View>
                      </View>
                    </SafeAreaView>
                  </ImageBackground>
                </View>
              )}
              onScroll={(event) => {
                const offsetY = event.nativeEvent.contentOffset.y;
                const itemHeight = height - extraHeight;
                const lastItemIndex = questionsData.length - 1;

                const currentItemIndex = Math.floor(offsetY / itemHeight);

                const fourthItemFromEndIndex = lastItemIndex - 3;

                if (currentItemIndex === fourthItemFromEndIndex) {
                  setSelected(fourthItemFromEndIndex);
                }
              }}
              keyExtractor={(item, index) => item.id.toString() + index}
            />
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
