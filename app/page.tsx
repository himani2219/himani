import MainPage from "@/components/MainPage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center font-sans bg-zinc-900 w-full">
     <Sidebar/>
     <MainPage/>
    </div>
  );
}
