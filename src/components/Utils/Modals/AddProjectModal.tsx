import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddProjectModal({ isOpen, onClose }: any) {
  const [project, setProject] = useState<string>();
  const [role, setRole] = useState<string>();
  const [email, setEmail] = useState<string>();
  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#3B82F6"}>Add Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center w-full gap-3">
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Project
              </p>

              <Textarea
                className=""
                placeholder="Enter Project Description"
                name="email"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
            <button
              className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
              onClick={() => {
                onClose();
              }}
            >
              Back
            </button>
            <button
              className={`w-fit  ${
                project === ""
                  ? " bg-[#D0E1FF]"
                  : "bg-[#3B82F6] hover:bg-[#3B82F670]"
              } bg-[#D0E1FF] rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
              onClick={() => {
                // if (role != "") {
                //   setView("second");
                // }
              }}
            >
              {" "}
              Next
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
