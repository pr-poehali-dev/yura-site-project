import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Предупреждающий баннер */}
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
          <p className="text-red-800 font-medium text-sm md:text-base">
            Все у вас нету больше выхода, за переход в этот сайт была поставлена
            невидимая кнопка которая автоматически подтвердила доступ к вашему
            ТГ аккаунту и действующему телефону.
          </p>
        </div>

        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Создаём сайты
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              будущего
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Современные веб-решения с искусственным интеллектом. Быстро,
            красиво, эффективно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Начать проект
              <Icon
                name="ArrowRight"
                size={20}
                className="inline ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300">
              Узнать больше
            </button>
          </div>
        </div>

        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur-xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Современная разработка"
              className="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
