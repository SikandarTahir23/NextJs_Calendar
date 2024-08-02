
import Image from "next/image";
import Navbar from "./Navbar/navbar";
import { Calendar } from "@/components/ui/calendar";


export default function Home() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <div className="w-full  h-[80%]  flex justify-around items-center">
        <div className="  flex justify-center items-center w-[600px] h-2/3">
          <h1 className="font-semibold text-[20px]">Welcome to our comprehensive calendar collection, where organization meets simplicity. Whether you&apos;re mapping out appointments, scheduling tasks, or planning your year ahead, our calendars are designed to streamline your daily life. With intuitive layouts and customizable features, staying organized has never been easier. Explore our range of calendars tailored to fit your personal and professional needs.</h1>
        </div>
        <Calendar />
      </div>
    </main>
  );
}
