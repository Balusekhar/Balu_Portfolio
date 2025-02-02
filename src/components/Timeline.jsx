import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Building2, Briefcase, University, GraduationCap } from "lucide-react";
import "react-vertical-timeline-component/style.min.css"; // Import timeline styles

function Timeline() {
  return (
    <section className="py-10 relative">
      {/* Dark background */}
      <VerticalTimeline lineColor="#2a2a28">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-2022"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#2a2a28",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<University />}>
          <h3 className="vertical-timeline-element-title">
            Chennai Institute of Technology, B.Tech
          </h3>
          <p>
            I completed my B.Tech in Electronics and Communication Engineering,
            graduating with a CGPA of 8.5.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#2a2a28",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<Building2 />}>
          <h3 className="vertical-timeline-element-title">Areteans</h3>
          <p>
            I completed a 6-month internship at Areteans, where I applied
            various Pega concepts. During my time there, I developed an
            insurance application using Pega.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-2025"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#2a2a28",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<GraduationCap />}>
          <h3 className="vertical-timeline-element-title">
            University of North Texas, M.S
          </h3>
          <p>
            I am currently pursuing my Master’s in Computer Science at the
            University of North Texas, expected to graduate with a CGPA of 3.8.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          iconStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentStyle={{
            background: "#2a2a28",
            color: "#ffffff",
            border: "1px solid #333",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d0d0d" }}
          icon={<Briefcase />}>
          <h3 className="vertical-timeline-element-title">MS Info Tech LLC</h3>
          <p>
            In 2024, I worked as a Full Stack Engineer at MS Info Tech LLC.
            During my tenure, I developed several websites and contributed to
            employee management using Google Sheets App Script.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
