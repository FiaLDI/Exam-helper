import { Question } from "@/entities/question/types/question.types";
import { generateUUID } from "@/shared/lib/uuid/uuid";
import { DefaultButton } from "@/shared/ui/button";
import { useCallback, useState } from "react";

interface QuestionFormProps {
    base: Question, 
    func: (exam: Question) => boolean; 
    close: ()=>void
}

export const QuestionForm = ({
    base, 
    func, 
    close
}: QuestionFormProps) => {
    const isCreate = useCallback(() =>!!base.id, [base.id]);

    const [data, setData] = useState<Question>({
        id: isCreate() ? base.id : generateUUID(), 
        title: isCreate() ? base.title : "", 
        description: isCreate() ? base.description : "", 
        examId: base.examId,
        additionDescription: isCreate() ? base.additionDescription : "",
        answer: isCreate() ? base.answer : "",
    });

    const submit = () => {
        func(data);
        close();
    }

    return (
        <div className="flex flex-col lg:w-[450px] p-3 items-center gap-7">
            <div className="w-full ">
                <label htmlFor="" className="w-full text-sm text-neutral-500">ExamId</label>
                <input 
                    type="text" 
                    name="examId"
                    className="w-full box-border text-white p-1 border outline-0 text-sm disabled:text-neutral-500 pointer-none" 
                    value={data.examId}
                    disabled
                />
                <label htmlFor="" className="w-full text-sm text-neutral-300">Title</label>
                <input 
                    type="text" 
                    name="title"
                    className="w-full box-border text-base text-white p-1 border outline-0" 
                    onChange={(e) => {
                        setData({...data, title: e.currentTarget.value})
                    }} 
                    value={data.title}
                />
                <label 
                    htmlFor="" 
                    className="w-full text-sm text-neutral-300"
                >
                    Description
                </label>
                <textarea 
                    className="w-full box-border text-base text-white p-1 border min-h-[100px] outline-0 pb-5"
                    
                    onChange={(e) => {
                        setData({...data, description: e.currentTarget.value})
                    }} 
                    value={data.description}
                />
            </div>
            
            <DefaultButton title={!isCreate() ? "Create" : "Edit"} handler={submit} />
        </div>
    )
}
