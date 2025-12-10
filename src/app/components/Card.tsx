import { ArrowRight, Rocket } from "lucide-react";

function Card() {
  return (
    <div className="p-8 bg-card border-border/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-300"></div>
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
          <Rocket className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-card-foreground">
          Проект автоматизации
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Первый активный проект для автоматизации процессов университета.
          Нажмите для перехода.
        </p>
        <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group/btn">
          Перейти к проекту
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default Card;
