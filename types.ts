import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceAreaProps {
  areas: string[];
}