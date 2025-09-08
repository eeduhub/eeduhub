import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Our mission is to make Bitcoin and crypto education easy and accessible for everyone, so you can learn with confidence and build a better financial future",
    },
    {
      icon: Users,
      title: "Getting Started",
      description:
        "Be among the first learners to begin this journey with us into the exciting world of digital currencies.",
    },
    {
      icon: Award,
      title: "Our Approach",
      description:
        "We bring practical insights and clear guidance, crafted by professionals with solid experience in finance, technology, and blockchain.",
    },
  ];

  const benefits = [
    "Learn anytime, anywhere",
    "Lifetime access to lessons",
    "Step-by-step guidance for beginners",
    "Understand Bitcoin & crypto in simple terms",
    "Start your financial journey with confidence",
    "doubts clearing chat 💬 support",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              eeduhub
            </span>
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about empowering individuals with the knowledge and
            skills needed to navigate the rapidly evolving world of digital
            currencies and blockchain technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-center text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
             We started this recorded class to make learning Bitcoin and crypto simple for everyone. Many people find it confusing, so we created easy lessons you can watch anytime, at your own pace. Our goal is to help you understand and use crypto with confidence, and take a step toward financial freedom
            </p>
          </div>
          <div className="bg-gradient-card rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6">
              Why join our Bitcoin & crypto recorded class?
            </h3>
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


      </div>
    </div>
  );
};

export default About;
