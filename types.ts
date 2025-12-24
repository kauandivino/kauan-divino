import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repoLink?: string; // Optional link for GitHub repo
  image: string;     // New image field
}

export interface Publication {
  id: number;
  category: string; // Nova categoria (Ex: Artigo, Congresso, etc)
  title: string;
  authors: string;
  year: number;
  venue: string; // Renomeado de conference para venue para ser mais genérico
  description?: string;
  link?: string; // Renomeado de doiLink
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface NavItem {
  label: string;
  href: string;
}