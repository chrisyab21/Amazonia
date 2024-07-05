import { FC } from "react"
import { NavBar } from "./NavBar"
import { Header } from "./Header"
import { MissionSection } from "./MissionSection"
import { FormSection } from "./FormSection"
import { VisionSection } from "./VisionSection"
import { WhatsAppButton } from "./WhatsAppButton"



export const HomePage: FC = () => {

  return (
    <div className="h-full w-full">
      <NavBar />
      <Header />
      <MissionSection />
      <VisionSection />    
      <FormSection/> 
      <WhatsAppButton />
    </div>
  )
}
