import { Pencil, Trash } from "lucide-react";

type QuestionCardProps = {
  idx: number;
  title: string;
  description: string;
  number?: string;
  remove?: () => void;
  edit?: () => void;
  link?: () => void;
};

export const QuestionCard = ({idx, title, description, remove, edit, link}: QuestionCardProps) => {

    return (
        <div className="">
            <div className="border-2 border-indigo-400 p-3 flex gap-3">
                <div className="">{idx + 1}</div>
                <div className="">{title}</div>
                <button
                    onClick={remove}
                    className="hover:text-red-400 transition-colors cursor-pointer"
                    aria-label="Удалить вопрос экзамена"
                >
                <Trash size={18} />
                </button>
                <button
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                    aria-label="Редактировать вопрос экзамена"
                    onClick={edit}
                >
                <Pencil size={18} />
                </button>
            </div>
            
            <div className="">
                {description}
            </div>

            <button 
                className="text-sm hover:text-indigo-400 transition-colors cursor-pointer"
                onClick={() => {
                    if(link) link();
                }}
            >
            Подробнее
            </button>
        </div>
    )
}
