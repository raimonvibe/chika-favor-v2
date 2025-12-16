import { PortfolioProject } from "@/data/portfolioData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, User, Wrench, Package } from "lucide-react";

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline">
              {project.category}
            </Badge>
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain max-h-[60vh]"
          />
        </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              Project Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <Separator />

          {/* Project Specifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Details</h3>
              
              <div className="space-y-3">
                {project.specs.client && (
                  <div className="flex items-start gap-3">
                    <User className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Client</p>
                      <p className="text-sm text-gray-600">{project.specs.client}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Timeline</p>
                    <p className="text-sm text-gray-600">{project.specs.timeline}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Wrench className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Tools Used</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.specs.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Deliverables</h3>
              
              <div className="space-y-2">
                {project.specs.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <p className="text-sm text-gray-600">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Tags */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default ProjectModal;
