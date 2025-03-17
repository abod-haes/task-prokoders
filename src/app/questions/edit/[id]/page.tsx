"use client";
import { useQuestionsStore } from "@/app/store/questionsStore";
import { useParams } from "next/navigation";
import QuestionForm from "../../components/question-form";

export default function EditQuestionPage() {
    const { id } = useParams();
    const { questions } = useQuestionsStore();

    const questionToEdit = questions.find((q) => q.id === id);

    if (!questionToEdit) {
        return <p>Question not found!</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Edit Question</h1>
            <QuestionForm existingQuestion={questionToEdit} />
        </div>
    );
}
