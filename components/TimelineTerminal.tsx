import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export function TimelineTerminal() {
    return (
      <Terminal>
        <TypingAnimation>&gt; cat timeline.txt</TypingAnimation>
  
        <AnimatedSpan delay={1000} className="text-blue-500">
          <span>2022: Started B.Tech at Bennett University 🎓</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>2023: Scored 9+ CGPA in two consecutive semesters 🏆</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-yellow-500">
          <span>2024: Solved 250+ DSA questions and built 5-6 core innovative projects 💻</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-purple-500">
          <span>2024: Started Full Stack Internship at international company Boloo 🌍</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-pink-500">
          <span>2024: Selected as Lead Developer Intern at EdTech startup Ezlearn 🚀</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6000} className="text-muted-foreground">
          Timeline loaded successfully!
        </TypingAnimation>
      </Terminal>
    );
  }
  