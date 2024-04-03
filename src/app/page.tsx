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
   <div className="py-16 px-10">
    <ParagraphComponent/>
   </div>
  </main>
  );
}
