import { feature, singlefeature } from "@/models/org_Admin.models";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LuArrowLeftCircle } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VscEllipsis } from "react-icons/vsc";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { features } from "process";
type ModuleDetailsProps = {
  setEstimation: Dispatch<SetStateAction<boolean>>;
  features: singlefeature[];
  //   selectedFeature: feature;
};
export default function ModuleEstimation({
  setEstimation,
  features,
}: //   selectedFeature,
ModuleDetailsProps) {
  const [selectedFeature, setSelectedFeature] = useState<feature>();

  useEffect(() => {
    const selected =
      typeof window != undefined
        ? JSON.parse(localStorage.getItem("selectedFeature") as string)
        : null;
    console.log(selected, "selected");
    setSelectedFeature(selected);
  }, []);

  return (
    <div className="">
      <div className="my-5 flex items-center justify-between  ">
        <div
          className="flex items-center cursor-pointer gap-3"
          onClick={() => {
            setEstimation(false);
          }}
        >
          <LuArrowLeftCircle />
          <p className="text-xl font-semibold text-[#0A2656]">
            {" "}
            {selectedFeature?.name} Estimation
          </p>
        </div>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontWeight={600}>S/N</Th>
              <Th fontWeight={600}>Features</Th>
              <Th fontWeight={600}>PM</Th>
              <Th fontWeight={600}>Design</Th>
              <Th fontWeight={600}>Design-PM Support</Th>
              <Th fontWeight={600}>Backend</Th>
              <Th fontWeight={600}>Frontend</Th>
              <Th fontWeight={600}>QA</Th>
              <Th fontWeight={600}>Total</Th>
              <Th fontWeight={600}>Notes</Th>
              <Th fontWeight={600}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {features.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.name}</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td> </Td>
                <Td>
                  <VscEllipsis />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
