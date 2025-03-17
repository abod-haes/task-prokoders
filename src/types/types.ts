export enum QuestionType {
    TrueOrFalse = "trueOrFalse",
    Text = "text",
    Choices = "choices",
}

export interface Answer {
    id: string;
    text: string;
}

export interface Question {
    id: string;
    title: string;
    answers: Answer[];
    currentId: string;
    typeOfQuestion: QuestionType;
}
export interface QuestionFormProps {
    existingQuestion?: Question;
}
