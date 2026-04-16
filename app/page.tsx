import MainPage from "@/components/MainPage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col bg-[#121212] font-sans md:flex-row">
      <Sidebar />
      <MainPage />
    </div>
  );
}
