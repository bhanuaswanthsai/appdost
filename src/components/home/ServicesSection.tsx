import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, Zap, Database, Server, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android built with the latest technologies to ensure high performance and user engagement.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Web Development',
    description: 'Responsive and scalable web applications using modern frameworks like React, Next.js, and Node.js.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Layout className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Database Solutions',
    description: 'Robust database architecture and management for your applications to ensure data integrity and performance.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions to host, manage, and optimize your applications on leading cloud platforms.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Analytics & SEO',
    description: 'Data-driven insights and search engine optimization to grow your online presence and user base.',
    color: 'from-indigo-500 to-purple-500'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a wide range of services to help your business thrive in the digital world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="relative z-10">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
