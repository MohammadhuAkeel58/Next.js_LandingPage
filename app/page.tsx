import FirstSection from "./first_section/page";
import Navbar from "./navbar/page";
import SecondSection from "./secondSection/page";

export default function Home() {
  return (
    <div className="">
   <Navbar/>
   <FirstSection/>
   <SecondSection/>
   </div>
  );
}
