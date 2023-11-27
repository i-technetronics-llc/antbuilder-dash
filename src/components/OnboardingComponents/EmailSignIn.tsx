import { Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type signInProps = {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};
export default function EmailSignIn({
  email,
  password,
  setEmail,
  setPassword,
}: signInProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Email Address</p>

        <Input
          type="text"
          size={"lg"}
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Password</p>

        <div className="w-full flex items-center gap-2 border-[1px] px-2 bg-[#F8F8F8] border-[#cccccc] rounded-lg">
          <Input
            type={showPassword ? "text" : "password"}
            className="bg-[#F8F8F8]"
            size={"lg"}
            value={password}
            border={"none"}
            bg={"transparent"}
            focusBorderColor="transparent"
            outline={"none"}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showPassword ? (
            <FaEye
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEyeSlash
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
