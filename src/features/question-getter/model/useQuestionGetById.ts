import { Question, useQuestionStore } from "@/entities/question";

interface useQuestionGetByIdProps {
    id: string
}

export const useQuestionGetById = ({id}: useQuestionGetByIdProps): Question | null => {

    const { getQuestion } = useQuestionStore();

    return getQuestion(id)
}
