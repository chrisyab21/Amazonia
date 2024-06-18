import { FC } from "react"
import { NavBar } from "./NavBar"
import { VisionSection } from "./VisionSection"
import { MissionSection } from "./MissionSection"

export const HomePage: FC = () => {

  return (
    <div className="h-screen w-screen divide-y divide-black">
      <NavBar />
      <VisionSection />
      <MissionSection />
    </div>
  )
}
