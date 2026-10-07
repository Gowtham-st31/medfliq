import React, { useEffect } from "react";
import "./index.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="root">
      <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b bg-white border-[rgba(0,0,0,0.05)] py-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
            <a className="flex items-center gap-1 shrink-0 mr-8 -ml-7" href="/">
              <img
                alt="MedFliq Logo"
                className="h-10 w-auto object-contain"
                src="/medfliq-horizontal.webp"
              />
            </a>{" "}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-system-muted flex-wrap justify-center flex-1">
              <a
                className="hover:text-system-accent transition-colors whitespace-nowrap"
                href="/#solutions"
              >
                Problem{" "}
              </a>{" "}
              <a
                className="hover:text-system-accent transition-colors whitespace-nowrap"
                href="/#how-it-works"
              >
                How it works{" "}
              </a>{" "}
              <a
                className="hover:text-system-accent transition-colors whitespace-nowrap"
                href="/#compliance"
              >
                Compliance{" "}
              </a>{" "}
              <a
                className="hover:text-system-accent transition-colors whitespace-nowrap"
                href="/#who-its-for"
              >
                What 's Live{" "}
              </a>{" "}
            </div>{" "}
            <div className="shrink-0 ml-8 hidden md:block">
              <a
                className="btn-swipe-orange px-6 py-2.5 rounded-[4px] text-[14px] font-medium inline-block"
                href="/#contact"
              >
                <span> Book a demo </span>{" "}
              </a>{" "}
            </div>{" "}
            <button className="lg:hidden ml-auto text-system-primary focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
                aria-hidden="true"
              >
                <path d="M4 5h16"> </path> <path d="M4 12h16"> </path>{" "}
                <path d="M4 19h16"> </path>{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </nav>{" "}
        <main>
          <section className="pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden relative min-h-[90vh] flex items-center bg-system-base">
            <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-gray-100 border-t border-[rgba(0,0,0,0.05)] py-2.5 z-20 flex items-center">
              <div className="flex w-max animate-marquee">
                <div className="flex shrink-0 items-center gap-4 md:gap-8 text-[11px] md:text-[12px] font-medium tracking-wider text-system-primary/60 uppercase whitespace-nowrap pr-4 md:pr-8">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> English </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> हिन्दी </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> বাংলা </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> తెలు గు </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> मराठी </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> தமிழ் </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> اردو </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ગુજરાતી </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ಕನ್ನಡ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ଓଡ଼ିଆ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> മലയാ ളം </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ਪੰਜਾਬੀ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> অসমীয়া </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex shrink-0 items-center gap-4 md:gap-8 text-[11px] md:text-[12px] font-medium tracking-wider text-system-primary/60 uppercase whitespace-nowrap pr-4 md:pr-8">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> English </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> हिन्दी </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> বাংলা </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> తెలు గు </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> मराठी </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> தமிழ் </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> اردو </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ગુજરાતી </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ಕನ್ನಡ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ଓଡ଼ିଆ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> മലയാ ളം </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> ਪੰਜਾਬੀ </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span> অসমীয়া </span>{" "}
                    <span className="text-system-primary/20"> • </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative w-full mt-4 md:mt-0">
              <div className="flex flex-col items-center justify-center text-center">
                <div
                  data-reveal="true"
                  data-delay="0"
                  className="inline-flex items-center space-x-3 mb-8 is-revealed"
                >
                  <span className="flex h-2 w-2 rounded-full bg-system-accent shadow-[0_0_8px_#ff821b]">
                    {" "}
                  </span>{" "}
                  <span className="font-mono text-xs font-light tracking-[0.1em] text-system-accent uppercase flex">
                    <span> C </span> <span> l </span> <span> i </span>{" "}
                    <span> n </span> <span> i </span> <span> c </span>{" "}
                    <span> a </span> <span> l </span> <span> & nbsp; </span>{" "}
                    <span> d </span> <span> e </span> <span> c </span>{" "}
                    <span> i </span> <span> s </span> <span> i </span>{" "}
                    <span> o </span> <span> n </span> <span> & nbsp; </span>{" "}
                    <span> s </span> <span> u </span> <span> p </span>{" "}
                    <span> p </span> <span> o </span> <span> r </span>{" "}
                    <span> t </span>{" "}
                  </span>{" "}
                </div>{" "}
                <h1
                  data-reveal="true"
                  data-delay="100"
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-normal text-system-primary leading-[1.1] sm:leading-[1.05] mb-6 md:mb-8 max-w-none is-revealed"
                >
                  Diagnosis is a reasoning problem. <br />
                  We built a second set <br />
                  of eyes for it.{" "}
                </h1>{" "}
                <p
                  data-reveal="true"
                  data-delay="200"
                  className="text-base sm:text-lg text-system-muted leading-[1.8] font-light mb-10 md:mb-12 max-w-2xl mx-auto is-revealed"
                >
                  MedFliq is a clinical co - pilot for doctors.Specialised AI
                  agents read the full patient record alongside you, check the
                  reasoning against evidence, flag what 's missing, and show
                  their working every time.{" "}
                </p>{" "}
                <div
                  data-reveal="true"
                  data-delay="300"
                  className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 w-full px-2 sm:px-0 is-revealed"
                >
                  <a
                    className="btn-swipe-orange w-full sm:w-auto inline-block px-8 py-3.5 sm:px-10 sm:py-4 font-light text-[15px] tracking-wide rounded-[4px] text-center"
                    href="/#contact"
                  >
                    <span> Book a demo </span>{" "}
                  </a>{" "}
                  <a
                    className="w-full sm:w-auto inline-block px-8 py-3.5 sm:px-10 sm:py-4 font-light text-[15px] tracking-wide rounded-[4px] border border-[rgba(0,0,0,0.1)] text-system-primary hover:border-system-primary hover:bg-black/5 transition-all text-center"
                    href="/#how-it-works"
                  >
                    <span> See how it works </span>{" "}
                  </a>{" "}
                </div>{" "}
                <p
                  data-reveal="true"
                  data-delay="400"
                  className="mt-8 font-mono text-[11px] tracking-widest text-system-muted uppercase max-w-xl mx-auto"
                >
                  The doctor decides.MedFliq makes sure the decision was made
                  with everything on the table.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="solutions"
            className="pt-20 pb-10 md:pt-32 md:pb-16 relative bg-[#0a0a0a] border-t border-white/5"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-5xl mb-12 md:mb-16">
                <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-white/40 mb-6">
                  01 THE PROBLEM{" "}
                </h2>{" "}
                <h3 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-normal leading-[1.1]">
                  Misdiagnosis isn 't a knowledge gap. <br />
                  It 's a bandwidth gap.{" "}
                </h3>{" "}
                <p className="text-white/55 text-[15px] md:text-base leading-[1.7] font-normal">
                  Doctors rarely miss a diagnosis because they don 't know the
                  medicine.They miss it because the consultation is short, the
                  history is long, the data keeps arriving, and two conditions
                  look identical on the surface.{" "}
                </p>{" "}
              </div>{" "}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Minutes per patient{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    A full history to take, examine, and act on with a queue
                    outside the door.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    More data than a consult holds{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Labs, imaging, referrals and prior visits arriving faster
                    than anyone can read them.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Histories spread thin{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Comorbidities and years of prior treatment buried across
                    paper, WhatsApp and three systems.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Look - alike presentations{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Different diseases, identical early symptoms, one visit to
                    tell them apart.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Widening drug interactions{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Every medication added expands the surface no one has time
                    to re - check.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Documentation gaps{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    What wasn 't written down can' t inform the next decision,
                    or the next doctor.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    Cognitive bias{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Anchoring and premature closure affect every clinician, on
                    every shift, including the good ones.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-white/[0.04] p-6 md:p-8 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group flex flex-col h-full">
                  <h4 className="text-[17px] font-light text-white/90 mb-3 tracking-normal group-hover:text-system-accent transition-colors">
                    The cost, downstream{" "}
                  </h4>{" "}
                  <p className="text-white/55 leading-[1.6] text-[14px] font-normal flex-grow">
                    Delayed treatment, the wrong prescription, repeat
                    investigations, and a patient who pays for all three.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="platform"
            className="pt-10 pb-10 md:pt-16 md:pb-16 relative bg-system-base"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
                <div>
                  <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-system-muted mb-6">
                    02 PLATFORM FEATURES{" "}
                  </h2>{" "}
                  <h3 className="text-3xl md:text-4xl font-light text-system-primary mb-12 tracking-normal leading-[1.2]">
                    Decision support inside the consultation.{" "}
                  </h3>{" "}
                  <div className="space-y-2 relative before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-[rgba(0,0,0,0.05)]">
                    <div className="cursor-pointer transition-all duration-300 pl-6 py-4 relative opacity-40 hover:opacity-70">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-widest font-light text-system-muted">
                          01{" "}
                        </span>{" "}
                        <h4 className="text-[17px] font-light text-system-primary tracking-normal">
                          Ambient Clinical Documentation{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="cursor-pointer transition-all duration-300 pl-6 py-4 relative opacity-100">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-system-accent">
                        {" "}
                      </div>{" "}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-widest font-light text-system-accent">
                          02{" "}
                        </span>{" "}
                        <h4 className="text-[17px] font-light text-system-primary tracking-normal">
                          Longitudinal History Synthesis{" "}
                        </h4>{" "}
                      </div>{" "}
                      <p className="text-system-muted leading-[1.6] text-[14px] overflow-hidden">
                        <span className="block pt-2">
                          Assembles the complete patient picture from fragmented
                          data.It surfaces comorbidities and past treatments
                          from prior visits and scattered labs before you even
                          begin.{" "}
                        </span>{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="cursor-pointer transition-all duration-300 pl-6 py-4 relative opacity-40 hover:opacity-70">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-widest font-light text-system-muted">
                          03{" "}
                        </span>{" "}
                        <h4 className="text-[17px] font-light text-system-primary tracking-normal">
                          Dynamic Differentials{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="cursor-pointer transition-all duration-300 pl-6 py-4 relative opacity-40 hover:opacity-70">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-widest font-light text-system-muted">
                          04{" "}
                        </span>{" "}
                        <h4 className="text-[17px] font-light text-system-primary tracking-normal">
                          Medication & amp; Allergy Screening{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="cursor-pointer transition-all duration-300 pl-6 py-4 relative opacity-40 hover:opacity-70">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-widest font-light text-system-muted">
                          05{" "}
                        </span>{" "}
                        <h4 className="text-[17px] font-light text-system-primary tracking-normal">
                          Explainable Output{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full max-w-md max-h-md bg-gradient-to-tr from-system-surface to-white rounded-full hidden sm:block blur-3xl opacity-60">
                      {" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="relative w-full max-w-[320px] sm:max-w-sm">
                    <div className="w-full">
                      <div className="bg-system-surface rounded-[8px] p-5 border border-[rgba(0,0,0,0.08)] shadow-md sm:shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(0,0,0,0.05)]">
                          <span className="text-system-success font-mono font-light text-sm">
                            {" "}
                            [Hx]{" "}
                          </span>{" "}
                          <span className="text-system-primary font-light text-[13px] tracking-wide">
                            Patient Timeline{" "}
                          </span>{" "}
                        </div>{" "}
                        <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[5px] before:w-[1px] before:bg-[rgba(0,0,0,0.05)]">
                          <div className="relative pl-5">
                            <div className="absolute left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-system-muted">
                              {" "}
                            </div>{" "}
                            <span className="text-[10px] font-mono text-system-muted block">
                              OCT 2023{" "}
                            </span>{" "}
                            <span className="text-[13px] text-system-primary block">
                              Diagnosed with Type 2 Diabetes{" "}
                            </span>{" "}
                          </div>{" "}
                          <div className="relative pl-5">
                            <div className="absolute left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-system-muted">
                              {" "}
                            </div>{" "}
                            <span className="text-[10px] font-mono text-system-muted block">
                              MAR 2024{" "}
                            </span>{" "}
                            <span className="text-[13px] text-system-primary block">
                              HbA1c: 8.2 % (Flagged){" "}
                            </span>{" "}
                          </div>{" "}
                          <div className="relative pl-5">
                            <div className="absolute left-[1px] top-1 w-2.5 h-2.5 rounded-full bg-system-success border-2 border-system-surface">
                              {" "}
                            </div>{" "}
                            <span className="text-[10px] font-mono text-system-success block font-bold">
                              TODAY{" "}
                            </span>{" "}
                            <span className="text-[13px] text-system-primary block">
                              Presents with peripheral neuropathy{" "}
                            </span>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="demo"
            className="pt-10 pb-16 md:pt-16 md:pb-20 bg-system-base border-t border-[rgba(0,0,0,0.05)] relative"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-6 md:mt-8">
              <div className="mb-10 md:mb-14">
                <div className="flex items-center mb-6">
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-system-muted">
                    03 Live Clinical AI Demo{" "}
                  </span>{" "}
                </div>{" "}
                <h2 className="text-3xl md:text-4xl font-light text-system-primary tracking-normal leading-[1.2] mb-4">
                  Experience Real - Time Medical AI.{" "}
                </h2>{" "}
                <p className="text-[15px] text-system-muted leading-[1.8] font-light max-w-xl">
                  Select a patient case below.Watch as our specialized AI agents
                  instantly analyze, validate, and provide clinical decision
                  support exactly as it would happen during a live, fast - paced
                  consultation.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex flex-wrap gap-3 mb-10">
                <button className="px-4 py-2 rounded-[6px] text-[12px] font-mono tracking-widest uppercase border transition-all duration-200 bg-system-accent text-white border-system-accent shadow-[0_0_16px_rgba(255,130,27,0.3)]">
                  Atypical Chest Pain{" "}
                </button>{" "}
                <button className="px-4 py-2 rounded-[6px] text-[12px] font-mono tracking-widest uppercase border transition-all duration-200 bg-system-surface text-system-muted border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.2)] hover:text-system-primary">
                  Uncontrolled T2DM{" "}
                </button>{" "}
                <button className="px-4 py-2 rounded-[6px] text-[12px] font-mono tracking-widest uppercase border transition-all duration-200 bg-system-surface text-system-muted border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.2)] hover:text-system-primary">
                  Fever + Joint Pain{" "}
                </button>{" "}
              </div>{" "}
              <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-4">
                <div className="bg-system-surface border border-[rgba(0,0,0,0.05)] rounded-[12px] p-6 flex flex-col gap-6 shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.12em] uppercase px-2 py-0.5 rounded-[3px] border text-red-600 border-red-600/30 bg-red-600/10">
                      High Risk{" "}
                    </span>{" "}
                    <h3 className="text-system-primary text-[16px] font-light tracking-normal mt-3">
                      Atypical Chest Pain{" "}
                    </h3>{" "}
                  </div>{" "}
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.12em] uppercase text-system-muted mb-3">
                      Vitals{" "}
                    </p>{" "}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-system-base rounded-[6px] p-3 border border-[rgba(0,0,0,0.05)]">
                        <div className="text-[10px] text-system-muted font-mono uppercase tracking-widest mb-1">
                          BP{" "}
                        </div>{" "}
                        <div className="text-system-primary text-[14px] font-light">
                          142 / 88{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="bg-system-base rounded-[6px] p-3 border border-[rgba(0,0,0,0.05)]">
                        <div className="text-[10px] text-system-muted font-mono uppercase tracking-widest mb-1">
                          HR{" "}
                        </div>{" "}
                        <div className="text-system-primary text-[14px] font-light">
                          94 bpm{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="bg-system-base rounded-[6px] p-3 border border-[rgba(0,0,0,0.05)]">
                        <div className="text-[10px] text-system-muted font-mono uppercase tracking-widest mb-1">
                          SpO₂{" "}
                        </div>{" "}
                        <div className="text-system-primary text-[14px] font-light">
                          97 %
                        </div>{" "}
                      </div>{" "}
                      <div className="bg-system-base rounded-[6px] p-3 border border-[rgba(0,0,0,0.05)]">
                        <div className="text-[10px] text-system-muted font-mono uppercase tracking-widest mb-1">
                          Troponin{" "}
                        </div>{" "}
                        <div className="text-system-primary text-[14px] font-light">
                          0.04 ng / mL{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.12em] uppercase text-system-muted mb-3">
                      Patient History{" "}
                    </p>{" "}
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-[13px] text-system-muted font-light">
                        <span className="w-1 h-1 rounded-full bg-system-muted/40 mt-[7px] shrink-0">
                          {" "}
                        </span>
                        67 M· Prior PCI(2019){" "}
                      </li>{" "}
                      <li className="flex items-start gap-2 text-[13px] text-system-muted font-light">
                        <span className="w-1 h-1 rounded-full bg-system-muted/40 mt-[7px] shrink-0">
                          {" "}
                        </span>
                        Type 2 DM· CKD Stage 3 a{" "}
                      </li>{" "}
                      <li className="flex items-start gap-2 text-[13px] text-system-muted font-light">
                        <span className="w-1 h-1 rounded-full bg-system-muted/40 mt-[7px] shrink-0">
                          {" "}
                        </span>
                        On Aspirin + Metformin{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="mt-auto pt-4 border-t border-[rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500">
                        {" "}
                      </span>{" "}
                      <span className="text-[11px] font-mono text-system-muted tracking-wide">
                        Multi - agent analysis: complete{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-system-surface border rounded-[10px] p-5 transition-all duration-500 shadow-sm border-[rgba(0,0,0,0.08)] opacity-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12px] text-sky-600">
                            {" "}
                            [Dx]{" "}
                          </span>{" "}
                          <span className="text-system-muted text-[11px] font-light tracking-wide">
                            Diagnostic Agent{" "}
                          </span>{" "}
                        </div>{" "}
                        <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[3px] border text-amber-600 border-amber-600/30 bg-amber-600/10">
                          warning{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="text-system-primary text-[13px] leading-[1.7] font-light">
                        <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 mb-0.5 bg-amber-500">
                          {" "}
                        </span>
                        Atypical presentation flagged NSTEMI cannot be
                        excluded.Serial troponins recommended.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="bg-system-surface border rounded-[10px] p-5 transition-all duration-500 shadow-sm border-[rgba(0,0,0,0.08)] opacity-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12px] text-emerald-600">
                            {" "}
                            [Ev]{" "}
                          </span>{" "}
                          <span className="text-system-muted text-[11px] font-light tracking-wide">
                            Evidence Validator{" "}
                          </span>{" "}
                        </div>{" "}
                        <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[3px] border text-sky-600 border-sky-600/30 bg-sky-600/10">
                          info{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="text-system-primary text-[13px] leading-[1.7] font-light">
                        <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 mb-0.5 bg-sky-500">
                          {" "}
                        </span>
                        AHA / ACC 2023: Early invasive strategy recommended for
                        high - risk NSTEMI with GRACE score & gt; 140.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="bg-system-surface border rounded-[10px] p-5 transition-all duration-500 shadow-sm border-[rgba(0,0,0,0.08)] opacity-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12px] text-amber-600">
                            {" "}
                            [Rk]{" "}
                          </span>{" "}
                          <span className="text-system-muted text-[11px] font-light tracking-wide">
                            Risk Stratification{" "}
                          </span>{" "}
                        </div>{" "}
                        <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[3px] border text-red-600 border-red-600/30 bg-red-600/10">
                          danger{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="text-system-primary text-[13px] leading-[1.7] font-light">
                        <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 mb-0.5 bg-red-500">
                          {" "}
                        </span>
                        GRACE Score: 158(High Risk).Estimated 6 - month
                        mortality: 8.9 % .{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="bg-system-surface border rounded-[10px] p-5 transition-all duration-500 shadow-sm border-[rgba(0,0,0,0.08)] opacity-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12px] text-red-600">
                            {" "}
                            [Rx]{" "}
                          </span>{" "}
                          <span className="text-system-muted text-[11px] font-light tracking-wide">
                            Pharmacy Agent{" "}
                          </span>{" "}
                        </div>{" "}
                        <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[3px] border text-red-600 border-red-600/30 bg-red-600/10">
                          danger{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="text-system-primary text-[13px] leading-[1.7] font-light">
                        <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 mb-0.5 bg-red-500">
                          {" "}
                        </span>
                        Contraindication: Metformin + contrast media.Hold 48 h
                        pre - catheterisation.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <p className="text-[11px] text-system-muted font-light text-right mt-1 opacity-70">
                    Simulated clinical scenario for demonstration purposes
                    only.Not for clinical use.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="how-it-works"
            className="py-16 md:py-20 relative bg-black border-t border-white/10"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-2xl mb-12 md:mb-20">
                <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-white/40 mb-6">
                  04 HOW IT WORKS{" "}
                </h2>{" "}
                <h3 className="text-3xl md:text-5xl font-light text-white tracking-normal leading-[1.2]">
                  Three steps.No change to <br />
                  how you consult.{" "}
                </h3>{" "}
              </div>{" "}
              <div className="relative">
                <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-[1px] bg-white/10">
                  {" "}
                </div>{" "}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="relative flex flex-col group">
                    <div className="relative z-10 flex items-center mb-8">
                      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-mono text-[13px] border transition-all duration-300 shrink-0 bg-white/5 border-white/15 text-white/60 group-hover:border-white group-hover:text-white">
                        01{" "}
                      </div>{" "}
                      <div className="lg:hidden ml-4 flex-1 h-[1px] bg-white/10">
                        {" "}
                      </div>{" "}
                    </div>{" "}
                    <h4 className="text-[20px] font-light text-white/70 tracking-normal mb-4 group-hover:text-white transition-colors duration-300">
                      Consult as you always do
                    </h4>{" "}
                    <p className="text-white/55 text-[14px] leading-[1.75] font-normal mb-6 flex-grow">
                      MedFliq listens and turns the conversation into a
                      structured clinical note.No typing, no template wrestling,
                      no new screen between you and the patient.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="relative flex flex-col group">
                    <div className="relative z-10 flex items-center mb-8">
                      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-mono text-[13px] border transition-all duration-300 shrink-0 bg-white/5 border-white/15 text-white/60 group-hover:border-white group-hover:text-white">
                        02{" "}
                      </div>{" "}
                      <div className="lg:hidden ml-4 flex-1 h-[1px] bg-white/10">
                        {" "}
                      </div>{" "}
                    </div>{" "}
                    <h4 className="text-[20px] font-light text-white/70 tracking-normal mb-4 group-hover:text-white transition-colors duration-300">
                      The agents review the case{" "}
                    </h4>{" "}
                    <p className="text-white/55 text-[14px] leading-[1.75] font-normal mb-6 flex-grow">
                      In the background, a team of specialised agents works
                      through the note against the patient 's record, clinical
                      guidelines, and their medication list and challenges each
                      other 's conclusions.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="relative flex flex-col group">
                    <div className="relative z-10 flex items-center mb-8">
                      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-mono text-[13px] border transition-all duration-300 shrink-0 bg-white/5 border-white/15 text-white/60 group-hover:border-white group-hover:text-white">
                        03{" "}
                      </div>{" "}
                    </div>{" "}
                    <h4 className="text-[20px] font-light text-white/70 tracking-normal mb-4 group-hover:text-white transition-colors duration-300">
                      You get a review, not a verdict{" "}
                    </h4>{" "}
                    <p className="text-white/55 text-[14px] leading-[1.75] font-normal mb-6 flex-grow">
                      Suggested differentials, flagged risks, missing workup,
                      and the finding behind each one.Accept it, edit it, or
                      overrule it.The note is yours.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="diagnostic-support"
            className="py-16 md:py-20 relative bg-system-base border-t border-[rgba(0,0,0,0.05)]"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 md:mb-8">
                  <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-system-muted mb-6">
                    05 THE AGENT TEAM{" "}
                  </h2>{" "}
                  <h3 className="text-3xl md:text-5xl font-light text-system-primary tracking-normal leading-[1.1] mb-6">
                    One model gives you an answer. <br /> A team gives you a
                    review.{" "}
                  </h3>{" "}
                  <p className="text-[15px] md:text-base text-system-muted leading-[1.7] font-light max-w-3xl">
                    MedFliq doesn 't send your case to a single language model
                    and return whatever comes back.Each agent has one job, and a
                    validation step drops anything they can 't back up before it
                    reaches you.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="flex flex-col border-t border-[rgba(0,0,0,0.05)] pt-6">
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Red flag screening{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Deterministic can 't-miss rules that fire identically on
                      every case, every time.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Documentation{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Turns the consultation into a structured, standards -
                      aligned clinical note.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      History{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Assembles the longitudinal picture from prior visits, labs
                      and records.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Independent differential{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Builds its own differential from symptoms and findings
                      alone deliberately blind to the assessment you wrote, so
                      it cannot simply agree with you.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Medication safety{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Screens for interactions, allergies, contraindications and
                      dosing risk.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Guideline check{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Tests the plan against Indian national programme guidance
                      first, wider guidelines second.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-4 sm:gap-8 py-5 border-b border-[rgba(0,0,0,0.05)] items-baseline">
                    <div className="text-[17px] font-medium text-system-primary">
                      Case summary{" "}
                    </div>{" "}
                    <div className="text-[15px] text-system-muted font-normal leading-[1.6]">
                      Compresses everything that survived validation into one
                      short read, capped at what 's worth your attention.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="mt-0 bg-system-surface p-6 sm:p-8 border border-[rgba(0,0,0,0.05)] border-t-0 rounded-b-[8px]">
                    <p className="text-[15px] text-system-primary leading-[1.6] font-normal">
                      <strong> Validation </strong> — re-checks every claim
                      against the record, drops anything without a source,
                      merges duplicate flags, and decides the small number worth
                      showing you.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="compliance"
            className="py-16 md:py-20 relative bg-system-base border-t border-[rgba(0,0,0,0.05)]"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-5xl mb-12 md:mb-16">
                <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-system-muted mb-6">
                  06 BUILT HERE, FOR HERE{" "}
                </h2>{" "}
                <h3 className="text-3xl md:text-5xl font-light text-system-primary tracking-normal leading-[1.1] mb-6">
                  Designed around Indian clinical practice, <br />
                  not translated into it.{" "}
                </h3>{" "}
                <p className="text-[15px] md:text-base text-system-muted leading-[1.7] font-normal">
                  Much of the clinical AI a doctor can buy today was built for a
                  different health system and adapted afterwards.MedFliq starts
                  from the OPD queue, the consultation that lasts minutes rather
                  than tens of minutes, and the standards Indian clinics are
                  actually held to.{" "}
                </p>{" "}
              </div>{" "}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 h-fit">
                <div className="bg-system-surface p-8 rounded-[12px] border border-[rgba(0,0,0,0.05)] hover:border-[rgba(0,0,0,0.1)] transition-all hover:shadow-sm group flex flex-col h-full">
                  <h4 className="text-[19px] font-light text-system-primary mb-4 tracking-normal group-hover:text-system-accent transition-colors">
                    Built to Indian standards{" "}
                  </h4>{" "}
                  <p className="text-system-muted leading-[1.6] text-[14px] font-normal flex-grow">
                    Record structure and documentation shaped around NMC record
                    - keeping requirements, with NABH documentation alignment
                    and ABDM interoperability on the roadmap.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-system-surface p-8 rounded-[12px] border border-[rgba(0,0,0,0.05)] hover:border-[rgba(0,0,0,0.1)] transition-all hover:shadow-sm group flex flex-col h-full">
                  <h4 className="text-[19px] font-light text-system-primary mb-4 tracking-normal group-hover:text-system-accent transition-colors">
                    The languages you consult in
                  </h4>{" "}
                  <p className="text-system-muted leading-[1.6] text-[14px] font-normal flex-grow">
                    Speech recognition tuned for Indian medical speech,
                    including code - switching between English and the local
                    language mid - sentence.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-system-surface p-8 rounded-[12px] border border-[rgba(0,0,0,0.05)] hover:border-[rgba(0,0,0,0.1)] transition-all hover:shadow-sm group flex flex-col h-full">
                  <h4 className="text-[19px] font-light text-system-primary mb-4 tracking-normal group-hover:text-system-accent transition-colors">
                    Your data stays yours{" "}
                  </h4>{" "}
                  <p className="text-system-muted leading-[1.6] text-[14px] font-normal flex-grow">
                    Records are stored in India.Consultation audio is discarded
                    after transcription.Encrypted in transit and at rest, role -
                    based logged access, and clinic data is not used to train
                    models.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="who-its-for"
            className="py-16 md:py-20 relative bg-[#0a0a0a] border-t border-white/5"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-5xl mb-12 md:mb-16">
                <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-white/40 mb-6">
                  07 WHO IT 'S FOR{" "}
                </h2>{" "}
                <h3 className="text-3xl md:text-5xl font-light text-white tracking-normal leading-[1.1] mb-6">
                  What 's running today, <br />
                  and what 's next.{" "}
                </h3>{" "}
              </div>{" "}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col bg-white/[0.04] p-8 md:p-10 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group">
                  <h4 className="text-[22px] font-light text-white/90 mb-4 tracking-normal group-hover:text-system-accent transition-colors">
                    Outpatient clinics{" "}
                  </h4>{" "}
                  <p className="text-[15px] text-white/55 leading-[1.7] font-normal mb-10 flex-grow">
                    Solo practitioners and small practices.Front desk to
                    prescription in one flow, with decision support inside the
                    consultation rather than bolted on beside it.One doctor can
                    be running by the end of the week.{" "}
                  </p>{" "}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-block bg-white text-system-primary text-[13px] font-medium px-8 py-3.5 rounded-[6px] hover:opacity-90 transition-opacity"
                    >
                      Book a demo{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col bg-white/[0.04] p-8 md:p-10 rounded-[12px] border border-white/10 hover:border-white/20 transition-colors group">
                  <h4 className="text-[22px] font-light text-white/90 mb-4 tracking-normal group-hover:text-system-accent transition-colors">
                    Hospitals{" "}
                  </h4>{" "}
                  <p className="text-[15px] text-white/55 leading-[1.7] font-normal mb-10 flex-grow">
                    Multi - department institutions needing consistent
                    documentation, auditable clinical reasoning and standards -
                    aligned records across teams.This is the Fliq 360 tier, and
                    it 's in build talk to us if you want to shape it.{" "}
                  </p>{" "}
                  <div className="pt-2">
                    <span className="inline-block bg-white/5 text-white/50 border border-white/10 text-[13px] font-medium px-8 py-3.5 rounded-[6px] tracking-wide uppercase text-[11px]">
                      In Development{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            id="contact"
            className="py-16 md:py-20 relative bg-system-surface border-t border-[rgba(0,0,0,0.05)]"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
                <div className="max-w-xl">
                  <h2 className="font-mono tracking-[0.1em] text-[11px] font-light uppercase text-gray-400 mb-6">
                    08 BOOK A DEMO{" "}
                  </h2>{" "}
                  <h3 className="text-4xl md:text-5xl font-light text-system-primary mb-8 tracking-normal leading-[1.1]">
                    See it on a real case.{" "}
                  </h3>{" "}
                  <p className="text-system-muted text-[15px] leading-[1.8] font-light mb-12">
                    Bring a de - identified consultation from last week.We 'll
                    show you what the agent team surfaces including the things
                    you 'd want a second look at.{" "}
                  </p>{" "}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-l-2 border-system-accent pl-4">
                      <span className="font-mono text-xs font-bold text-system-primary">
                        CALL US{" "}
                      </span>{" "}
                      <a
                        href="tel:+917397735507"
                        className="text-sm font-light text-system-muted hover:text-system-accent transition-colors"
                      >
                        +91 7397 735 507{" "}
                      </a>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-4 border-l-2 border-system-accent pl-4">
                      <span className="font-mono text-xs font-bold text-system-primary">
                        EMAIL US{" "}
                      </span>{" "}
                      <a
                        href="mailto:info@medfliq.com"
                        className="text-sm font-light text-system-muted hover:text-system-accent transition-colors"
                      >
                        info @medfliq.com{" "}
                      </a>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-4 border-l-2 border-system-accent pl-4">
                      <span className="font-mono text-xs font-bold text-system-primary">
                        LINKEDIN{" "}
                      </span>{" "}
                      <a
                        href="https://linkedin.com/company/medfliq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-light text-system-muted hover:text-system-accent transition-colors"
                      >
                        Follow us on LinkedIn{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="bg-system-base p-8 md:p-12 rounded-[12px] border border-[rgba(0,0,0,0.05)] shadow-xl relative overflow-hidden">
                  <form className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="block text-xs font-mono tracking-widest uppercase text-system-muted"
                        >
                          First Name *
                        </label>{" "}
                        <input
                          id="firstName"
                          autocomplete="given-name"
                          maxlength="50"
                          className="w-full bg-system-surface border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-sm text-system-primary focus:outline-none focus:border-system-accent transition-colors disabled:opacity-50"
                          placeholder="Jane"
                          type="text"
                          value=""
                          name="firstName"
                        />
                      </div>{" "}
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="block text-xs font-mono tracking-widest uppercase text-system-muted"
                        >
                          Last Name *
                        </label>{" "}
                        <input
                          id="lastName"
                          autocomplete="family-name"
                          maxlength="50"
                          className="w-full bg-system-surface border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-sm text-system-primary focus:outline-none focus:border-system-accent transition-colors disabled:opacity-50"
                          placeholder="Doe"
                          type="text"
                          value=""
                          name="lastName"
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono tracking-widest uppercase text-system-muted"
                      >
                        Email *
                      </label>{" "}
                      <input
                        id="email"
                        autocomplete="email"
                        maxlength="100"
                        className="w-full bg-system-surface border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-sm text-system-primary focus:outline-none focus:border-system-accent transition-colors disabled:opacity-50"
                        placeholder="jane@hospital.com"
                        type="email"
                        value=""
                        name="email"
                      />
                    </div>{" "}
                    <div className="space-y-2">
                      <label
                        htmlFor="clinicName"
                        className="block text-xs font-mono tracking-widest uppercase text-system-muted"
                      >
                        Clinic / Hospital Name{" "}
                      </label>{" "}
                      <input
                        id="clinicName"
                        autocomplete="organization"
                        maxlength="100"
                        className="w-full bg-system-surface border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-sm text-system-primary focus:outline-none focus:border-system-accent transition-colors disabled:opacity-50"
                        placeholder="City Hospital"
                        type="text"
                        value=""
                        name="clinicName"
                      />
                    </div>{" "}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono tracking-widest uppercase text-system-muted"
                      >
                        How can we help ? *
                      </label>{" "}
                      <textarea
                        id="message"
                        rows="4"
                        maxlength="1000"
                        className="w-full bg-system-surface border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-sm text-system-primary focus:outline-none focus:border-system-accent transition-colors resize-none disabled:opacity-50"
                        placeholder="Tell us about your needs..."
                      ></textarea>{" "}
                      <div className="text-[10px] text-right text-system-muted/50 mt-1">
                        0 / 1000{" "}
                      </div>{" "}
                    </div>{" "}
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-8 py-4 font-light hover:bg-black/80 transition-all text-[15px] tracking-wide mt-4 disabled:bg-black/40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <span> Send Message→ </span>{" "}
                    </button>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </main>{" "}
        <footer className="bg-system-base text-system-muted py-16 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2.5fr_1fr_1fr] gap-12 pb-12 border-b border-[rgba(0,0,0,0.05)]">
              <div>
                <a
                  className="inline-flex items-center gap-1 mb-5 -ml-3"
                  href="/"
                >
                  <img
                    alt="MedFliq Logo"
                    className="h-10 w-auto object-contain"
                    src="/medfliq-horizontal.webp"
                  />
                </a>{" "}
                <p className="text-system-muted text-[14px] leading-[1.75] font-normal max-w-[320px]">
                  Agentic clinical decision support for Indian outpatient
                  clinics and hospitals.Doctor - in - the - loop by design.{" "}
                </p>{" "}
              </div>{" "}
              <div>
                <h3 className="text-[10px] font-mono tracking-[0.15em] text-system-muted uppercase mb-5">
                  PLATFORM{" "}
                </h3>{" "}
                <div className="flex flex-col space-y-4">
                  <a
                    className="text-[14px] text-system-primary hover:text-system-accent transition-colors"
                    href="/#solutions"
                  >
                    Problem{" "}
                  </a>{" "}
                  <a
                    className="text-[14px] text-system-primary hover:text-system-accent transition-colors"
                    href="/#how-it-works"
                  >
                    How it works{" "}
                  </a>{" "}
                  <a
                    className="text-[14px] text-system-primary hover:text-system-accent transition-colors"
                    href="/#compliance"
                  >
                    Compliance{" "}
                  </a>{" "}
                  <a
                    className="text-[14px] text-system-primary hover:text-system-accent transition-colors"
                    href="/#who-its-for"
                  >
                    What 's live{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div>
                <h3 className="text-[10px] font-mono tracking-[0.15em] text-system-muted uppercase mb-5">
                  CONTACT{" "}
                </h3>{" "}
                <div className="flex flex-col space-y-4 text-[14px] text-system-primary font-normal">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone text-system-muted shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                        {" "}
                      </path>{" "}
                    </svg>{" "}
                    <a
                      href="tel:+917397735507"
                      className="hover:text-system-accent transition-colors"
                    >
                      +91 7397 735 507{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail text-system-muted shrink-0"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"> </path>{" "}
                      <rect x="2" y="4" width="20" height="16" rx="2">
                        {" "}
                      </rect>{" "}
                    </svg>{" "}
                    <a
                      href="mailto:info@medfliq.com"
                      className="hover:text-system-accent transition-colors"
                    >
                      info @medfliq.com{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-system-muted shrink-0"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                        {" "}
                      </path>{" "}
                      <rect x="2" y="9" width="4" height="12">
                        {" "}
                      </rect>{" "}
                      <circle cx="4" cy="4" r="2">
                        {" "}
                      </circle>{" "}
                    </svg>{" "}
                    <a
                      href="https://linkedin.com/company/medfliq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-system-accent transition-colors"
                    >
                      LinkedIn{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono">
              <div className="text-[11px] text-system-muted flex flex-wrap items-center gap-4 sm:gap-6">
                <span> ©2026 MedFliq </span>{" "}
                <div className="flex items-center gap-4">
                  <a
                    className="hover:text-system-accent transition-colors"
                    href="/privacy"
                  >
                    Privacy policy{" "}
                  </a>{" "}
                  <a
                    className="hover:text-system-accent transition-colors"
                    href="/terms"
                  >
                    Terms of Use{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <p className="text-[10px] text-system-muted max-w-sm text-left md:text-right leading-[1.6]">
                MedFliq supports clinical decision - making.It does not
                diagnose, prescribe, or act without the treating clinician.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </footer>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
