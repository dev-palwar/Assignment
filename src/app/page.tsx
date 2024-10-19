"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MCQQues } from "@/data";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(MCQQues.length).fill("")
  );
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = MCQQues[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < MCQQues.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter(
      (answer, index) => answer === MCQQues[index].correctAnswer
    ).length;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Card className="w-full max-w-lg mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center">
            You scored {score} out of {MCQQues.length}!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswers(new Array(MCQQues.length).fill(""));
              setShowResults(false);
            }}
          >
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Question {currentQuestion.id} of {MCQQues.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
        <RadioGroup
          value={selectedAnswers[currentQuestionIndex]}
          onValueChange={handleAnswerSelect}
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          {currentQuestionIndex + 1} / {MCQQues.length}
        </div>
        <Button
          onClick={handleNextQuestion}
          disabled={!selectedAnswers[currentQuestionIndex]}
        >
          {currentQuestionIndex === MCQQues.length - 1 ? "Finish" : "Next"}{" "}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
