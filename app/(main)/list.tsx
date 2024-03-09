import { Code, Eye } from "lucide-react";
import Image from "next/image";

export const List = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 pt-16">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 z-10">
              <Image src="/sketch.svg" height={18} width={18} alt="Sketch" />
            </div>
            <Image alt="Image" fill src="/image.svg" className="object-cover rounded-[15px]" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src="/user.svg"
                height={38}
                width={38}
                alt="User"
              />
              <p className="text-xs">by <strong className="font-bold">Johanna Doe</strong></p>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="h-4 w-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="h-4 w-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 z-10">
              <Image src="/sketch.svg" height={18} width={18} alt="Sketch" />
            </div>
            <Image alt="Image" fill src="/image4.png" className="object-cover rounded-[15px]" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src="/user.svg"
                height={38}
                width={38}
                alt="User"
              />
              <p className="text-xs">by <strong className="font-bold">Johanna Doe</strong></p>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="h-4 w-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="h-4 w-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 z-10">
              <Image src="/sketch.svg" height={18} width={18} alt="Sketch" />
            </div>
            <Image alt="Image" fill src="/image3.png" className="object-cover rounded-[15px]" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src="/user.svg"
                height={38}
                width={38}
                alt="User"
              />
              <p className="text-xs">by <strong className="font-bold">Johanna Doe</strong></p>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="h-4 w-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="h-4 w-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
