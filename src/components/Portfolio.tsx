import { useState } from "react";
import { portfolioProjects, categories, PortfolioProject } from "@/data/portfolioData";
import PortfolioCard from "./PortfolioCard";
import ProjectModal from "./ProjectModal";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
<section id="portfolio" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my latest design work showcasing creativity, strategy, and visual excellence.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}

      {/* See More Button + Caption */}
      <div className="flex flex-col items-center mt-12 space-y-2">
        <Button
          size="lg"
          className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-sky-600 transition-all duration-300 animate-bounce"
          onClick={() => window.open("/projects.pdf", "_blank")}
        >
          🚀 See More Projects
        </Button>
        <p className="text-gray-500 text-sm">View my full catalog of projects in PDF</p>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;


