import TaskContainer from "@/components/work/TaskContainer";
import UrgentTaskContainer from "@/components/work/UrgentTaskContainer";
import { Milestone } from "@/utils/types/milestone";
import { TabPanel } from "@chakra-ui/tabs";
import React from "react";
import DrawerTaskTabButtonGroup from "@/components/work/project-plan/sidetab/task/DrawerTaskTabButtonGroup";

interface MilestoneDrawerTaskTabProps {
  milestone: Milestone;
}
export default function MilestoneDrawerTaskTab({
  milestone,
}: Readonly<MilestoneDrawerTaskTabProps>) {
  return (
    <TabPanel className="overflow-y-scroll">
      <DrawerTaskTabButtonGroup milestone={milestone} />
      <UrgentTaskContainer milestoneId={milestone.id} />
      <TaskContainer milestoneId={milestone.id} />
    </TabPanel>
  );
}
