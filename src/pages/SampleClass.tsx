import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Clock, Users, Star, BookOpen, Download } from "lucide-react";
import sampleLessonImage from "@/assets/sample-lesson.jpg";

const SampleClass = () => {
  const modules = [
    {
      title: "Introduction to Bitcoin",
      duration: "15 min",
      type: "video",
      completed: false
    },
    {
      title: "Understanding Blockchain Technology",
      duration: "20 min", 
      type: "video",
      completed: false
    },
    {
      title: "Your First Crypto Wallet",
      duration: "12 min",
      type: "hands-on",
      completed: false
    },
    {
      title: "Security Best Practices",
      duration: "18 min",
      type: "video",
      completed: false
    },
    {
      title: "Quiz: Cryptocurrency Basics",
      duration: "10 min",
      type: "quiz",
      completed: false
    }
  ];

  const features = [
    "HD video lessons with subtitles",
    "Downloadable resources and guides",
    "Interactive quizzes and assignments", 
    "Community discussion forums",
    "Mobile-friendly learning platform",
    "Progress tracking and certificates"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Sample Class</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a taste of our comprehensive crypto education with this free sample lesson 
            covering the fundamentals of digital currency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Section */}
            <Card className="mb-8 bg-gradient-card border-border">
              <CardContent className="p-0">
                <div 
                  className="relative h-64 md:h-96 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${sampleLessonImage})` }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center">
                    <Button size="lg" className="bg-primary/90 hover:bg-primary shadow-glow">
                      <Play className="mr-2 h-6 w-6" />
                      Play Sample Lesson
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    FREE
                  </Badge>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Cryptocurrency Fundamentals: Your First Steps
                  </h2>
                  <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      75 minutes
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      12,847 students
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      4.9 (2,341 reviews)
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Learn the basics of cryptocurrency, blockchain technology, and how to safely 
                    store and manage your digital assets. Perfect for complete beginners.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modules */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{module.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{module.duration}</span>
                            <Badge variant="outline" className="text-xs">
                              {module.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready for More?</h3>
                <p className="mb-4 opacity-90">
                  Unlock the complete cryptocurrency mastery course with 20+ hours of content.
                </p>
                <Button variant="secondary" className="w-full mb-2">
                  Enroll Now - $99
                </Button>
                <p className="text-sm opacity-75">30-day money-back guarantee</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Download className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Have Questions?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our team is here to help you succeed in your crypto learning journey.
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleClass;