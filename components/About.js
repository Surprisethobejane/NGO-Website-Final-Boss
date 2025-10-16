function About() {
  try {
    const values = [
      {
        icon: 'heart',
        title: 'Compassion',
        description: 'We serve with empathy, prioritizing dignity and care in every initiative.'
      },
      {
        icon: 'star',
        title: 'Excellence',
        description: 'We commit to delivering meaningful impact with dedication and purpose.'
      },
      {
        icon: 'users',
        title: 'Community',
        description: 'We grow stronger together by uplifting and collaborating with others.'
      },
      {
        icon: 'zap',
        title: 'Innovation',
        description: 'We explore fresh ideas to uplift youth and expand our outreach.'
      }
    ];

    return (
      <div className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" data-name="about" data-file="components/About.js">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Born from a deep need to uplift young people in underserved areas, the P. Masemola 
                Foundation is rooted in a passion for growth, dignity, and opportunity.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Inspired by the legacy of a leader devoted to community empowerment, our foundation 
                carries that mission forward - focused on education, leadership, and local impact.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we work closely with schools and youth in Mamelodi East and beyond, offering 
                practical support and programs that open doors and spark long-term change.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="img/Our Story.jpg" 
                alt="Our Story - P. Masemola Foundation" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 mb-16 transition-colors duration-300">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                To inspire and support youth in rural and township communities by focusing on 
                access to education, life skills, and leadership growth that sparks sustainable progress.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className={`icon-${value.icon} text-2xl text-purple-600`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
