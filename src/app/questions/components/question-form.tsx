"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    QuestionType,
    Question,
    Answer,
    QuestionFormProps,
} from "@/types/types";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/ui/button";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useQuestionsStore } from "@/app/store/questionsStore";
import Input from "@/components/ui/input";
import toast from "react-hot-toast";
import { routeName } from "@/app/_route-name";
import QuestionTypeTrueOrFalse from "./question-type-trueOrFalse";
import QuestionTypeChoices from "./question-type-choices";

export default function QuestionForm({ existingQuestion }: QuestionFormProps) {
    const router = useRouter();
    const { addQuestion, updateQuestion } = useQuestionsStore();
    const isEditing = !!existingQuestion;

    const [questionType, setQuestionType] = useState<QuestionType>(
        existingQuestion?.typeOfQuestion || QuestionType.Text
    );
    const [questionText, setQuestionText] = useState(
        existingQuestion?.title || ""
    );
    const [trueFalseAnswer, setTrueFalseAnswer] = useState(
        existingQuestion?.currentId || null
    );
    const [choices, setChoices] = useState(
        existingQuestion?.answers.map((a) => a.text) || [""]
    );
    const [selectedChoice, setSelectedChoice] = useState(
        existingQuestion?.currentId || null
    );
    const [textAnswer, setTextAnswer] = useState(
        existingQuestion?.answers[0]?.text || ""
    );

    const handleSubmit = async () => {
        if (!questionText) {
            toast.error("Question text is required!");
            return;
        }

        let answers: Answer[] = [];
        let currentId = "";

        try {
            if (questionType === QuestionType.Text) {
                if (!textAnswer) {
                    toast.error("Answer for the text question is required!");
                    return;
                }
                answers = [{ id: uuidv4(), text: textAnswer }];
            } else if (questionType === QuestionType.TrueOrFalse) {
                if (!trueFalseAnswer) {
                    toast.error(
                        "Please select an answer for True/False question!"
                    );
                    return;
                }
                answers = [
                    { id: "true", text: "True" },
                    { id: "false", text: "False" },
                ];
                currentId = trueFalseAnswer;
            } else if (questionType === QuestionType.Choices) {
                if (!choices.some((choice) => choice.trim())) {
                    toast.error(
                        "Please add at least one choice for the question!"
                    );
                    return;
                }
                answers = choices.map((choice) => ({
                    id: uuidv4(),
                    text: choice,
                }));
                currentId = selectedChoice || "";
                if (!currentId) {
                    toast.error("Please select a correct answer!");
                    return;
                }
            }

            const newQuestion: Question = {
                id: existingQuestion?.id || uuidv4(),
                title: questionText,
                answers,
                currentId,
                typeOfQuestion: questionType,
            };

            if (isEditing) {
                updateQuestion(newQuestion);
                toast.success("Question updated successfully!");
            } else {
                addQuestion(newQuestion);
                toast.success("Question added successfully!");
            }

            router.push(routeName.questions);
        } catch {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-[800px]">
            <h3 className="text-lg font-medium">Choose Type of Question:</h3>
            <ToggleButtonGroup
                value={questionType}
                exclusive
                onChange={(_, newType) => newType && setQuestionType(newType)}
            >
                <ToggleButton value={QuestionType.Text}>
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value={QuestionType.TrueOrFalse}>
                    <DoneAllIcon />
                </ToggleButton>
                <ToggleButton value={QuestionType.Choices}>
                    <ChecklistIcon />
                </ToggleButton>
            </ToggleButtonGroup>

            <Input
                name="question"
                label="Enter the question"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
            />

            {questionType === QuestionType.Text && (
                <Input
                    name="answer"
                    label="Enter the answer for the question"
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                />
            )}

            {questionType === QuestionType.TrueOrFalse && (
                <QuestionTypeTrueOrFalse
                    setTrueFalseAnswer={setTrueFalseAnswer}
                    trueFalseAnswer={trueFalseAnswer}
                />
            )}

            {questionType === QuestionType.Choices && (
                <QuestionTypeChoices
                    choices={choices}
                    setChoices={setChoices}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                />
            )}

            <Button onClick={handleSubmit}>
                {isEditing ? "Update Question" : "Add Question"}
            </Button>
        </div>
    );
}
