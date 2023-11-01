import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface TimerContextData {
  formattedTime: string;
}

const TimerContext = createContext<TimerContextData | undefined>(undefined);

export function useTimerContext() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
}

interface TimerProviderProps {
  children: ReactNode;
}

export function TimerProvider({ children }: TimerProviderProps) {
  const [timeSpent, setTimeSpent] = useState(0);

  const updateTimeSpent = () => {
    setTimeSpent((prevTime) => prevTime + 1);
  };

  useEffect(() => {
    const timer = setInterval(updateTimeSpent, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatSessionTime = (timeInSeconds: number) => {
    if (timeInSeconds < 60) {
      return `${timeInSeconds}s`;
    } else {
      const minutes = Math.floor(timeInSeconds / 60);
      return `${minutes}m`;
    }
  };

  const formattedTime = formatSessionTime(timeSpent);

  return (
    <TimerContext.Provider value={{ formattedTime }}>
      {children}
    </TimerContext.Provider>
  );
}
