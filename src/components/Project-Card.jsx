import { Globe, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import projects from "@/data/projects";


export default function ProjectCards() {
  return (
    <div className="flex gap-6 justify-center px-6 pt-20 flex-wrap">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="bg-black text-white border-zinc-800 w-96 flex-shrink-0 flex flex-col ">
          <CardHeader className="p-0">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4 flex-grow">
            <div>
              <h2 className="text-2xl font-bold">{project.name}</h2>
            </div>
            <p className="text-zinc-300 h-16">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="destructive"
                  className="px-4 py-2 text-center text-white bg-[#121212] border border-gray-500 rounded-lg shadow-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 gap-3">
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-zinc-800 text-black hover:bg-zinc-800 hover:text-primary">
                <Globe className="mr-2 h-4 w-4" />
                Website
              </Button>
            </a>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-zinc-800 text-black hover:bg-zinc-800 hover:text-primary">
                <Github className="mr-2 h-4 w-4" />
                Source
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
