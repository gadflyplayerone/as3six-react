import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import Partnerships from "@/components/Partnerships";
import Licensing from "@/components/Licensing";
import Contact from "@/components/Contact";
import pic1 from "assets/gallery/1.jpg";
import pic2 from "assets/gallery/2.jpg";
import pic3 from "assets/gallery/3.jpg";
import pic4 from "assets/gallery/4.jpg";
import pic5 from "assets/gallery/5.jpg";
import pic6 from "assets/gallery/6.jpg";
import pic7 from "assets/gallery/7.jpg";
export default function Home() {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
    return (_jsxs("main", { className: "pt-16", children: [_jsx("section", { id: "about", className: "scroll-mt-16", children: _jsx(Gallery, { title: "", images: images, autoPlayMs: 4000, headerOffsetPx: 64 }) }), _jsx(Industries, { id: "industries" }), _jsx(Partnerships, { id: "partnerships" }), _jsx(Licensing, { id: "licensing" }), _jsx("section", { id: "contact", className: "scroll-mt-16", children: _jsx(Contact, { id: "contact", title: "Contact", subtitle: "We typically respond within one business day.", emailTo: "zach@as3six.com", phone: "+1 (202) 422-2951", addressLines: ["Stanton, MI", "United States"] }) })] }));
}
