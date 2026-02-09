import { Header } from "@/widgets/header";
import { QuestionShow } from "@/widgets/question-show";

interface QuestionPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({
  params,
}: QuestionPageProps) {
  const { id } = await params;

  return (
    <>
      <Header />
      <QuestionShow id={id} />
    </>
  );
}
