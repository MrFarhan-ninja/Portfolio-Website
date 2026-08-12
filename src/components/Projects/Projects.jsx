import React, { useRef } from "react";
import "./Projects.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
//     {
//         title: "AI-Resume-Analyzer",
//         desc: "Built an AI-powered resume analysis platform using React.js, TypeScript, and Puter.js that helps users evaluate and improve their resumes.",
//         image: "/assets/images/common/Resume-analyzer.png",
//         tags: ["React", "Typescript", "PuterJs", "Vite"],
//         links: [
//             { label: "Source Code", href: "https://github.com/sunilnaginbhai/AI-Resume-Analyzer", icon: "🧑‍💻" },
//             { label: "Live Link", href: "https://ai-resume-analyzer-gamma-pied.vercel.app/", icon: "🔗" }
//         ]
//     },
//     {
//         title: "E-commerce-website",
//         desc: "Developed a responsive and modern frontend e-commerce application using React.js, focusing on reusable components and intuitive navigation.",
//         image: "/assets/images/common/E-commerce-img.png",
//         tags: ["React", "Vite"],
//         links: [
//             { label: "Source Code", href: "https://github.com/sunilnaginbhai/SkyMart-E-commerce", icon: "🧑‍💻" },
//             { label: "Live Link", href: "https://sky-mart-e-commerce.vercel.app/", icon: "🔗" }
//         ]
//     },
//     {
//         title: "Productive-Deshborde",
//         desc: "Built an interactive and responsive productivity dashboard using HTML, CSS, and JavaScript with dynamic UI interactions.",
//         image: "/assets/images/common/Productive-deshborde-img.png",
//         tags: ["HTML", "CSS", "JAVA SCRIPT"],
//         links: [
//             { label: "Source Code", href: "https://github.com/sunilnaginbhai/Productive-Deshborde-", icon: "🧑‍💻" },
//             { label: "Live Link", href: "https://productive-deshborde.vercel.app/", icon: "🔗" }
//         ]
//     },
//     {
//         title: "TWO Leaves and a bud",
//         desc: "Recreated the Two Leaves and a bud ,website using HTML, CSS, and JavaScript, focusing on accurately reproducing visual design, animations, and layout.",
//         image: "/assets/images/common/ToLeves-web-img.png",
//         tags: ["HTML", "CSS", "JAVA SCRIPT"],
//         links: [
//             { label: "Source Code", href: "https://github.com/MrFarhan-ninja/Cohort-3.0/tree/main/Assignments/Assignment-6", icon: "🧑‍💻" },
//             { label: "Live Link", href: "https://cohort-30-assignment-06.vercel.app/", icon: "🔗" }
//         ]
//     },
































  {
    title: "SkyMart E-Commerce",
    desc: "Built a responsive e-commerce application using React, Tailwind CSS, Axios, and React Router with product browsing, search, cart functionality, and a clean responsive interface.",
    image: "/assets/images/common/SkyMart.png",
    tags: ["React", "Tailwind CSS", "Axios", "React Router"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/MrFarhan-ninja/Cohort-3.0-React-Projects/tree/main/SkyMart-main",
        icon: "🧑‍💻",
      },
      {
        label: "Live Link",
        href: "https://cohort-3-0-react-projects-2y95.vercel.app/home",
        icon: "🔗",
      },
    ],
  },

//   {
//     title: "Weather Widget",
//     desc: "Built a weather application using JavaScript, the Geolocation API, and a weather API to fetch and display weather information based on the user's location.",
//     image: "/assets/images/common/Weather-widget.png",
//     tags: ["JavaScript", "Geolocation API", "Weather API"],
//     links: [
//       {
//         label: "Source Code",
//         href: "YOUR_GITHUB_LINK",
//         icon: "🧑‍💻",
//       },
//       {
//         label: "Live Link",
//         href: "YOUR_VERCEL_LINK",
//         icon: "🔗",
//       },
//     ],
//   },

  {
    title: "Productive Dashboard",
    desc: "Created an interactive productivity dashboard using HTML, CSS, and JavaScript with dynamic UI interactions and a responsive layout.",
    image: "/assets/images/common/Productive-dashboard.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/MrFarhan-ninja/Cohort-3.0/tree/main/Assignments/Final-Productivity-Dashboard",
        icon: "🧑‍💻",
      },
      {
        label: "Live Link",
        href: "https://productivitydashboard-one.vercel.app/",
        icon: "🔗",
      },
    ],
  },

  {
    title: "Responsive Web Clone",
    desc: "Recreated a modern website interface using HTML, CSS, and JavaScript while focusing on responsive layouts, visual details, and interactive elements.",
    image: "/assets/images/common/Web-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/MrFarhan-ninja/Cohort-3.0/tree/main/Assignments/Assignment-6",
        icon: "🧑‍💻",
      },
      {
        label: "Live Link",
        href: "https://cohort-30-assignment-06.vercel.app/",
        icon: "🔗",
      },
    ],
  },
];



























export default function Projects() {
    const scrollRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(
        () => {
            const track = scrollRef.current;
            if (!track) return;

            // Function to dynamically get movement distance
            const getScrollAmount = () => {
                return track.scrollWidth - window.innerWidth;
            };

            const animation = gsap.to(track, {
                x: () => -getScrollAmount(), // Functional value so it recalculates on resize
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1, // Smooth interaction tied directly to scrollbar
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`, // Pin duration matches total horizontal scroll distance
                    invalidateOnRefresh: true, // Recalculates if window is resized
                    anticipatePin: 1
                }
            });

            // Recalculate ScrollTrigger once all image assets finish loading
            window.addEventListener("load", () => ScrollTrigger.refresh());

            return () => {
                animation.kill();
            };
        },
        { scope: triggerRef }
    );

    return (
        <section ref={triggerRef} className="projects" id="projects">
            <div className="sectionHeader">
                <p className="sectionKicker">02. PROJECTS</p>
                <h2 className="sectionTitle">PROJECTS</h2>
                <p className="sectionSub">
                    A selection of builds that showcase frontend motion craft and cloud-first architecture.
                </p>
            </div>

            <div className="projectsWrapper">
                <div ref={scrollRef} className="projectsGrid">
                    {PROJECTS.map((p) => (
                        <article className="projectCard" key={p.title}>
                            <div className="projectMedia">
                                <img src={p.image} alt={p.title} loading="eager" />
                                <div className="projectMediaOverlay" />
                            </div>

                            <div className="projectBody">
                                <h3 className="projectTitle">{p.title}</h3>
                                <p className="projectDesc">{p.desc}</p>

                                <div className="projectTags">
                                    {p.tags.map((t) => (
                                        <span className="tag" key={t}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="projectFooter">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.label}
                                            className="projectLink"
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="icon">{l.icon}</span>
                                            {l.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
            <div className="btnBar">
                <a href="https://github.com/MrFarhan-ninja" target="_blank" className="exploreBtn">
                    <span>Explore More</span>
                    <svg className="btnIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </section>
    );
}









