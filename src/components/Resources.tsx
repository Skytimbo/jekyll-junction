
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, FileText, Code, BookOpen, FileJson } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const ResourceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => (
  <AnimatedWrapper delay={delay} animation="fade-up">
    <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="mb-2 w-12 h-12 rounded-lg bg-homer/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-homer" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  </AnimatedWrapper>
);

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "AI Guides",
      description: "Curated learning resources for beginners and advanced users on various AI platforms.",
      delay: 100
    },
    {
      icon: Code,
      title: "Code Snippets",
      description: "Alaskan-themed examples and snippets for common AI implementation patterns.",
      delay: 200
    },
    {
      icon: FileText,
      title: "Research Papers",
      description: "Latest research on AI applications relevant to Alaska's unique context and needs.",
      delay: 300
    },
    {
      icon: FileJson,
      title: "Datasets",
      description: "Specialized datasets related to Alaska's environment, wildlife, and communities.",
      delay: 400
    },
    {
      icon: FolderKanban,
      title: "Project Templates",
      description: "Ready-to-use project templates for AI applications with Alaskan contexts.",
      delay: 500
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <AnimatedWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">AI Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated AI tools and resources with an Alaskan perspective, designed to help you navigate the world of artificial intelligence.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              delay={resource.delay}
            />
          ))}
        </div>
        
        <AnimatedWrapper delay={600}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All resources are tailored for our Homer, Alaska community and regularly updated.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-homer/10 text-homer">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm">Updated weekly</span>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Resources;
