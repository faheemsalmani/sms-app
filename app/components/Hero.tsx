export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to School Management System
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your school's operations with our comprehensive management platform.
            Manage students, teachers, and administrative tasks all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-6 rounded-lg text-lg border-2 border-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}