import OrgAdminLayout from "@/components/OrgAdminComponents/OrgAdminLayout";
import OrgAdminNavbar from "@/components/OrgAdminComponents/OrgAdminNavbar";
import PrdFlow from "@/components/OrgAdminComponents/Project/PrdFlow";
import TransactionFlow from "@/components/OrgAdminComponents/Project/TransactionFlow";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";

export default function OrgAdminProjects() {
  return (
    <OrgAdminLayout>
      <OrgAdminNavbar page="Projects" />
      <div className="my-8">
        <Tabs>
          <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between">
            <TabList className="lg:w-[70%] w-full">
              <Tab>OverView</Tab>
              <Tab>Project Requirement Document (PRD)</Tab>
              <Tab>Task List</Tab>
              <Tab>Transactions</Tab>
            </TabList>
            <div className="lg:w-[25%] w-full flex  lg:justify-end">
              <Select>
                <option value="Please Select a project">Select Project</option>
              </Select>
            </div>
          </div>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <PrdFlow />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <TransactionFlow />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </OrgAdminLayout>
  );
}
