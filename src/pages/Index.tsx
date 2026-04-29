import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const shows = [
  {
    date: "28 MAR 2026",
    venue: "Lyric Theatre, Gold Reef City Casino",
    city: "Johannesburg, ZA",
    status: "available" as const,
    ticketUrl: "https://www.webtickets.co.za/v2/Event.aspx?itemid=1554567432",
    vendor: "Webtickets",
  },
  {
    date: "10 APR 2026",
    venue: "Wild Coast Sun",
    city: "Bizana / Port Edward, ZA",
    status: "available" as const,
    ticketUrl: "https://www.webtickets.co.za/v2/Event.aspx?itemid=1554567433",
    vendor: "Webtickets",
  },
  {
    date: "13 JUN 2026",
    venue: "Opera Theatre, The Playhouse",
    city: "Durban, ZA",
    status: "available" as const,
    ticketUrl: "https://www.webtickets.co.za/v2/Event.aspx?itemid=1554567434",
    vendor: "Webtickets",
  },
];

const releases = [
  { title: "Lindiwe (Deluxe)", year: "2025", type: "Album", tracks: "17 tracks", feat: "feat. Brenden Praise, Da Muziqal Chef, Kelvin Momo, Dumi Mkokstad, Xolly Mncwango, Ndabo Zulu, Bongane Sax", latest: true, label: "Sginci Media / EMPIRE" },
  { title: "Lindiwe", year: "Jan 2025", type: "Album", tracks: "12 tracks" },
  { title: "Moyongcwele 2.0", year: "2024", type: "Single", feat: "feat. Xolly Mncwango & Dumi Mkokstad" },
  { title: "Imisebenzi", year: "2024", type: "Single", feat: "feat. Aymos & Starr Healer" },
  { title: "Moyongcwele", year: "2024", type: "Single" },
  { title: "Incwadi", year: "2024", type: "Single", feat: "feat. Eemoh" },
  { title: "Amathuna", year: "2024", type: "Single" },
  { title: "Lu Strong", year: "2023", type: "Single", feat: "feat. Nomfundo Moh" },
  { title: "Ungowami", year: "2023", type: "Single" },
];

const stores = ["Spotify", "Apple Music", "YouTube Music", "Deezer", "Tidal", "Bandcamp"];
const socials = [
  { name: "Instagram", handle: "@nontokozomkhize" },
  { name: "TikTok", handle: "@nontokozomkhize" },
  { name: "Facebook", handle: "Nontokozo Mkhize" },
  { name: "YouTube", handle: "Nontokozo Mkhize" },
  { name: "Twitter / X", handle: "@nontokozomkhize" },
];

const posts = [
  { title: "Writing Lindiwe in KwaZulu-Natal", excerpt: "How home, hills, and grandmother's hymns shaped an album about identity and grace." },
  { title: "What backing vocals taught me about being a solo artist", excerpt: "Six years behind giants — and the lessons I carry to centre stage." },
  { title: "Faith, Esandleni, and the week that changed everything", excerpt: "On surrender, streaming numbers, and learning to let the song do the work." },
];

const Index = () => {
  return (
    <div className="bg-ivory text-espresso min-h-screen">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-screen pt-28 pb-20 px-6 lg:px-12 bg-espresso text-ivory grain overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-3 md:gap-4 h-[420px] md:h-[560px]">
            <div className="col-span-6 md:col-span-4 row-span-2 overflow-hidden">
              <img src={hero3} alt="Nontokozo performing live in black and white" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-6 md:col-span-5 overflow-hidden">
              <img src={hero1} alt="Nontokozo and band on red-lit stage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="hidden md:block col-span-3 overflow-hidden">
              <img src={hero4} alt="Nontokozo at intimate worship event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-6 md:col-span-5 overflow-hidden">
              <img src={hero2} alt="Nontokozo singing on stage in sequined dress" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="hidden md:block col-span-3 overflow-hidden">
              <img src={hero5} alt="Nontokozo at Metro FM radio interview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col items-center text-center">
            <span className="text-gold tracking-[0.5em] text-xs uppercase mb-4">South African Singer-Songwriter</span>
            <h1 className="font-script text-gold leading-[0.88] text-6xl sm:text-7xl md:text-[8rem] lg:text-[11rem]">
              Nontokozo<br />
              <span className="font-serif not-italic text-ivory/90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em]">Mkhize</span>
            </h1>
            <div className="mt-6 flex items-center gap-4 text-ivory/70 text-xs md:text-sm tracking-[0.35em] uppercase">
              <span>Afro-Soul</span>
              <span className="text-gold">·</span>
              <span>Gospel</span>
              <span className="text-gold">·</span>
              <span>Worship</span>
            </div>
            <p className="mt-6 max-w-xl text-ivory/80 text-lg md:text-xl font-serif italic text-balance">
              "A voice that stills rooms and moves hearts."
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#shows" className="px-8 py-3.5 bg-gold text-espresso text-xs tracking-[0.3em] uppercase font-medium hover:bg-ivory transition-colors">
                Upcoming Shows
              </a>
              <a href="#music" className="px-8 py-3.5 border border-ivory/40 text-ivory text-xs tracking-[0.3em] uppercase font-medium hover:bg-ivory hover:text-espresso transition-colors">
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <span className="text-terracotta tracking-[0.4em] text-xs uppercase">The Artist</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-[0.95]">
              Born in <em className="text-gold">Inanda</em>, called to the stage.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-espresso/85">
            <p>
              <span className="font-serif italic text-xl">Nontokozo Hlengwa Mkhize</span> (born 2000, Inanda, KwaZulu-Natal) is a South African Afro-soul and gospel singer-songwriter. She began her musical journey in 2017 as a backing vocalist, working alongside Benjamin Dube, Mondli Ngcobo, Naima Kay, Dumi Mkokstad, and Sjava.
            </p>
            <p>
              She launched her solo career in 2023 with her debut single <em>"Lu Strong"</em> (feat. Nomfundo Moh). Her debut album <em>Lindiwe</em> (2025, Sginci Media / EMPIRE) debuted at #8 on the SA Top Albums Chart and surpassed 1 million streams in its first week. Her single <em>"Esandleni"</em> became the most-streamed solo song by a female artist in a single week on Spotify South Africa, surpassing Adele's "Easy on Me."
            </p>
            <p className="text-espresso/70">
              Awards: Best Newcomer — Metro FM Music Awards 2024 · Best Female Artist in Southern Africa — AFRIMA 2025 · Amapiano Artist of the Year & Gospel Artist of the Year — Basadi in Music Awards 2025.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-espresso/10">
          {[
            { n: "40M+", l: "Streams" },
            { n: "3", l: "Awards" },
            { n: "4", l: "Countries Toured" },
            { n: "1", l: "Album" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="bg-ivory p-8 md:p-10 text-center h-full">
                <div className="font-serif text-5xl md:text-6xl text-gold">{s.n}</div>
                <div className="mt-2 text-xs tracking-[0.3em] uppercase text-espresso/60">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHOWS */}
      <section id="shows" className="py-24 md:py-32 px-6 lg:px-12 bg-espresso text-ivory">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-gold tracking-[0.4em] text-xs uppercase">On Tour</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-4 leading-[0.95]">Upcoming Shows</h2>
            <div className="mt-8 inline-block border border-gold/40 px-6 py-3">
              <p className="font-serif italic text-gold text-lg md:text-xl">Lindiwe Album Tour — Live in Concert 2026</p>
            </div>
          </Reveal>

          <div className="mt-14 divide-y divide-ivory/15 border-t border-b border-ivory/15">
            {shows.map((s, i) => (
              <Reveal key={s.venue} delay={i * 80}>
                <div className="grid grid-cols-12 gap-4 py-7 items-center group hover:bg-ivory/5 transition-colors px-2">
                  <div className="col-span-12 md:col-span-3 font-serif text-2xl md:text-3xl text-gold">{s.date}</div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="text-lg md:text-xl">{s.venue}</div>
                    <div className="text-ivory/60 text-sm mt-1">{s.city}</div>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:text-right">
                    {s.status === "available" ? (
                      <a
                        href={s.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buy tickets for ${s.venue} on ${s.date} via ${s.vendor}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-espresso transition-colors"
                      >
                        Buy Tickets
                        <span aria-hidden className="text-base leading-none">↗</span>
                      </a>
                    ) : s.status === "sold-out" ? (
                      <span className="inline-block px-6 py-3 bg-terracotta text-ivory text-xs tracking-[0.3em] uppercase">Sold Out</span>
                    ) : (
                      <span className="inline-block px-6 py-3 border border-ivory/30 text-ivory/60 text-xs tracking-[0.3em] uppercase">Coming Soon</span>
                    )}
                    {s.status === "available" && (
                      <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ivory/40 md:text-right">via {s.vendor}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-ivory/50 text-sm tracking-wider">Tickets available at Webtickets.</p>
        </div>
      </section>

      {/* MUSIC / DISCOGRAPHY */}
      <section id="music" className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-terracotta tracking-[0.4em] text-xs uppercase">Discography</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-4 leading-[0.95]">The Music</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {releases.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 80}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-gradient-warm">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="font-script text-4xl md:text-5xl text-gold/90 text-center leading-none">
                        {r.title.split(" ")[0]}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-30 transition-opacity" />
                    {r.latest && (
                      <span className="absolute top-3 left-3 bg-gold text-espresso text-[10px] tracking-[0.25em] uppercase px-2 py-1">Latest</span>
                    )}
                    <span className="absolute top-3 right-3 border border-ivory/50 text-ivory text-[10px] tracking-[0.25em] uppercase px-2 py-1 bg-espresso/40">
                      {r.type}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-espresso/55 mt-1">{r.year}{r.tracks ? ` · ${r.tracks}` : ""}</p>
                    {r.feat && <p className="text-xs text-espresso/60 mt-2 italic">{r.feat}</p>}
                    {r.label && <p className="text-xs text-terracotta mt-1 tracking-wider">{r.label}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="py-24 md:py-32 px-6 lg:px-12 bg-[hsl(36,25%,88%)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-terracotta tracking-[0.4em] text-xs uppercase">Connect</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-4 leading-[0.95]">Stay Close.</h2>
          </Reveal>

          {/* Stores */}
          <Reveal delay={100}>
            <div className="mt-16">
              <h3 className="font-serif text-2xl mb-6 text-espresso/80">Listen On</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {stores.map((s) => (
                  <a key={s} href="#" className="px-5 py-4 bg-ivory border border-espresso/10 text-center text-sm tracking-wider hover:bg-espresso hover:text-ivory transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Socials */}
          <Reveal delay={150}>
            <div className="mt-16">
              <h3 className="font-serif text-2xl mb-6 text-espresso/80">Follow</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {socials.map((s) => (
                  <a key={s.name} href="#" className="flex justify-between items-center px-5 py-4 bg-ivory border border-espresso/10 hover:border-gold transition-colors group">
                    <span className="text-sm tracking-[0.2em] uppercase">{s.name}</span>
                    <span className="font-serif italic text-terracotta group-hover:text-gold">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Blog */}
          <Reveal delay={200}>
            <div className="mt-20">
              <h3 className="font-serif text-2xl mb-6 text-espresso/80">Journal</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {posts.map((p) => (
                  <article key={p.title} className="bg-ivory p-7 border border-espresso/10 hover:shadow-warm transition-shadow group cursor-pointer">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Reflections</span>
                    <h4 className="font-serif text-2xl mt-3 leading-tight group-hover:text-terracotta transition-colors">{p.title}</h4>
                    <p className="mt-3 text-sm text-espresso/70 leading-relaxed">{p.excerpt}</p>
                    <span className="mt-4 inline-block text-xs tracking-[0.3em] uppercase text-espresso/60">Read →</span>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-warm text-ivory text-center grain">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Bring Nontokozo to <em className="text-gold">your stage.</em>
          </h2>
          <Link to="/bookings" className="inline-block mt-10 px-10 py-4 bg-gold text-espresso text-xs tracking-[0.35em] uppercase hover:bg-ivory transition-colors">
            Make a Booking
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
