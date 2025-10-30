import { motion } from 'framer-motion';
import { Smartphone, Code, Layout, Server, BarChart2, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms, built with the latest technologies and best practices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Development']
    },
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: 'Web Development',
      description: 'Responsive and scalable web applications using modern frameworks and technologies.',
      features: ['React.js', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: <Layout className="w-8 h-8 text-primary-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design']
    },
    {
      icon: <Server className="w-8 h-8 text-primary-600" />,
      title: 'Backend Development',
      description: 'Robust and scalable backend systems to power your applications.',
      features: ['API Development', 'Database Design', 'Cloud Services', 'DevOps']
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-primary-600" />,
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to grow your online presence.',
      features: ['SEO', 'Content Marketing', 'Social Media', 'PPC']
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'GDPR Compliance', 'Data Protection']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer a comprehensive range of digital services to help your business thrive in the digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss how we can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-300"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
