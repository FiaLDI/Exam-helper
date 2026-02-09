import { Exam, useExamStore } from "@/entities/exam";

interface useExamGetByIdProps {
    id: string
}

export const useExamGetById = ({id}: useExamGetByIdProps): Exam | null => {

    const { getExam } = useExamStore();

    return getExam(id)
}
