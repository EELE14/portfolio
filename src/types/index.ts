/* Copyright (c) 2026 eele14. All Rights Reserved. */

export type Theme = "light" | "dark";

export type DescriptionSegment = string | { text: string; href: string };

export interface Project {
  title: string;
  description: string | DescriptionSegment[];
  tags: string[];
  year: number;
  link?: string;
}
