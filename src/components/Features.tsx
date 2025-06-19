
import { Bot, Zap, Shield, BarChart3, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent AI Agents",
      description: "Custom-built AI agents that understand your business processes and execute tasks with precision."
    },
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Reduce manual work by 85% with AI-powered workflows that run instantly and continuously."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to keep your data safe and compliant."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and performance metrics to optimize your automated processes."
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Your AI agents work around the clock, ensuring continuous productivity even when you sleep."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly integrate with your existing tools and enable team-wide automation adoption."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate your workflows and scale your operations with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
