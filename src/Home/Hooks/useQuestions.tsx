import { Alert } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import { QuestionProps } from "../Models";
import { FETCH_STATUS } from "../Helpers/fetchStatus";

const useQuestions = (selected: number) => {
  const [questionsData, setQuestionsData] = useState<QuestionProps[]>([]);
  const [prevSelected, setPrevSelected] = useState(selected);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);
  const [whileStatus, setWhileStatus] = useState(FETCH_STATUS.IDLE);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        "https://cross-platform.rp.devfactory.com/for_you"
      );
      if (res.status === 200) {
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
    setStatus(FETCH_STATUS.LOADING);
    const newQuestions: QuestionProps[] = [];
    for (let i = 0; i < 6; i++) {
      const data = await fetchQuestions();
      newQuestions.push(data);
    }
    setQuestionsData(newQuestions);
    setStatus(FETCH_STATUS.SUCCESS);
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
    if (questionsData.length > 0 && selected >= prevSelected - 1) {
      setWhileStatus(FETCH_STATUS.LOADING);
      const newQuestions: QuestionProps[] = [];
      const fetchDataIn = async () => {
        for (let i = 0; i < 5; i++) {
          const data = await fetchQuestions();
          newQuestions.push(data);
        }
        setQuestionsData((prevData) => [...prevData, ...newQuestions]);
        setWhileStatus(FETCH_STATUS.SUCCESS);
      };
      fetchDataIn();
    }
  }, [selected]);

  return { questionsData, whileStatus, status };
};

export default useQuestions;
