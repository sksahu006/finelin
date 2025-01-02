export interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  director?: string;
  producers?: string[];
  productionCompanies?: string[];
  description?: string;
  releaseDate?: string;
  vfxSupervisor?: string;
  vfxProducers?: string[];
  status?: 'Released' | 'In Production' | 'Post-Production';
}