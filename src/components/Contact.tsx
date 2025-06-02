import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Готовы начать?
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Расскажите о своей идее, и мы поможем воплотить её в жизнь. Первая
          консультация бесплатно!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
              <Icon name="MessageCircle" size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Telegram
            </h3>
            <p className="text-gray-600">@poehali_chat</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
              <Icon name="Mail" size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@poehali.dev</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
              <Icon name="Clock" size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Время ответа
            </h3>
            <p className="text-gray-600">В течение часа</p>
          </div>
        </div>

        <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
          Связаться с нами
          <Icon
            name="Send"
            size={24}
            className="inline ml-3 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  );
};

export default Contact;
