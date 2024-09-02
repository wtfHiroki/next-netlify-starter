import React from 'react';
import { Typewriter } from 'nextjs-simple-typewriter'
import Footer from '../components/Footer';

const Card: React.FC = () => {
  const data = {
    name: "menard jirro",
    age: 21,
    country: "philippines",
    socials: {
      facebook: "@menard.9k",
      instagram: "@wtf_menard",
      github: "@wtfHiroki",
    },
  };
  return (
  <div className="card">
    <Header title='Hello World!'/>
    <pre className="json">{JSON.stringify(data, null, 2)}</pre>
    <Footer />
  </div>
  );
};

export default Card;
