import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import Partnerships from "@/components/Partnerships";
import Licensing from "@/components/Licensing";
import Contact from "@/components/Contact"

import pic1 from "assets/gallery/1.jpg";
import pic2 from "assets/gallery/2.jpg";
import pic3 from "assets/gallery/3.jpg";
import pic4 from "assets/gallery/4.jpg";
import pic5 from "assets/gallery/5.jpg";
import pic6 from "assets/gallery/6.jpg";
import pic7 from "assets/gallery/7.jpg";
import pic8 from "assets/gallery/8.jpg";
import pic9 from "assets/gallery/9.jpg";
import pic10 from "assets/gallery/10.jpg";
import pic11 from "assets/gallery/11.jpg";
import pic12 from "assets/gallery/12.jpg";
import pic13 from "assets/gallery/13.jpg";
import pic14 from "assets/gallery/14.jpg";
import pic15 from "assets/gallery/15.jpg";
import pic16 from "assets/gallery/16.jpg";
import pic17 from "assets/gallery/17.jpg";
import pic18 from "assets/gallery/18.jpg";
import pic20 from "assets/gallery/20.jpg";
import pic21 from "assets/gallery/21.jpg";
import pic22 from "assets/gallery/22.jpg";
import pic23 from "assets/gallery/23.jpg";
import pic24 from "assets/gallery/24.jpg";
import pic25 from "assets/gallery/25.jpg";
import pic26 from "assets/gallery/26.jpg";
import pic27 from "assets/gallery/27.jpg";
import pic28 from "assets/gallery/28.jpg";
import pic29 from "assets/gallery/29.jpg";
import pic30 from "assets/gallery/30.jpg";
import pic31 from "assets/gallery/31.jpg";
import pic46 from "assets/gallery/46.jpg";

export default function Home() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic46];

  return (
    <main className="pt-16">
      <section id="about" className="scroll-mt-16">
        <Gallery
          title="CWEC magnetics for Air & Space Forces, NATO alliances, and Israeli defense"
          images={images}
          autoPlayMs={999999}
          headerOffsetPx={64}
        />
      </section>

      <section className="scroll-mt-16 bg-theme-dark/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Continuous Wave Electromagnetic Control for Air &amp; Space Forces, NATO, and Allied Defense
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            AS3SIX delivers continuous wave electromagnetic control (CWEC) that unlocks superior coil response, pulsed
            power fidelity, and EMI resilience. We support U.S. Air Force and U.S. Space Force programs, NATO joint
            commands, Israeli missile defense initiatives, and mission-driven industrial partners modernizing magnets and
            actuation hardware.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-white/80">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Defense-Grade Magnetics</h2>
              <p className="mt-2">
                Rapid field steps, deterministic safing, and ruggedized coils for aircraft, hypersonics, missile defense,
                and counter-UAS missions.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Coalition Integration</h2>
              <p className="mt-2">
                NATO interoperability, ITAR/DFARS alignment, and regional licensing to equip allied commands with CWEC-enabled
                actuation.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Industrial Magnet Supply</h2>
              <p className="mt-2">
                Collaborate with magnet manufacturers, advanced materials labs, and aerospace suppliers to embed CWEC into
                next-generation platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Industries id="industries" />
      <Partnerships id="partnerships" />
      <Licensing id="licensing" />
      <section id="contact" className="scroll-mt-16">
        <Contact
        id="contact"
        title="Contact"
        subtitle="We respond quickly to Air & Space Force, NATO, Israeli defense, and industrial magnet requests."
        emailTo="contact@as3six.com"
        phone="+1 (202) 422-2951"
        addressLines={["Michigan", "United States"]}
      />
      </section>
    </main>
  );
}
