function ProgramsOverview() {
  try {
    const programs = [
      {
        icon: 'graduation-cap',
        title: 'Education',
        description: 'Providing quality educational resources and support to help youth excel academically and unlock their potential.',
        color: 'bg-purple-100 text-purple-600'
      },
      {
        icon: 'users',
        title: 'Leadership',
        description: 'Developing strong leaders who can drive positive change in their communities and beyond.',
        color: 'bg-purple-100 text-purple-600'
      },
      {
        icon: 'briefcase',
        title: 'Entrepreneurship',
        description: 'Fostering entrepreneurial skills and mindset to create economic opportunities and sustainable livelihoods.',
        color: 'bg-purple-100 text-purple-600'
      }
    ];

    return (
      <section className="section-padding bg-white" data-name="programs-overview" data-file="components/ProgramsOverview.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Three Pillars of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in a holistic approach to youth development, focusing on three key areas 
              that create lasting change in communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-6`}>
                  <div className={`icon-${program.icon} text-2xl`}></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 break-words">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              Explore All Programs
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProgramsOverview component error:', error);
    return null;
  }
}