export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing innovative solutions for educational institutions,
            helping schools manage their operations efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Management</h3>
            <p className="text-gray-600">
              Manage all aspects of your school from student records to teacher assignments.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-600">✅</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Intuitive design that makes it easy for administrators, teachers, and students to use.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-purple-600">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
            <p className="text-gray-600">
              Built with modern technology for speed, security, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
