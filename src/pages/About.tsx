import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize crypto education and make blockchain technology accessible to everyone, regardless of their technical background."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Join over 50,000 students worldwide who have already started their journey into the exciting world of digital currencies."
    },
    {
      icon: Award,
      title: "Our Expertise",
      description: "Learn from industry professionals with combined experience of over 100 years in finance, technology, and blockchain."
    }
  ];

  const benefits = [
    "Comprehensive curriculum covering all aspects of cryptocurrency",
    "Hands-on projects with real-world applications",
    "24/7 community support and mentorship",
    "Industry-recognized certificates upon completion",
    "Regular updates on market trends and regulations",
    "Practical trading strategies and risk management"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">CryptoCampus</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about empowering individuals with the knowledge and skills needed 
            to navigate the rapidly evolving world of digital currencies and blockchain technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2021 by a team of blockchain experts and educators, CryptoCampus was born 
              from the need to bridge the gap between complex cryptocurrency concepts and practical, 
              accessible learning.
            </p>
            <p className="text-muted-foreground mb-4">
              We recognized that while digital currencies were gaining mainstream adoption, there was 
              a lack of comprehensive, beginner-friendly educational resources. Our platform was designed 
              to change that, providing structured learning paths for everyone from complete beginners 
              to advanced traders.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to be one of the leading crypto education platforms, helping students 
              worldwide understand, invest in, and leverage the power of digital currencies responsibly.
            </p>
          </div>
          <div className="bg-gradient-card rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">What You'll Learn</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Hours of Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;