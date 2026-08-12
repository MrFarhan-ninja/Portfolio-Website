

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Experience.scss";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
    {
        date: "OCT 2022 – JUNE 2026",
        title: "B.TECH in Computer Science & Engineering",
        org: "G.Pullaiah College of Engineering",
        desc:
            "Graduated",
    },
    // {
    //     date: "MAY-2026",
    //     title: "Learn Full-stack development",
    //     org: "sheryians coding school",
    //     desc:
    //         "Built full-stack features (React + Back-End) for an internal social network, including an automated birthday scheduler that boosted daily engagement by 40%.",
    // }
    {
    date: "MAY-2026",
    title: "Full-Stack Development Journey",
    org: "Sheryians Coding School",
    desc:
        "Learning and building real-world applications with JavaScript, React, Tailwind CSS, APIs, and backend technologies while strengthening my full-stack development skills.",
},


];

export default function Experience() {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const lineFillRef = useRef(null);

    useGSAP(
        () => {
            const root = sectionRef.current;
            const wrap = timelineRef.current;
            const items = gsap.utils.toArray(".tl-item", wrap);

            // Initial states
            items.forEach((item) => {
                const card = item.querySelector(".tl-card");
                const dot = item.querySelector(".tl-dot");

                gsap.set(card, { opacity: 0.18, y: 60, filter: "blur(10px)" });
                gsap.set(dot, { scale: 0.9, opacity: 0.55 });
            });

            // Line fill (grows as you scroll through the timeline)
            gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: "top" });
            gsap.to(lineFillRef.current, {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 60%",
                    end: "bottom 60%",
                    scrub: 1,
                },
            });

            // Activate item when it hits center-ish
            items.forEach((item) => {
                const card = item.querySelector(".tl-card");
                const dot = item.querySelector(".tl-dot");

                ScrollTrigger.create({
                    trigger: item,
                    start: "top 55%",
                    end: "bottom 45%",
                    onToggle: (self) => {
                        if (self.isActive) {
                            gsap.to(card, {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                duration: 0.9,
                                ease: "power3.out",
                            });
                            gsap.to(dot, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.4,
                                ease: "power3.out",
                            });
                            item.classList.add("is-active");
                        } else {
                            gsap.to(card, {
                                opacity: 0.18,
                                y: 60,
                                filter: "blur(10px)",
                                duration: 0.7,
                                ease: "power3.out",
                            });
                            gsap.to(dot, {
                                scale: 0.9,
                                opacity: 0.55,
                                duration: 0.35,
                                ease: "power3.out",
                            });
                            item.classList.remove("is-active");
                        }
                    },
                });
            });
            ScrollTrigger.refresh();
        },
        { scope: sectionRef }
    );

    return (
        <section className="journey" ref={sectionRef} id="timeline">
            {/* Hero heading like your video */}
            <div className="journey-hero">
                <p className="journey-kicker">03. JOURNEY</p>
                <h2 className="journey-title">Professional Path</h2>
                <p className="journey-sub">
                    A timeline of key milestones—training, internships, and production roles
                    focused on scalable web platforms.
                </p>
            </div>

            {/* Timeline */}
            <div className="timeline" ref={timelineRef}>
                <div className="timeline-line">
                    <span className="timeline-line-bg" />
                    <span className="timeline-line-fill" ref={lineFillRef} />
                </div>

                {TIMELINE.map((t, i) => {
                    const side = i % 2 === 0 ? "left" : "right";
                    return (
                        <div className={`tl-item ${side}`} key={`${t.date}-${i}`}>
                            <div className="tl-side tl-left">
                                {side === "left" ? (
                                    <article className="tl-card">
                                        <div className="tl-date">{t.date}</div>
                                        <h3 className="tl-h">{t.title}</h3>
                                        <div className="tl-org">{t.org}</div>
                                        <p className="tl-desc">{t.desc}</p>
                                    </article>
                                ) : null}
                            </div>

                            <div className="tl-center">
                                <span className="tl-dot" aria-hidden="true" />
                            </div>

                            <div className="tl-side tl-right">
                                {side === "right" ? (
                                    <article className="tl-card">
                                        <div className="tl-date">{t.date}</div>
                                        <h3 className="tl-h">{t.title}</h3>
                                        <div className="tl-org">{t.org}</div>
                                        <p className="tl-desc">{t.desc}</p>
                                    </article>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}