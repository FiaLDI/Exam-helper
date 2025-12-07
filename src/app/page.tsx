import { ModalContainer } from "@/features/open-modal";
import { Contacts } from "@/widgets/Contacts ";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { ProjectList } from "@/widgets/project-list";
import { Skills } from "@/widgets/skills";
import { TimeLine } from "@/widgets/timeline";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectList />
        <TimeLine />
        <Skills />
        <Contacts />
      </main>
      <Footer />
      <ModalContainer /> 
    </>
  );
}
