import { FileText, GraduationCap, Upload, BookOpen } from "lucide-react";
import FeatureCard from "./FeaturedCard";


function Cards() {
  const cards = [
    {
      title: "Academic Notes",
      description: "Comprehensive lecture notes from top-performing students.",
      icon: FileText,
      buttonText: "Explore Notes",
      buttonLink: "/notes",
      variant: "default",
      colSpan: "md:col-span-8",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDbbvrltyHQEaLMU0amfKLdzWTIgMJaFRN9TvYaiuTqGNxS-jtTEt1CoTaqU5HUHLeIYOfvykQYYONHP6MdFMcv3V0OticO3ToeU59BTGiLeXSp6EgPXPrZ9jckpwF5pLVHmYWxOGmb90OLmpYVoV4cqxbvpqaT-16YWWGB98D7OAJtfwdLjhVxCIRpwcEn7g-lqFvuKk8wY6Qo4DoNUKokzWxAriKBDjK0v8n9iSAu7gg565Q2Ux35oAhZ5Q4bsj7df9OsTFaOv11h",
    },

    {
      title: "Previous Year Questions",
      description: "Ace your exams with a massive archive of previous papers.",
      icon: GraduationCap,
      buttonText: "Download Now",
      buttonLink: "/pyq",
      variant: "primary",
      colSpan: "md:col-span-4",
    },

    {
      title: "Viva Quiz",
      description: "Interactive flashcards and quizzes for lab exams.",
      icon: BookOpen,
      buttonText: "Start Quiz",
      buttonLink: "/quiz",
      variant: "secondary",
      colSpan: "md:col-span-4",
    },

    {
      title: "Contribute & Help",
      description: "Upload high-quality notes and help your peers.",
      icon: Upload,
      buttonText: "Upload Notes",
      buttonLink: "/register",
      variant: "default",
      colSpan: "md:col-span-8",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9-bJSL5adVNPKLhNT_yqY-hba2b-lyqwmivz6AxApbY19WgYR6lY1PwH83bU14kkUGD21hav1enL1ZK4hisJcUn1JHTXt9sj1xhfNOlEp78Jp2oZoKq4Lt1eNt-cofOYjhtemxyhAuVvBvShMtrkYJhQ0-sf9_wJnSF-4ys0A7kgQn2BTGSvyVfHUn7DE9xzCNfl_wlzERf7HeE6nO8e-BrVOEdRPf2p5BeKB_Go2gRcz8g__oSF1jq1ATdMC3HMNwuUaAcLGCoOV",
    },
  ];

  return (
    <section className="bg-slate-100 px-8 py-15 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {cards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
