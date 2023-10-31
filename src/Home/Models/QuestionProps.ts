export type OptionProps = {
  answer: string;
  id: string;
};

export type User = {
  avatar: string;
  name: string;
};

export type QuestionProps = {
  description: string;
  id: number;
  image: string;
  options: OptionProps[];
  playlist: string;
  question: string;
  type: string;
  user: User;
};
