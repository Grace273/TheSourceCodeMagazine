import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../StartPage.css";
import motherboardImg from "../../assets/images/bg-images/motherboard.png";
import spaceImg from "../../assets/images/bg-images/space.png";
import neuronsImg from "../../assets/images/bg-images/neurons.png";
import logoImg from "../../assets/images/SC_logo.png";
import ARTICLES from "../../data/articles.json";

const HERO_IMAGES = [motherboardImg, spaceImg, neuronsImg];

function HeroSlideshow({ images, title, subheading }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  const current = active % (images.length || 1);

  return (
    <section id="home" className="relative isolate grid place-center min-screen overflow-hidden bg-dark" aria-labelledby="hero-title">
      <div className="absolute inset-0" aria-hidden="true">
        {images.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            className={`absolute inset-0 full-size object-cover slide-fade ${index === current ? "opacity-100" : "opacity-0"}`}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-overlay" aria-hidden="true" />
      <div className="relative z-1 text-center content-width px-page py-hero">
        <h1 id="hero-title" className="m-0"><img src={logoImg} alt={title} className="hero-logo mx-auto" /></h1>
        {/* <p className="mx-auto mt-6 mb-0 max-copy text-lead text-soft leading-relaxed">{subheading}</p> */}
      </div>
      {/* {images.length > 1 && (
        <button type="button" className="absolute bottom-6 right-page z-1 button-quiet" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
          {paused ? "Play slideshow" : "Pause slideshow"}
        </button>
      )} */}
    </section>
  );
}

export function ArticleCard({ article }) {
  return (
    <article className="min-w-0">
      <a className="block full-height overflow-hidden rounded-card border-subtle bg-dark card-hover" href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="aspect-video bg-surface overflow-hidden">
          <img src={article.image} alt="" className="full-size object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="p-card">
          <h3 className="m-0 text-card font-medium leading-snug">{article.title}</h3>
          <p className="mt-5 mb-0 text-small text-muted">Read on Substack <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></p>
        </div>
      </a>
    </article>
  );
}

export default function StartPage({
  siteName = "The Source Code Magazine",
  contactEmail = "thesourcecodemag@proton.me",
  heroImages = HERO_IMAGES,
  articles = ARTICLES,
  subheading = "A student-led tech publication",
  about = "We write about computer science at UofT and the broader tech landscape. We aim to provide a platform for students to share their ideas about technology and its interdisciplinary impact, as well as casual thoughts on campus life :)",
}) {
  return (
    <div className="cs-magazine bg-dark text-white font-sans">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar siteName={siteName} />
      <main id="main-content" tabIndex={-1}>
        
        <HeroSlideshow images={heroImages} title={siteName} subheading={subheading} />
      

        <section id="get-involved" className="grid place-center min-section px-page py-section text-center" aria-labelledby="about-title">
          <div className="full-width min-w-0">
            <h2 id="about-title" className="m-0 text-heading font-medium tracking-tight">About Us</h2>
            <p className="mt-6 mb-0 max-copy mx-auto text-lead text-muted leading-relaxed">{about}</p>
            {/* <a className="inline-block mt-6 text-lead text-muted underline-link break-anywhere" href={`mailto:${contactEmail}`}>{contactEmail}</a> */}
          </div>
        </section>

        <section id="substack" className="px-page py-section" aria-labelledby="substack-title">
          <div className="content-width mx-auto">
            <h2 id="substack-title" className="m-0 text-heading font-medium tracking-tight text-center">Follow Our Substack!</h2>
            <div className="grid article-columns gap-6 mt-16">
              {articles.map((article) => <ArticleCard key={article.id || article.url} article={article} />)}
            </div>
          </div>
        </section>

        <section id="get-involved" className="grid place-center min-section px-page py-section text-center" aria-labelledby="involved-title">
          <div className="full-width min-w-0">
            <h2 id="involved-title" className="m-0 text-heading font-medium tracking-tight">Get Involved</h2>
            <a className="inline-block mt-6 text-lead text-muted underline-link break-anywhere" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </section>

      </main>
      <Footer siteName={siteName} />
    </div>
  );
}
  