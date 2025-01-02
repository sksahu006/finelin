import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectDetailClient from '@/components/project-detail/ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find(p => p.id === params.id);
  
  return {
    title: project ? `${project.title} - Finelin` : 'Project - Finelin',
    description: project?.description || 'Finelin VFX & Animation Project',
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDetailClient id={params.id} />;
}