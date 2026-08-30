import type { Metadata } from "next";
import { CreatorLanding } from "@/components/CreatorLanding";
import { beauty } from "@/data/beauty";
export const metadata:Metadata={title:"Sofía Rose | UGC Beauty Creator",description:beauty.headline};
export default function Page(){return <CreatorLanding data={beauty}/>}
