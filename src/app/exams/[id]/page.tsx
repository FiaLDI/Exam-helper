import { ExamShow } from "@/widgets/examshow";
import { Header } from "@/widgets/header";
import { QuestionList } from "@/widgets/question-list";

interface ExamPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({
  params,
}: ExamPageProps) {
  const { id } = await params;

  return (
    <>
      <Header />
      <ExamShow id={id} />
      <QuestionList id={id} />
    </>
  );
}
