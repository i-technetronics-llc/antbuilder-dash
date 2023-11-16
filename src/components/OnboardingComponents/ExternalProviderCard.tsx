import { Image } from "@chakra-ui/react";

type ProviderProps = {
  url: string;
  provider: string;
};
export default function ExternalProviderCard({ url, provider }: ProviderProps) {
  return (
    <button className="w-full flex py-1 items-center justify-center gap-2 rounded-lg border-[1px] border-[#D9D9D9]">
      <Image src={url} alt="logo light" w={5} h={10} />
      <p className="text-[#3B4350] font-semibold text-sm">
        Sign in with {provider}
      </p>
    </button>
  );
}
