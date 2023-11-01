import { useEffect, useState } from "react";
import axios from "axios";

import { QuestionProps } from "../Models";
import { FETCH_STATUS } from "../Helpers/fetchStatus";
import { Alert } from "react-native";

const useQuestions = (selected: number) => {
  const [questionsData, setQuestionsData] = useState<QuestionProps[]>([]);
  const [prevSelected, setPrevSelected] = useState(selected);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        "https://cross-platform.rp.devfactory.com/for_you"
      );
      if (res.status === 200) {
        setStatus(FETCH_STATUS.SUCCESS);
        return res.data;
      }
    } catch (err) {
      setStatus(FETCH_STATUS.ERROR);
      Alert.alert(
        "Error",
        "An error occurred while fetching data. Please try again.",
        [
          {
            text: "Reload",
            onPress: () => {
              fetchData();
            },
          },
        ]
      );
      throw err;
    }
  };

  const fetchData = async () => {
    const newQuestions: QuestionProps[] = [];
    for (let i = 0; i < 5; i++) {
      const data = await fetchQuestions();
      newQuestions.push(data);
    }
    setQuestionsData(newQuestions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selected > prevSelected) {
      setPrevSelected(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (questionsData.length > 0 && selected >= prevSelected) {
      const newQuestions: QuestionProps[] = [];
      const fetchDataIn = async () => {
        for (let i = 0; i < 3; i++) {
          const data = await fetchQuestions();
          newQuestions.push(data);
        }
        setQuestionsData((prevData) => [...prevData, ...newQuestions]);
      };
      fetchDataIn();
    }
  }, [selected]);

  return { questionsData, status };
};

export default useQuestions;
