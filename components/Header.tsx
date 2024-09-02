import Typewriter from 'typewriter-effect';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const quotes = [
  "Code, eat, sleep, repeat",
  "Error is my love language",
  "Caffeine fueled code",
  "May the code be with you",
  "Ctrl+Alt+Procrastinate",
  "I'd rather be coding",
  "Code is my therapy",
  "Debugging is my life",
  "Code all night, sleep all day",
  "Bugs are my pets",
  "Code, commit, repeat",
  "I'm not lazy, I'm just on coding mode",
  "Code is my happy place",
  "Error 404: Productivity not found",
  "Coding is my superpower"
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
