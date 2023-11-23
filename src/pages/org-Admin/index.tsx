import ProjectDeadlineDashboard from "@/components/OrgAdminComponents/Dashboard/DeadlinesDashboard";
import ProjectCard from "@/components/OrgAdminComponents/Dashboard/ProjectCard";
import ProjectCountDashboard from "@/components/OrgAdminComponents/Dashboard/ProjectCountDashbord";
import ProjectStatusDashboard from "@/components/OrgAdminComponents/Dashboard/ProjectStatus";
import QuickActionsOrgAdm from "@/components/OrgAdminComponents/Dashboard/QuickActionsOrgAd";
import OrgAdminLayout from "@/components/OrgAdminComponents/OrgAdminLayout";
import OrgAdminNavbar from "@/components/OrgAdminComponents/OrgAdminNavbar";

export default function OrgAdminDashboard() {
  return (
    <OrgAdminLayout>
      <OrgAdminNavbar page="Dashbord" />
      <div className="grid md:grid-cols-3  lg:grid-cols-4  my-8 gap-3">
        <ProjectCountDashboard />
        <ProjectStatusDashboard />
        <ProjectDeadlineDashboard />
        <QuickActionsOrgAdm />
      </div>
      <div className="w-full border-b-[2px] border-[#cccccc70]"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </OrgAdminLayout>
  );
}
