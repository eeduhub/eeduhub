import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient.js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, CheckCircle } from "lucide-react";

// Function to extract YouTube ID from any type of YouTube link
const getYoutubeId = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Dashboard = () => {
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("videos")
        .select("id, youtube_link, title, description, created_at");

      if (error) {
        console.error("Error fetching videos:", error.message);
      } else {
        setVideos(data || []);
      }
      setLoading(false);
    };

    fetchVideos();
  }, []);

  const progressPercentage =
    videos.length > 0 ? (watchedVideos.length / videos.length) * 100 : 0;

  const handleVideoClick = (videoId: string) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos((prev) => [...prev, videoId]);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading videos...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Crypto Learning Dashboard
          </h1>
          <p className="text-muted-foreground mb-4">
            Complete all lessons to master cryptocurrency fundamentals
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
            const isWatched = watchedVideos.includes(video.id);
            const videoId = getYoutubeId(video.youtube_link);

            return (
              <Card
                key={video.id}
                className={`shadow-elegant border-border/50 transition-all duration-200 hover:shadow-xl cursor-pointer ${
                  isWatched ? "ring-1 ring-primary/20" : ""
                }`}
                onClick={() => handleVideoClick(video.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">
                      {video.title}
                    </CardTitle>
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
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p className="text-center text-sm text-red-500 mt-16">
                        Invalid YouTube link
                      </p>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(video.created_at).toLocaleDateString()}
                      </span>
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
