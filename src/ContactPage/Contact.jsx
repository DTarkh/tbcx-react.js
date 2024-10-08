import Navbar from "../Navigation/Navbar";
import { Main } from "../Main/Main";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Main>
        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <button type="submit">Submit</button>
        </form>
  
      </Main>
    </div>
  );
};

export default Contact;
