import Typewriter from 'typewriter-effect';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const quotes = [
    "I have no idea what I'm doing, but I'm doing it anyway.",
    "Code, commit, push, repeat.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "May the code be with you.",
    "I'm not lazy, I'm just on energy-saving mode.",
    "Coffee: because adulting is hard, but coding is harder.",
    "I'm not a morning person, I'm a coffee person.",
    "Code like no one is watching, because no one is watching.",
    "Why do I always forget that I need to commit my changes?",
    "When in doubt, add more coffee.",
    "When in doubt, add more code.",
    "Code, sleep, eat, repeat.",
  ];
  return (
    <div>
      <pre className="title">
        <Typewriter
          options={{
            strings: quotes,
            autoStart: true,
            loop: true
          }}
        />
      </pre>
      <hr></hr>
    </div>
  )
}
