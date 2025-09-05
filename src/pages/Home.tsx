import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import Partnerships from "@/components/Partnerships";
import Licensing from "@/components/Licensing";
import Contact from "@/components/Contact"

import SEO from "@/seo/SEO";
import { organizationLd, webSiteLd, cwecProductLd, servicesLd } from "@/seo/jsonld";

import pic1 from "assets/gallery/1.jpg";
import pic2 from "assets/gallery/2.jpg";
import pic3 from "assets/gallery/3.jpg";
import pic4 from "assets/gallery/4.jpg";
import pic5 from "assets/gallery/5.jpg";
import pic6 from "assets/gallery/6.jpg";
import pic7 from "assets/gallery/7.jpg";

export default function Home() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <SEO
  title="AS3SIX — CWEC Electromagnetics for Automotive, Defense & Space, and Audio"
  description="AS3SIX builds CWEC—Coil With Enhanced Control—for step-response electromagnetic actuation: kHz control, lower thermal load, and deterministic field steps for safety- and mission-critical systems."
  path="/"
  image="/og-default.png"
  keywords={[
    "AS3SIX", "CWEC", "electromagnetics", "electromagnetic actuation",
    "automotive supplier", "defense contractor", "space", "audio technology",
    "solenoid", "pulsed power", "ABS", "ESC", "HV contactor", "missile fin valves",
    "high frequency response speakers"
  ]}
  jsonLd={[organizationLd, webSiteLd, cwecProductLd, ...servicesLd]}
/>
    <main className="pt-16">
      <section id="about" className="scroll-mt-16">
        <Gallery title="" images={images} autoPlayMs={4000} headerOffsetPx={64} />
      </section>

      <Industries id="industries" />
      <Partnerships id="partnerships" />
      <Licensing id="licensing" />
      <section id="contact" className="scroll-mt-16">
        <Contact
        id="contact"
        title="Contact"
        subtitle="We typically respond within one business day."
        emailTo="zach@as3six.com"
        phone="+1 (202) 422-2951"
        addressLines={["Stanton, MI", "United States"]}
      />
      </section>
    </main>
  );
}
