import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

function QuestionTypeTrueOrFalse({
    trueFalseAnswer,
    setTrueFalseAnswer,
}: {
    trueFalseAnswer: string | null;
    setTrueFalseAnswer: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    return (
        <div>
            <RadioGroup
                value={trueFalseAnswer}
                onChange={(e) => setTrueFalseAnswer(e.target.value)}
            >
                <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="True"
                />
                <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="False"
                />
            </RadioGroup>
        </div>
    );
}

export default QuestionTypeTrueOrFalse;
