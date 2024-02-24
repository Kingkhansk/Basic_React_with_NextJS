
import First, { Second, Third } from "@/components/First";
import Image from "next/image";
export default function Home() {
  
  return (
    <>
    <div className="w-full text-center">
    <h1>hy there</h1>
    <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert mx-auto my-2"
              width={100}
              height={24}
              priority
            />
    <First />
    <Second 
      title = 'Ammy'
      name = "Emy"
      id = "1000"
    />
    <Third p = 'i af afa'/>
    </div>
    </>
    
  );
}
