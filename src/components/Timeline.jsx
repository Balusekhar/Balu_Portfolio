import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Laptop, Phone, Camera, Watch } from "lucide-react";
import "react-vertical-timeline-component/style.min.css"; // Import timeline styles

function Timeline() {
  return (
    <section className="text-white py-10 relative">
      {/* Dark background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <VerticalTimeline lineColor="#ffffff55">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1984"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#0d0d0d",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<Laptop />}>
          <h3 className="vertical-timeline-element-title">
            First Macintosh Computer
          </h3>
          <p>
            The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1998"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#0d0d0d",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<Phone />}>
          <h3 className="vertical-timeline-element-title">iMac</h3>
          <p>
            iMac is a family of all-in-one Mac desktop computers designed and
            built by Apple Inc. It has been the primary part of Apple's consumer
            desktop offerings since its debut in August 1998.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2001"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#0d0d0d",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<Camera />}>
          <h3 className="vertical-timeline-element-title">iPod</h3>
          <p>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
