"use client";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useQuestionsStore } from "@/app/store/questionsStore";
import { Question } from "@/types/types";
import { routeName } from "@/app/_route-name";
import { useRouter } from "next/navigation";

function QuestionCard({
    id,
    title,
    answers,
    currentId,
    typeOfQuestion,
}: Question) {
    const { deleteQuestion } = useQuestionsStore();
    const router = useRouter();

    return (
        <div
            key={id}
            className="p-4 border rounded-lg flex justify-between items-center"
        >
            <div>
                <div>
                    <span className="font-semibold text-base">Question :</span>{" "}
                    {title}
                </div>
                <div>
                    <span className="font-semibold text-base">Type:</span>{" "}
                    {typeOfQuestion}
                </div>
                <div>
                    <span className="font-semibold text-base">Answer: </span>
                    {typeOfQuestion === "text"
                        ? answers[0]?.text || "No answer provided"
                        : currentId || "No answer selected"}
                </div>
            </div>
            <div className="flex gap-2">
                <IconButton
                    onClick={() => router.push(routeName.EditQuestions + id)}
                    aria-label="Edit"
                    color="primary"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={() => deleteQuestion(id)}
                    aria-label="Delete"
                    color="secondary"
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default QuestionCard;
