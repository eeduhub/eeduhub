import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Clock, Star, BookOpen, Download } from "lucide-react";


const SampleClass = () => {
  const modules = [
    {
      title: "Introduction to Bitcoin",
      duration: "15 min",
      type: "1 video",
      completed: false,
    },
    {
      title: "Understanding Blockchain Technology",
      duration: "20 min",
      type: "4 video",
      completed: false,
    },
    {
      title: "Your First Crypto Wallet",
      duration: "12 min",
      type: "2 video",
      completed: false,
    },
    {
      title: "Security Best Practices",
      duration: "18 min",
      type: "3 video",
      completed: false,
    },
    {
      title: "Quiz: Cryptocurrency Basics",
      duration: "10 min",
      type: "quiz",
      completed: false,
    },
  ];

  const features = [
    "HD video lessons with subtitles",
    "Practical resources & easy-to-follow guides",
    "Doubt-clearing support from mentors",
    "Community discussion forums",
    "Mobile-friendly learning platform",
    "Progress tracking and certificates",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sample Class
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Get a taste of our comprehensive crypto education with this free
            sample lesson covering the fundamentals of digital currency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Section */}
            <Card className="mb-8 bg-gradient-card border-border">
              <CardContent className="p-0">
                <div className="relative h-64 md:h-96 bg-cover bg-center rounded-t-lg overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-t-lg"
                    src="https://www.youtube.com/embed/rYQgy8QDEBI?si=bJUpUCUWPjBu476P"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  {/* ✅ Overlay will not block clicks now */}
                  <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center pointer-events-none"></div>

                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    FREE
                  </Badge>
                </div>

                <div className="p-6">
                  <h2 className="text-sm md:text-xl font-bold mb-2">
                    Cryptocurrency Fundamentals: Your First Steps
                  </h2>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-4 mt-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                     <p className="text-sm">75 minutes</p>
                    </div>

                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <p className="text-sm">4.9</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Learn the basics of cryptocurrency, blockchain technology,
                    and how to safely store and manage your digital assets.
                    Perfect for complete beginners.
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
                      className="flex items-center justify-between p-2 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xs md:text-sm  font-medium">{module.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs md:text-sm ">{module.duration}</span>
                            <Badge variant="outline" className="text-[10px] md:text-xs">
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
      Unlock the complete cryptocurrency mastery course Best content.
    </p>
    <Button variant="secondary" className="w-full mb-2 ">
      <span className="text-sm line-through opacity-70">INR 36,000</span>
      <span className="text-lg font-bold">3,600 /-</span>
    </Button>
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
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
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
                  Our team is here to help you succeed in your crypto learning
                  journey.
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
