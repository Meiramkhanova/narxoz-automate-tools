import Logo from "@/shared/icons/Logo";
import Image from "next/image";

function Header() {
  return (
    <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Проекты
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              О Нас
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
