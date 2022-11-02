export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string; // url for redirect to project website or video or related URL like github or else
  roles: string[];
  type: string;
  img?: string; // URL
}