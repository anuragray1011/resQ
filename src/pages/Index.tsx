import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Waves, Users, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
             <img
          src="ResQ.png"
          alt="ResQ Logo"
          className="h-14 w-auto object-contain"
          />
          </div>
          <nav className="hidden md:flex gap-6 text-gray-600">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            Launch Dashboard
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 bg-gradient-to-b from-white to-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
        >
          Unified Coastal Emergency <span className="text-blue-600">Response</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          ResQ combines citizen reporting, AI-powered social media analysis, and real-time data visualization
          to help emergency response agencies make faster, informed decisions during ocean disasters.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Enter Command Center →
          </Link>
          <button className="px-6 py-3 bg-white border rounded-xl shadow hover:shadow-md transition text-gray-700">
            Join as Citizen Reporter
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Complete Emergency Response Ecosystem
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Leveraging cutting-edge technology to create a comprehensive coastal hazard monitoring system
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Real-time Hazard Mapping */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <Waves className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Real-time Hazard Mapping</h3>
            <p className="text-gray-600 mt-2">
              Interactive maps showing live coastal threats with satellite and citizen data.
            </p>
          </motion.div>

          {/* Citizen Reporting */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Citizen Reporting Network</h3>
            <p className="text-gray-600 mt-2">
              Crowdsourced hazard reports with media uploads for faster situational awareness.
            </p>
          </motion.div>

          {/* AI Analysis */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <Brain className="w-10 h-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Analysis</h3>
            <p className="text-gray-600 mt-2">
              Natural language processing to detect hazard signals from social media and field reports.
            </p>
          </motion.div>

          {/* Multilingual Support */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <span className="text-purple-600 text-3xl">🌍</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">Multilingual Support</h3>
            <p className="text-gray-600 mt-2">
              Seamless translation of alerts and reports to support diverse coastal communities.
            </p>
          </motion.div>

          {/* Verification System */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <span className="text-red-600 text-3xl">✅</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">Verification System</h3>
            <p className="text-gray-600 mt-2">
              AI and human-in-the-loop checks ensure authenticity and accuracy of reports.
            </p>
          </motion.div>

          {/* Early Warning Integration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <span className="text-yellow-500 text-3xl">⚡</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">Early Warning Integration</h3>
            <p className="text-gray-600 mt-2">
              Real-time integration with government early warning systems for rapid alerts.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
