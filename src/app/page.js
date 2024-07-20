import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
          src="/background/forest-home.png"
          layout="fill"
          className="w-full h-full object-cover object-center opacity-25"
          alt="background-img"
        />

        <div className="w-full h-screen"> 
          <Navigation/>
          <RenderModel>
            <Wizard></Wizard>
          </RenderModel>
        </div>
    </main>
  );
}
