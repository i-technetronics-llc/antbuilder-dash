import AddProjectModal from "@/components/Utils/Modals/AddProjectModal";
import AddTeamMemberModal from "@/components/Utils/Modals/AddTeamMemberModal";
import { Image, useDisclosure } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TiFlashOutline } from "react-icons/ti";
export default function QuickActionsOrgAdm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isProjectOpen,
    onOpen: onProjectOpen,
    onClose: onProjectClose,
  } = useDisclosure();
  return (
    <div className="w-full h-full  border-[1px] border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <TiFlashOutline />
        <p className="text-sm font-semibold">UPCOMING DEADLINES</p>
      </div>
      <div className="flex flex-col gap-2 pt-3 w-full h-full">
        <button
          className="flex p-2 w-full rounded-full items-center gap-3 text-[#3B82F6] border-[#3B82F6] ease-in-out duration-700 border-[1px] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
          onClick={onProjectOpen}
        >
          <MdOutlineAddCircleOutline />
          <p>Add New Project</p>
        </button>
        <button
          className="flex  p-2 rounded-full w-full items-center gap-3 text-[#3B82F6] border-[#3B82F6] ease-in-out duration-700 border-[1px] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
          onClick={onOpen}
        >
          <MdOutlineAddCircleOutline />
          <p>Invite New User</p>
        </button>
      </div>
      <AddProjectModal isOpen={isProjectOpen} onClose={onProjectClose} />
      <AddTeamMemberModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
