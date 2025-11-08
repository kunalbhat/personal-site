// React utilities
import Image from "next/image";
import Link from "next/link";
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
