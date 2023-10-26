"use client";

import CreateProjectButton from "@/components/work/CreateProjectButton";
import DeleteProjectButton from "@/components/work/DeleteProjectButton";
import UpdateProjectForm from "@/components/work/UpdateProjectForm";
import { projectState } from "@/utils/recoil/store";
import React from "react";
import ProjectSelect from "@/components/work/ProjectSelect";
import { useRecoilValue } from "recoil";

interface WorkPageHeaderProps {}
export default function WorkPageHeader({}: WorkPageHeaderProps) {
  const project = useRecoilValue(projectState);

  return (
    <div className="flex-shirnk-0 flex flex-col gap-8px px-24px pb-32px pt-16px">
      <div className="flex-between">
        <div className="flex items-center gap-16px">
          <h1 className="text-28px font-bold">My Work</h1>
          <ProjectSelect />
        </div>
        <div className="flex-center gap-8px">
          <CreateProjectButton />
          <DeleteProjectButton />
        </div>
      </div>
      <div className="flex max-w-[360px] items-center gap-8px">
        <p className="truncate-1-lines text-14px text-gray-600">
          {project?.description || "프로젝트에 대한 간단한 설명입니다."}
        </p>
        <UpdateProjectForm />
      </div>
    </div>
  );
}
