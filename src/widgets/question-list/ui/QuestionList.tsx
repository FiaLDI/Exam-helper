"use client";

import { Exam } from "@/entities/exam";
import { QuestionCard, useQuestionStore } from "@/entities/question";
import { Question } from "@/entities/question";
import { useExamGetById } from "@/features/exam-getter";
import { useModal } from "@/features/open-modal";
import { QuestionForm } from "@/features/question-update";
import { ChangeView, useView } from "@/shared/hooks";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface QuestionListProps {
    id?: string
} 

export const QuestionList = ({id}: QuestionListProps) => {
    const Exam: Exam | null = id ? useExamGetById({id}) : null;
    const { questions, addQuestions, removeQuestions, editQuestions, getQuestionsByExamId } = useQuestionStore();
    const { openModal, closeModal } = useModal();
    const [questionExam, setQuestionExam] = useState<Question[]>(id ? getQuestionsByExamId(id) : questions);

    const router = useRouter();

    const { view, setBlock, setList } = useView();

    useEffect(() => {
        if (id)
            setQuestionExam(getQuestionsByExamId(id));
        else {
            setQuestionExam(questions)
        }
    }, [questions, ]);

    return (
        <div className="p-5 max-w-7xl mx-auto w-full text-white flex flex-col gap-5">
            <div className="">
                <div className="text-sm text-neutral-400">{Exam? Exam.id: null}</div>
            </div>
            <div className="flex w-full gap-5 items-center justify-between">
                <div className=" flex w-full items-center gap-5">
                    <h2 className="text-2xl ">Список вопросов </h2> 
                    <div className="flex h-fit">
                        {id && <button 
                            onClick={()=> {
                                openModal((
                                    <QuestionForm 
                                        func={addQuestions} 
                                        close={closeModal} 
                                        base={{
                                            id: "",
                                            title: "",
                                            description: "",
                                            examId: id,
                                            additionDescription: "",
                                            answer: ""
                                        }} 
                                    />
                                ), 
                                "Создание вопроса экзамена"
                        )}}>
                            <Plus />
                        </button>
                    }   
                    </div>
                </div>
                <ChangeView view={view} setBlock={setBlock} setList={setList} />
            </div>
            <div data-view={view} 
                className={
                    "grid data-[view=block]:grid-cols-1 data-[view=block]:sm:grid-cols-2 gap-3"
                }>
                {questionExam && questionExam.map((val, idx) => (
                    <QuestionCard 
                        key={`question-${val.id}-${idx}`} 
                        idx={idx}
                        title={val.title} 
                        description={val.description} 
                        remove={() => {
                           removeQuestions(val)}
                        } 
                        edit={()=> {
                            openModal((
                                <QuestionForm 
                                    func={editQuestions} 
                                    close={closeModal} 
                                    base={val} 
                                />), 
                            "Изменение вопроса экзамена")
                        }} 
                        link={()=>{
                            router.push(`questions/${val.id}`)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}