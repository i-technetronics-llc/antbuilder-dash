import { Progress } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import ProjectStageCard from "./ProjectStageCard";
import TaskCompletionRateCard from "./TaskCompletionRateCard";
import ProjectCard from "../Dashboard/ProjectCard";
import ProjectBudgetCard from "./ProjectBudgetCard";
import ProjectTimelineCard from "./ProjectTimeline";
import QuickActionsAccExec from "../Dashboard/QuickActionsAccountExec";
import ActivityFeedCard from "./ActivityFeed";
import ProjectStatusDashboard from "../Dashboard/ProjectStatus";

export default function OverviewFlow() {
  return (
    <div className="">
      <div className="w-full flex lg:flex-row gap-3 flex-col items-start ">
        <div className="h-full w-full lg:w-[60%] flex flex-col gap-5">
          <div className="w-full h-[150px] flex items-center gap-5">
            <ProjectStageCard />
            <TaskCompletionRateCard />
          </div>
          <div className="w-full h-[150px] flex items-center gap-5">
            <ProjectTimelineCard />
            <ProjectBudgetCard />
            <QuickActionsAccExec />
          </div>
        </div>
        <div className="lg:w-[40%] h-[320px] flex-1">
          <ProjectCard />
        </div>
      </div>
      <div className="my-5 flex lg:flex-row gap-5 flex-col">
        <div className="lg:w-[60%] w-full">
          <ActivityFeedCard />
        </div>
        <div className="lg:w-[40%] w-full">
          <ProjectStatusDashboard />
        </div>
      </div>
    </div>
  );
}
