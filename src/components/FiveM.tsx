"use client";

import { motion } from "framer-motion";
import { fivemScreenshots } from "@/data";
import { FadeUp } from "./TextReveal";

export default function FiveM() {
  return (
    <section id="fivem" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-orange-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[280px] w-[280px] rounded-full bg-amber-500/[0.03] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <FadeUp>
          <p className="font-display mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            FiveM
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="font-display mb-6 text-3xl font-bold text-heading md:text-5xl">
            My FiveM work
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="mb-14 max-w-2xl text-body">
            I&apos;ve worked with a custom FiveM framework and made scripts and
            interface changes for servers using it. The framework isn&apos;t
            something I made from scratch, but I&apos;ve enjoyed learning how it
            works and building things with it.
          </p>
        </FadeUp>

        <p className="font-display mb-6 text-xs uppercase tracking-[0.28em] text-muted">
          Screenshots from my FiveM work
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {fivemScreenshots.map((src, i) => (
            <motion.a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className={`group relative block aspect-video overflow-hidden rounded-xl border border-white/5 bg-dark-100 transition-colors duration-300 hover:border-accent/40 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`FiveM work screenshot ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
