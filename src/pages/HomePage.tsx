import { FC } from "react"
import { NavBar } from "../components/NavBar"
import { Header } from "../components/Header"
import { MissionSection } from "../components/MissionSection"
import { FormSection } from "../components/FormSection"
import { VisionSection } from "../components/VisionSection"
import { WhatsAppButton } from "../components/WhatsAppButton"
import { ProjectSection } from "../components/ProjectSection"
import { Toaster } from "react-hot-toast"
import { ToasterComponent } from "../components/ToasterComponent"



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
      <ToasterComponent />
    </div>
  )
}
