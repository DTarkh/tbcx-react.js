import { Main } from "../Main/Main"
import Navbar from "../Navigation/Navbar"
import ProfileItem from "./ProfileItem"

const About = () => {
  return (
    <div>

        <Navbar />
        <Main>
           <ProfileItem />
        </Main>
    </div>
  )
}

export default About