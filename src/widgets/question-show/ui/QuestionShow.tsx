"use client";

import { Question } from "@/entities/question";
import { useQuestionGetById } from "@/features/question-getter";

interface QuestionShowProps {
    id: string
} 

export const QuestionShow = ({id}: QuestionShowProps) => {
    const Question: Question | null = useQuestionGetById({id});

    return (
        <div className="p-5 max-w-7xl mx-auto w-full text-white flex flex-col gap-5">
            <div className="">
                <div className="text-sm text-neutral-400">{Question? Question.id: null}</div>
                <div className="text-sm text-neutral-400">{Question? Question.examId: null}</div>
                <div className="">{Question? Question.title: null}</div>
                <div className="">{Question? Question.description: null}</div>
                <div className="">{Question? Question.additionDescription: null}</div>
                <div className="">{Question? Question.answer: null}</div>
            </div>
        </div>
    )
}