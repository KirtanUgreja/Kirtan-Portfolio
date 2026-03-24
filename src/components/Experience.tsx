"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        date: "May 2025 — June 2025",
        role: "Automation Architect & Developer",
        company: "Sentiimenta AI",
        companyUrl: "https://sentiimenta-ai.com/",
        description:
            "Designed and built AI-powered automation workflows for D2C brands. Transformed manual business processes into intelligent, scalable automated systems using n8n, custom APIs, and LLM integrations.",
    },
    {
        date: "Oct 2025 — Jan 2026",
        role: "Website Developer",
        company: "CHARUSAT CognizanceX'26 Tech Fest",
        companyUrl: "https://charusat.ac.in",
        description:
            "Led frontend development for the official CognizanceX'26 tech fest website. Built an interactive, performance-optimized site serving 30+ events for CHARUSAT University's flagship technology festival.",
    },
    {
        date: "2024 — 2027",
        role: "B.Tech Computer Engineering",
        company: "CHARUSAT University",
        companyUrl: "https://charusat.ac.in",
        description:
            "Pursuing Computer Engineering with focus on AI, automation, and modern web technologies. Active participant in hackathons and technical communities.",
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".experience .section__label",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                ".experience .section__title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            gsap.utils.toArray<HTMLElement>(".experience__item").forEach((item, i) => {
                gsap.to(item, {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section experience" id="experience">
            <div className="section__bg-text">EXP</div>
            <div className="section__label">Experience</div>
            <h2 className="section__title">
                My journey<br />so far.
            </h2>

            <div className="experience__timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience__item">
                        <div className="experience__date">{exp.date}</div>
                        <div className="experience__role">{exp.role}</div>
                        <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience__company"
                        >
                            {exp.company} ↗
                        </a>
                        <p className="experience__desc">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
