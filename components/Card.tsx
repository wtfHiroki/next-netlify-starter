'use client';

import React from 'react';
import { Typewriter } from 'nextjs-simple-typewriter'

const Card: React.FC = () => {
  const data = {
    name: "menard jirro",
    age: 21,
    country: "philippines",
    socials: {
      facebook: "www.facebook.com/menard.9k",
      instagram: "www.instagram.com/wtf_menard",
      github: "www.github.com/wtfHiroki",
    },
  };
  const quotes = [
    "I have no idea what I'm doing, but I'm doing it anyway.",
    "Code, commit, push, repeat.",
    "I'm not arguing, I'm just explaining why I'm right. (About code)",
    "May the code be with you.",
    "I'm not lazy, I'm just on energy-saving mode. (Coding edition)",
    "Coffee: because adulting is hard, but coding is harder.",
    "I'm not a morning person, I'm a coffee person. (Coding edition)",
    "Debugging: because sometimes you just need to talk to your code.",
    "Code like no one is watching, because no one is watching.",
    "I'm not procrastinating, I'm just doing some pre-coding research.",
    "Why do I always forget that I need to commit my changes?",
    "When in doubt, add more coffee.",
    "When in doubt, add more code.",
    "I'm not arguing, I'm just passionately expressing my point of view while completely dismissing yours.",
    "Code, sleep, eat, repeat.",
    "I'm not a programmer, I'm a problem solver. (Who happens to use code)",
    "I'm not a coder, I'm a digital artist. (Who uses code as my medium)",
  ];
  
  return (
  <div className="card">
    <pre className="json">{JSON.stringify(data, null, 2)}</pre>
  </div>
  );
};

export default Card;
