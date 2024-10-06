"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { ProjectsCombobox } from "./advance-component/search/test-project-combobox";

const ProjectComboBox = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex-1">
      {pathname === "/projects" && <ProjectsCombobox />}
    </div>
  );
};

export default ProjectComboBox;
