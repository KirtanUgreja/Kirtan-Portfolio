"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                © {new Date().getFullYear()} Kirtan Ugreja — Crafted with precision.
            </p>
            <button
                className="footer__back-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑ Back to top
            </button>
        </footer>
    );
}
