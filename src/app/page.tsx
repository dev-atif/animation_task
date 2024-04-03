import AnimateButton from "@/components/AnimateButton";
import ParagraphComponent from "@/components/ParagraphComponent";
import Gridsecction from "@/components/Section 1/Gridsecction";
import Themetoggle from "@/components/Themetoggle";
import Image from "next/image";

export default function Home() {
  return (
  <main>
   <div>
    <Gridsecction/>
   </div>
   <div className="py-24 px-10 bg-gradient-to-b from-75%   from-[#251a53]  to-[#3a2787]">
    <ParagraphComponent/>
   </div>
   <div className="py-24 px-10 bg-gradient-to-t from-75%   from-[#251a53]  to-[#3a2787]">
    <AnimateButton/>
   </div>
  </main>
  );
}
