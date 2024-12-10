import Asgard from "@/components/asgard";
import Backgroundhero from "@/components/backgroundhero";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Ourblogs from "@/components/ourblogs";
import Pick from "@/components/pick";
import Subsection from "@/components/subsection";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Herosection />
   <Subsection />
   <Pick/> 
   <Asgard/> 
    <Ourblogs/> 
    <Backgroundhero/>
   
   
   </>
  );
}
