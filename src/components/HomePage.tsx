import { FC } from "react"
import { NavBar } from "./NavBar"
import { Header } from "./Header"
import { MissionSection } from "./MissionSection"
import { FormSection } from "./FormSection"
import { VisionSection } from "./VisionSection"
import { WhatsAppButton } from "./WhatsAppButton"
import { ProjectSection } from "./ProjectSection"



export const HomePage: FC = () => {

  return (
    <div className="h-full w-full">
      <NavBar />
      <Header />
      <ProjectSection />
      <MissionSection />
      <VisionSection />
      <FormSection />
      <WhatsAppButton />
    </div>
  )
}
