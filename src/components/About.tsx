"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text lines
            gsap.utils.toArray<HTMLElement>(".about__text-inner").forEach((el) => {
                gsap.to(el, {
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el.parentElement,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Animate geometric shapes
            gsap.utils.toArray<HTMLElement>(".about__geo").forEach((el, i) => {
                gsap.to(el, {
                    opacity: 0.6,
                    rotation: `+=${i * 15}`,
                    duration: 1,
                    delay: i * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none none",
                    },
                });

                // Floating animation
                gsap.to(el, {
                    y: `+=${15 + i * 5}`,
                    rotation: `+=${5 + i * 3}`,
                    duration: 3 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: i * 0.5,
                });
            });

            // Animate stats
            gsap.utils.toArray<HTMLElement>(".about__stat").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Section label and title
            gsap.fromTo(
                ".about .section__label",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".about .section__title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section about" id="about">
            <div className="section__bg-text">ABOUT</div>

            <div className="about__content">
                <div className="section__label">About Me</div>
                <h2 className="section__title">
                    Building intelligent<br />systems that matter.
                </h2>

                <p className="about__text">
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            I&apos;m Kirtan Ugreja — a Computer Engineering student at CHARUSAT
                        </span>
                    </span>
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            (graduating 2027) who lives at the intersection of creativity
                        </span>
                    </span>
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            and artificial intelligence. I specialize in transforming complex
                        </span>
                    </span>
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            business processes into elegant, AI-powered automated workflows.
                        </span>
                    </span>
                </p>

                <p className="about__text">
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            From building offline LLM systems that run on SMS to designing
                        </span>
                    </span>
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            enterprise automation architectures — I believe technology should
                        </span>
                    </span>
                    <span className="about__text-line">
                        <span className="about__text-inner">
                            be accessible, intelligent, and beautifully crafted.
                        </span>
                    </span>
                </p>

                <div className="about__stats">
                    <div className="about__stat">
                        <div className="about__stat-number">5+</div>
                        <div className="about__stat-label">Projects</div>
                    </div>
                    <div className="about__stat">
                        <div className="about__stat-number">6</div>
                        <div className="about__stat-label">Months Exp</div>
                    </div>
                    <div className="about__stat">
                        <div className="about__stat-number">AI</div>
                        <div className="about__stat-label">Focus Area</div>
                    </div>
                </div>

                <a
                    href="https://docs.google.com/document/d/1SkV4g3tMFXUgcVIN1pOgmoPpx2WZZq8vRhs8EzktfUk/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__resume-btn"
                    style={{ marginTop: "24px", display: "inline-block" }}
                >
                    ↓ Download Resume
                </a>
            </div>

            <div className="about__visual">
                <div className="about__geo about__geo--1" />
                <div className="about__geo about__geo--2" />
                <div className="about__geo about__geo--3" />
            </div>
        </section>
    );
}
