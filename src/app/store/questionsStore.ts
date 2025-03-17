import { create } from "zustand";
import { Question } from "@/types/types";

interface QuestionsState {
    questions: Question[];
    addQuestion: (question: Question) => void;
    updateQuestion: (updatedQuestion: Question) => void;
    deleteQuestion: (id: string) => void;
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
    questions: [],

    addQuestion: (question) =>
        set((state) => ({
            questions: [...state.questions, question],
        })),

    updateQuestion: (updatedQuestion: Question) =>
        set((state) => ({
            questions: state.questions.map((q) =>
                q.id === updatedQuestion.id ? updatedQuestion : q
            ),
        })),

    deleteQuestion: (id) =>
        set((state) => ({
            questions: state.questions.filter((q) => q.id !== id),
        })),
}));
