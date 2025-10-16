function GetInvolved() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      involvement: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', involvement: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleDonate = () => {
      // Scroll to the donation form or open donation modal
      document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleVolunteer = () => {
      // Set involvement to volunteer and scroll to form
      setFormData({ ...formData, involvement: 'volunteer' });
      document.getElementById('involvement-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handlePartner = () => {
      // Set involvement to partner and scroll to form
      setFormData({ ...formData, involvement: 'partner' });
      document.getElementById('involvement-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const ways = [
      {
        icon: 'heart',
        title: 'Donate',
        description: 'Support our programs with a financial contribution that directly impacts youth development.',
        action: 'Make a Donation'
      },
      {
        icon: 'users',
        title: 'Volunteer',
        description: 'Share your skills and time to mentor youth and support our community programs.',
        action: 'Become a Volunteer'
      },
      {
        icon: 'handshake',
        title: 'Partner',
        description: 'Collaborate with us as a corporate partner to expand our reach and impact.',
        action: 'Explore Partnership'
      }
    ];

    return (
      <div className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" data-name="get-involved" data-file="components/GetInvolved.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get Involved
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our mission to empower youth and transform communities. 
              There are many ways you can make a meaningful difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ways.map((way, index) => (
              <div key={index} className="card dark:bg-gray-800 text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className={`icon-${way.icon} text-2xl text-purple-600`}></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{way.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">{way.description}</p>
                {way.title === 'Donate' ? (
                  <a 
                    href="https://ko-fi.com/suprisethobejane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full mt-auto inline-flex items-center justify-center"
                  >
                    {way.action}
                  </a>
                ) : (
                  <button 
                    className="btn-secondary w-full mt-auto"
                    onClick={
                      way.title === 'Volunteer' ? handleVolunteer :
                      way.title === 'Partner' ? handlePartner : undefined
                    }
                  >
                    {way.action}
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Ready to Join Us?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Fill out the form to get started. We'll reach out to discuss how you can 
                  best contribute to our mission of empowering youth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="icon-mail text-purple-600 mr-3"></div>
                    <a href="mailto:pmasemolafoundation@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">pmasemolafoundation@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <div className="icon-phone text-purple-600 mr-3"></div>
                    <a href="tel:+27662950540" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+27 66 295 0540</a>
                  </div>
                  <div className="flex items-center">
                    <div className="icon-map-pin text-purple-600 mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Ext 15, Mamelodi East<br />Pretoria, 0122<br />South Africa</span>
                  </div>
                </div>
              </div>
              
              <form id="involvement-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How would you like to get involved? *
                  </label>
                  <select
                    name="involvement"
                    value={formData.involvement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate" disabled>Make a Donation (Use button above)</option>
                    <option value="partner">Corporate Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Tell us more about your interest..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('GetInvolved component error:', error);
    return null;
  }
}
