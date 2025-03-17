"use client";
import { useQuestionsStore } from "../store/questionsStore";

import QuestionCard from "./components/question-card";

export default function QuestionsPage() {
    const { questions } = useQuestionsStore();

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Questions List</h1>

            {questions.length === 0 ? (
                <p>No questions available. Add some!</p>
            ) : (
                <div className="gap-4 grid grid-cols-3">
                    {questions.map((q) => (
                        <QuestionCard {...q} key={q.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
