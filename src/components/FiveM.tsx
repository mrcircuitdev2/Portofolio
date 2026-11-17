"use client";

import { motion } from "framer-motion";
import { fivemFrameworks, fivemScreenshots, fivemServers } from "@/data";
import type { FiveMFramework, FiveMServer } from "@/data";
import { FadeUp } from "./TextReveal";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-body transition-colors duration-300 group-hover:border-accent/20 group-hover:text-body/90">
      {children}
    </span>
  );
}

function FrameworkCard({
  framework,
  index,
}: {
  framework: FiveMFramework;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-dark-400/60 bg-dark-200/80 p-6 transition-colors duration-300 hover:border-accent/25"
    >
      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.28em] text-accent/80">
          {framework.category}
        </span>
        <span className="font-mono text-[10px] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h4 className="font-display mb-2 text-lg font-bold text-heading">
        {framework.title}
      </h4>
      <p className="mb-5 text-sm leading-relaxed text-body/80">
        {framework.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {framework.tags.map((tag) => (
          <Tag key={`${framework.id}-${tag}`}>{tag}</Tag>
        ))}
      </div>
    </motion.article>
  );
}

function ServerCard({
  server,
  index,
}: {
  server: FiveMServer;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-dark-400/60 bg-dark-200/80 p-6 transition-colors duration-300 hover:border-accent/25"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-heading">
            {server.name}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-accent/80">
            {server.role}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-[10px] text-body/70">
          {server.period}
        </span>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-body/80">
        {server.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {server.tags.map((tag) => (
          <Tag key={`${server.id}-${tag}`}>{tag}</Tag>
        ))}
      </div>
    </motion.div>
  );
}

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
            Custom frameworks, built from scratch
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="mb-14 max-w-2xl text-body">
            All of the FiveM work here runs on frameworks I built myself — no
            off-the-shelf ESX or QBCore resources. Scripts, interfaces, jobs,
            vehicles, and persistence were written in Lua and tuned for the
            communities I work with.
          </p>
        </FadeUp>

        {/* Screenshot gallery */}
        <div className="mb-6 flex items-end justify-between gap-6">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-muted">
            In-game captures
          </p>
          <span className="font-mono text-[10px] text-muted">
            {fivemScreenshots.length} screenshots
          </span>
        </div>

        <div className="mb-24 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
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
                alt={`Custom FiveM framework screenshot ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-2 left-3 font-mono text-[10px] text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Framework systems */}
        <FadeUp>
          <p className="font-display mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            What I build
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h3 className="font-display mb-4 text-2xl font-bold text-heading md:text-4xl">
            Custom framework systems
          </h3>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="mb-12 max-w-xl text-body">
            Every module below was written for the servers I develop, not pulled
            from a public resource pack.
          </p>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fivemFrameworks.map((framework, i) => (
            <FrameworkCard key={framework.id} framework={framework} index={i} />
          ))}
        </div>

        {/* Servers */}
        <div className="mt-24">
          <FadeUp>
            <p className="font-display mb-3 text-sm uppercase tracking-[0.3em] text-accent">
              Servers
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h3 className="font-display mb-4 text-2xl font-bold text-heading md:text-4xl">
              Servers I&apos;ve worked with
            </h3>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mb-12 max-w-xl text-body">
              Communities where I&apos;ve shipped custom framework work as a
              developer.
            </p>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fivemServers.map((server, i) => (
              <ServerCard key={server.id} server={server} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
