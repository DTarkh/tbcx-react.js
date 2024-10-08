import Navbar from "../Navigation/Navbar";
import { Main } from "../Main/Main";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Main>
        <form>
          <div>
            <label >Name</label>
            <input type="text" className="input"  placeholder="Enter Name"/>
          </div>
          <div>
          <label>Email</label>
          <input type="email" className="input" placeholder="Enter Email"/>

          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </Main>
    </div>
  );
};

export default Contact;
