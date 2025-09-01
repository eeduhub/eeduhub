import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const [watchedVideos, setWatchedVideos] = useState<number[]>([0, 2, 5]); // Sample watched videos
  
  const videos = [
    { id: 1, title: "Introduction to Cryptocurrency", description: "Learn the basics of digital currencies and blockchain technology", duration: "12:45", embedId: "dQw4w9WgXcQ" },
    { id: 2, title: "Bitcoin Fundamentals", description: "Understanding Bitcoin's core principles and how it works", duration: "15:30", embedId: "dQw4w9WgXcQ" },
    { id: 3, title: "Ethereum and Smart Contracts", description: "Explore Ethereum's ecosystem and smart contract functionality", duration: "18:20", embedId: "dQw4w9WgXcQ" },
    { id: 4, title: "Blockchain Technology Deep Dive", description: "Technical aspects of blockchain and distributed ledger systems", duration: "22:15", embedId: "dQw4w9WgXcQ" },
    { id: 5, title: "Cryptocurrency Trading Basics", description: "Introduction to trading strategies and market analysis", duration: "16:40", embedId: "dQw4w9WgXcQ" },
    { id: 6, title: "DeFi Explained", description: "Decentralized Finance protocols and applications", duration: "14:25", embedId: "dQw4w9WgXcQ" },
    { id: 7, title: "NFTs and Digital Assets", description: "Non-Fungible Tokens and their use cases", duration: "13:55", embedId: "dQw4w9WgXcQ" },
    { id: 8, title: "Crypto Security Best Practices", description: "How to keep your digital assets safe and secure", duration: "19:10", embedId: "dQw4w9WgXcQ" },
    { id: 9, title: "Mining and Consensus Mechanisms", description: "Understanding how blockchain networks reach consensus", duration: "17:35", embedId: "dQw4w9WgXcQ" },
    { id: 10, title: "Regulatory Landscape", description: "Current regulations and compliance in cryptocurrency", duration: "20:45", embedId: "dQw4w9WgXcQ" },
    { id: 11, title: "Staking and Yield Farming", description: "Earning passive income with your crypto holdings", duration: "15:20", embedId: "dQw4w9WgXcQ" },
    { id: 12, title: "Layer 2 Solutions", description: "Scaling solutions for blockchain networks", duration: "16:15", embedId: "dQw4w9WgXcQ" },
    { id: 13, title: "Crypto Wallets Guide", description: "Types of wallets and how to choose the right one", duration: "12:30", embedId: "dQw4w9WgXcQ" },
    { id: 14, title: "Market Analysis Techniques", description: "Technical and fundamental analysis for crypto markets", duration: "21:40", embedId: "dQw4w9WgXcQ" },
    { id: 15, title: "Future of Cryptocurrency", description: "Trends and predictions for the crypto industry", duration: "18:55", embedId: "dQw4w9WgXcQ" }
  ];

  const progressPercentage = (watchedVideos.length / videos.length) * 100;

  const handleVideoClick = (videoId: number) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos(prev => [...prev, videoId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Crypto Learning Dashboard
          </h1>
          <p className="text-muted-foreground mb-4">
            Complete all 15 lessons to master cryptocurrency fundamentals
          </p>
          
          {/* Progress Bar */}
          <div className="bg-card rounded-lg p-6 shadow-elegant border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Course Progress</span>
              <span className="text-sm text-muted-foreground">
                {watchedVideos.length}/{videos.length} lessons completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round(progressPercentage)}% complete
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const isWatched = watchedVideos.includes(video.id - 1);
            
            return (
              <Card 
                key={video.id} 
                className={`shadow-elegant border-border/50 transition-all duration-200 hover:shadow-xl cursor-pointer ${
                  isWatched ? 'ring-1 ring-primary/20' : ''
                }`}
                onClick={() => handleVideoClick(video.id - 1)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    {isWatched && (
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                    )}
                  </div>
                  <CardDescription className="text-sm">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* YouTube Embed */}
                  <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Video Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{video.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {isWatched ? (
                        <Badge variant="secondary" className="text-xs">
                          Completed
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          <Play className="h-3 w-3 mr-1" />
                          Watch
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;