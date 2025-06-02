import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Поехали! 🚀</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              О проекте
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Контакты
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                О проекте
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
