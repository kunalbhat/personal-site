import PageContainer from "../Components/PageContainer";
import HeroHeading from "../Components/HeroHeading";
import ProjectsList from "./projects";

export default function Portfolio() {
  return (
    <PageContainer>
      <header>
        <HeroHeading text="My Work" />
      </header>
      <ProjectsList />
    </PageContainer>
  );
}
