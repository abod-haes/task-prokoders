import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

function QuestionTypeChoices({
    choices,
    setChoices,
    selectedChoice,
    setSelectedChoice,
}: {
    choices: string[];
    setChoices: React.Dispatch<React.SetStateAction<string[]>>;
    selectedChoice: string | null;
    setSelectedChoice: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    return (
        <div className="flex flex-col gap-3 ">
            <h3 className="text-lg font-medium">Add Choices:</h3>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                {choices.map((choice, index) => (
                    <Input
                        key={index}
                        name={index.toString()}
                        value={choice}
                        onChange={(e) => {
                            const newChoices = [...choices];
                            newChoices[index] = e.target.value;
                            setChoices(newChoices);
                        }}
                    />
                ))}
                <Button
                    onClick={() => setChoices([...choices, ""])}
                    className="w-fit"
                >
                    + Add Option
                </Button>
            </div>
            <h3 className="text-lg font-medium">Select Correct Answer:</h3>
            <RadioGroup
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
            >
                {choices.map((choice, index) => (
                    <FormControlLabel
                        key={index}
                        value={choice}
                        control={<Radio />}
                        label={choice}
                    />
                ))}
            </RadioGroup>
        </div>
    );
}

export default QuestionTypeChoices;
