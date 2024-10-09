import Navbar from "../Navigation/Navbar";
import { Main } from "../Main/Main";
import BlogItem from "./BlogItem";
import "./Blog.css";

const Contact = () => {
  const data = [
    { title: "Vocation friends", content: "Vocation friends inspire each other to pursue meaningful paths, supporting personal growth and fostering shared values in their careers.", author: "Liam Carter", image: "https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill" },
    { title: "He's all that", content: "He’s All That is a modern teen romantic comedy where a social media influencer attempts to transform an unpopular boy into prom king...", author: "Sophia Ramirez", image: "https://via.assets.so/movie.png?id=2&q=95&w=360&h=360&fit=fill",},
    { title: "Venom", content: "Venom is a dark, sentient alien symbiote that bonds with a host, granting enhanced abilities, aggression, and a monstrous appearance...", author: "John Doe", image: "https://via.assets.so/movie.png?id=3&q=95&w=360&h=360&fit=fill",}
  ];

  return (
    <div>
      <Navbar />
      <Main>
        {data.map(item => <BlogItem title={item.title} content= {item.content} author={item.author} image={item.image}/>)}
      </Main>
    </div>
  );
};

export default Contact;
