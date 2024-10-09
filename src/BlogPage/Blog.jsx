import Navbar from "../Navigation/Navbar";
import { Main } from "../Main/Main";
import BlogItem from "./BlogItem";
import './Blog.css'

const Contact = () => {

  const data = [
    { title: 'dawdwa',
      description: 'efefe'
    },
    {},
    
  ]

  return (
    <div>
      <Navbar />
      <Main>
        <BlogItem />
      </Main>
    </div>
  );
};

export default Contact;
