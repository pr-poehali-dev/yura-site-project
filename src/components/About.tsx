import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Создаём сайты в 10 раз быстрее традиционной разработки",
    },
    {
      icon: "Brain",
      title: "ИИ-помощник",
      description: "Умный ассистент Юра поможет воплотить любую идею в код",
    },
    {
      icon: "Palette",
      title: "Современный дизайн",
      description:
        "Трендовые решения, вдохновлённые лучшими мировыми практиками",
    },
    {
      icon: "Globe",
      title: "Готов к запуску",
      description: "Публикуем проект в интернет одним кликом",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Стабильная работа и высокая производительность",
    },
    {
      icon: "Users",
      title: "Поддержка",
      description: "Помогаем на каждом этапе создания проекта",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы объединили лучшие технологии и человеческую креативность для
            создания выдающихся веб-проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon} size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full px-8 py-4">
            <Icon name="Rocket" size={24} className="text-purple-600" />
            <span className="text-lg font-semibold text-gray-800">
              Более 1000 успешных проектов запущено
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
