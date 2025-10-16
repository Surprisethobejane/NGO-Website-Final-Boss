function Programs() {
  try {
    const programs = [
      {
        icon: 'graduation-cap',
        title: 'Education Support',
        description: 'Comprehensive educational empowerment including menstrual education, sanitary products, and academic resources.',
        features: [
          'Menstrual education programs',
          'Sanitary pad distribution',
          'Educational material support',
          'School engagement initiatives'
        ],
        image: 'img/Educational Support.jpg'
      },
      {
        icon: 'users',
        title: 'Youth Leadership',
        description: 'Building confident young leaders who can drive positive change in Mamelodi East communities.',
        features: [
          'Youth empowerment workshops',
          'Community leadership programs',
          'Young lady ownership model',
          'Community project development'
        ],
        image: 'img/Youth Leadership.jpg'
      },
      {
        icon: 'briefcase',
        title: 'Community Engagement',
        description: 'Fostering sustainable community solutions and creating opportunities for breaking poverty cycles.',
        features: [
          'Community needs assessment',
          'Sustainable solution development',
          'Poverty cycle intervention',
          'Local partnership facilitation'
        ],
        image: 'img 2/Community Engagement.jpg'
      }
    ];

    return (
      <div className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300" data-name="programs" data-file="components/Programs.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Programs
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how we're making a difference through our comprehensive programs 
              designed to empower youth and strengthen Mamelodi East communities.
            </p>
          </div>
          
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <div className={`icon-${program.icon} text-xl text-purple-600`}></div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{program.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-4">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="icon-check text-green-600 mr-3"></div>
                        <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className={`w-full h-80 object-cover rounded-2xl shadow-lg ${program.title === 'Community Engagement' ? '' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in empowering the next generation of leaders in Mamelodi East. 
                Your support can transform lives and strengthen our community.
              </p>
              <button className="btn-primary">
                Get Involved Today
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Programs component error:', error);
    return null;
  }
}