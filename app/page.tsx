import HeroMobile from "@/components/HeroCarusel/HeroMobile";
import HeroCarusel from "../components/HeroCarusel";

export default function Home() {
  return (
    <>
      <section className="pt-[12px] pb-[46px]">
        <div className="container px-5 md:px-0">
          <HeroCarusel />
          <HeroMobile />
        </div>
      </section>
    </>
  );
}
