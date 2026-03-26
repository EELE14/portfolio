/* Copyright (c) 2026 eele14. All Rights Reserved. */
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "../sections";

export default function ContentPanel() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
