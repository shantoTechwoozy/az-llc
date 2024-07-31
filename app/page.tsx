import About from "@/components/about/page";
import Announcement from "@/components/announcement/page";
import ContactUs from "@/components/contact/page";
import GetStarted from "@/components/get-started/page";
import Hero from "@/components/hero/page";
import Introduction from "@/components/introduction/page";
import Service from "@/components/services/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Announcement />
      <Hero/>
      <Introduction/>
      <Service/>
      <About/>
      <GetStarted/>
      <ContactUs/>
    </main>
  );
}
