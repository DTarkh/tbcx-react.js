import { Main } from "../Main/Main"
import Navbar from "../Navigation/Navbar"
import ProfileItem from "./ProfileItem"

const About = () => {
  return (
    <div>

        <Navbar />
        <Main>
           <ProfileItem name={"Jhane"} surname={"Doe"} email={"Jhanedoe@tbcx.com"} img={"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </Main>
    </div>
  )
}

export default About