import { useEffect, useRef } from 'react'

function useRevealOnScroll() {
  const refs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    Object.values(refs.current).forEach(el => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const setRef = (key) => (el) => {
    if (el) refs.current[key] = el
  }
  return setRef
}

function App() {
  const setSectionRef = useRevealOnScroll()

  return (
    <div className="min-h-screen bg-canvas-700 text-white">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-canvas-500/60 bg-canvas-700/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8 lg:py-5">
          <a href="#hero" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-400 via-brand-500 to-brand-700 shadow-soft-xl lg:h-12 lg:w-12">
              <span className="text-lg font-bold tracking-tight text-canvas-700 lg:text-xl">TV</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-400 lg:text-sm">
                PT. Gandrung Media Corp
              </span>
              <span className="text-sm font-medium text-white lg:text-base">TVCloud</span>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.12em] text-white/65 lg:flex lg:gap-8 lg:text-base">
            <a href="#about"        className="transition hover:text-brand-400">Solusi</a>
            <a href="#venues"       className="transition hover:text-brand-400">Venue</a>
            <a href="#how-it-works" className="transition hover:text-brand-400">Cara Kerja</a>
            <a href="#benefits"     className="transition hover:text-brand-400">Keunggulan</a>
            <a href="#contact"      className="transition hover:text-brand-400">Hubungi Kami</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-canvas-700 shadow-soft-xl transition hover:bg-brand-400 lg:inline-flex lg:px-6 lg:py-3"
          >
            Jadwalkan Demo
          </a>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center">
          <div className="h-96 w-225 rounded-full bg-brand-400/20 blur-[140px]" />
        </div>

        {/* ── Hero ── */}
        <section
          id="hero"
          ref={setSectionRef('hero')}
          className="section-fade border-b border-canvas-500/40 bg-linear-to-b from-canvas-950/60 via-canvas-700 to-canvas-700"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-24 pt-16 md:flex-row md:items-start md:pt-20 lg:gap-16 lg:px-8 lg:pb-32 lg:pt-28">
            <div className="flex-1 space-y-6 md:space-y-8 lg:space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-canvas-500/70 bg-canvas-800/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/65 shadow-soft-xl lg:px-5 lg:py-2 lg:text-sm">
                <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(242,200,91,0.9)]" />
                <span>Digital Out-of-Home • Cloud Based</span>
              </div>
              <div className="space-y-5 lg:space-y-6">
                <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Jangkau pengunjung di destinasi terbaik dengan
                  <span className="bg-linear-to-r from-brand-300 via-brand-400 to-white bg-clip-text text-transparent"> TVCloud</span>.
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg xl:text-xl">
                  TVCloud adalah jaringan iklan digital berbasis cloud milik PT. Gandrung Media Corp
                  yang menayangkan promo Anda di TV & signage di berbagai venue ikonik,
                  mulai dari area wisata, pusat belanja, hingga hunian.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <a
                  href="#contact"
                  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-canvas-700 shadow-soft-xl transition hover:bg-brand-400 lg:px-8 lg:py-3.5 lg:text-base"
                >
                  Mulai Pasang Iklan
                </a>
                <a
                  href="#venues"
                  className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65 transition hover:text-brand-400 lg:text-base"
                >
                  Lihat Venue Kami
                </a>
              </div>
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <div className="text-xl font-semibold text-white lg:text-2xl">6+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50 lg:text-sm">Venue aktif</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-white lg:text-2xl">Wisata & Mall</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50 lg:text-sm">Lokasi strategis</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-white lg:text-2xl">Cloud</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50 lg:text-sm">Konten realtime</div>
                </div>
              </div>
            </div>

            {/* Mockup */}
            <div className="flex-1">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-canvas-500/70 bg-linear-to-b from-canvas-800/80 to-canvas-950/90 p-5 shadow-soft-xl lg:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/50 lg:text-sm">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-brand-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="ml-2 font-medium uppercase tracking-[0.14em]">Live Screen</span>
                  </div>
                  <span className="rounded-full bg-canvas-800/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-brand-400 lg:text-sm">
                    Cloud Synced
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-canvas-800/80">
                  <div className="absolute inset-0 bg-linear-to-br from-brand-500/30 via-brand-400/15 to-canvas-950/80" />
                  <div className="relative flex h-72 flex-col justify-between p-5 lg:h-80 lg:p-6">
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/80 lg:text-sm">
                        Kampanye Promo
                      </p>
                      <h2 className="text-balance text-xl font-semibold tracking-tight text-white lg:text-2xl">
                        "Bali Holiday Flash Sale 50%"
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs text-white/80 lg:text-sm">
                      <div className="rounded-xl bg-canvas-950/60 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 lg:text-xs">Lokasi</p>
                        <p className="mt-1 font-medium">Discovery Mall</p>
                      </div>
                      <div className="rounded-xl bg-canvas-950/60 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 lg:text-xs">Durasi</p>
                        <p className="mt-1 font-medium">15 detik</p>
                      </div>
                      <div className="rounded-xl bg-canvas-950/60 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 lg:text-xs">Status</p>
                        <p className="mt-1 font-medium text-brand-400">Tayang</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-white/50 lg:text-sm">
                  <p>Monitor performa tayangan secara realtime dari dashboard cloud.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About / Solution ── */}
        <section
          id="about"
          ref={setSectionRef('about')}
          className="section-fade border-b border-canvas-500/40 bg-canvas-900"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
            <div className="flex-1 space-y-5 lg:space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                Solusi TVCloud
              </h2>
              <h3 className="max-w-lg text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Satu platform untuk mengelola semua layar digital Anda.
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-white/65 lg:text-lg">
                TVCloud memudahkan brand, agensi, dan pemilik usaha untuk menayangkan konten
                promosi di berbagai layar TV dan signage secara terpusat. Semua berbasis cloud,
                tanpa harus datang ke lokasi.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {[
                {
                  title: 'Cloud-based management',
                  desc: 'Upload, jadwalkan, dan atur playlist konten untuk setiap venue hanya dari satu dashboard.',
                },
                {
                  title: 'Distribusi realtime',
                  desc: 'Perubahan konten tersinkron otomatis ke perangkat di venue melalui koneksi internet.',
                },
                {
                  title: 'Jadwal fleksibel',
                  desc: 'Atur jam tayang, hari aktif, hingga segmentasi venue sesuai campaign.',
                },
                {
                  title: 'Monitoring terpusat',
                  desc: 'Pantau status perangkat, konten yang sedang tayang, hingga riwayat kampanye.',
                },
              ].map(item => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 shadow-soft-xl lg:p-6"
                >
                  <h4 className="text-base font-semibold text-white lg:text-lg">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/65 lg:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Venues ── */}
        <section
          id="venues"
          ref={setSectionRef('venues')}
          className="section-fade border-b border-canvas-500/40 bg-canvas-700"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                  Jaringan Venue
                </h2>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Lokasi strategis dengan traffic pengunjung tinggi.
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/65 lg:text-base">
                Saat ini TVCloud telah hadir di 6 venue pilihan yang menjangkau wisatawan,
                keluarga, profesional, dan penghuni residensial.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
              {[
                { name: 'Floating Market Lembang',     city: 'Bandung',        type: 'Wisata Keluarga',        img: '/images/venue-floating-market.jpeg'          },
                { name: 'Paskal Food Market',           city: 'Bandung',        type: 'Food Market & Lifestyle', img: '/images/venue-paskal-foodmarket.jpeg'        },
                { name: 'Discovery Mall Bali',          city: 'Kuta, Bali',     type: 'Mall & Tourism Hub',     img: '/images/venue-discovery-mall.png'            },
                { name: 'Plaza Renon Bali',             city: 'Denpasar, Bali', type: 'Lifestyle Mall',         img: '/images/venue-plaza-renon.png'               },
                { name: 'Perumahan Singgasana Pradana', city: 'Bandung',        type: 'Residential Area',       img: '/images/venue-singgasana-pradana.png'        },
                { name: 'RSPPN Soedirman',              city: 'Jakarta',        type: 'Rumah Sakit',            img: '/images/venue-rsppn-soedirman-jaksel.png'    },
              ].map((venue) => (
                <div
                  key={venue.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-canvas-500/60 bg-canvas-800/60 shadow-soft-xl transition-transform duration-300 hover:-translate-y-1 hover:border-brand-400/70"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden lg:h-52">
                    <img
                      src={venue.img}
                      alt={venue.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* overlay gradient bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/70 via-transparent to-transparent" />
                    {/* badge on image */}
                    <span className="absolute bottom-3 left-3 rounded-full bg-canvas-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-400 backdrop-blur-sm lg:text-xs">
                      {venue.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                    <div>
                      <h4 className="text-base font-semibold text-white lg:text-lg">
                        {venue.name}
                      </h4>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-white/50 lg:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {venue.city}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-white/40 lg:text-sm">
                      <span>Slot tayang terbatas.</span>
                      <span className="rounded-full bg-canvas-600/80 px-3 py-1 text-[10px] font-medium text-brand-300 group-hover:bg-brand-500/20 lg:text-xs">
                        TVCloud Venue
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section
          id="how-it-works"
          ref={setSectionRef('how-it-works')}
          className="section-fade border-b border-canvas-500/40 bg-canvas-900"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1 space-y-5 lg:space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                  Cara Kerja
                </h2>
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Dari file konten Anda ke layar di venue, dalam hitungan menit.
                </h3>
                <p className="text-base leading-relaxed text-white/65 lg:text-lg">
                  Proses pasang iklan di TVCloud dirancang sesederhana mungkin, tanpa perlu instalasi rumit
                  di sisi klien. Kami menangani infrastruktur, Anda fokus ke konten.
                </p>
              </div>
              <ol className="flex-1 space-y-4 lg:space-y-5">
                {[
                  {
                    step: '01',
                    title: 'Diskusi kebutuhan & target audiens',
                    desc: 'Kami bantu pilih venue terbaik dan format layar yang paling relevan dengan campaign Anda.',
                  },
                  {
                    step: '02',
                    title: 'Siapkan materi kreatif',
                    desc: 'Kirimkan materi video atau visual, atau gunakan tim kreatif kami untuk produksi konten.',
                  },
                  {
                    step: '03',
                    title: 'Penjadwalan tayang via cloud',
                    desc: 'Konten diunggah dan dijadwalkan di dashboard TVCloud, dengan durasi & periode sesuai kesepakatan.',
                  },
                  {
                    step: '04',
                    title: 'Monitoring & optimasi',
                    desc: 'Kami pantau tayangan di venue dan memberikan update berkala terkait performa kampanye.',
                  },
                ].map(item => (
                  <li
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-4 shadow-soft-xl lg:gap-5 lg:p-5"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-canvas-700 lg:h-12 lg:w-12 lg:text-base">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white lg:text-base">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/65 lg:text-base">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section
          id="benefits"
          ref={setSectionRef('benefits')}
          className="section-fade border-b border-canvas-500/40 bg-canvas-700"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex-1 space-y-5 lg:space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                  Keunggulan TVCloud
                </h2>
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Lebih relevan dari iklan TV tradisional, lebih hidup dari iklan digital biasa.
                </h3>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
                {[
                  {
                    title: 'Audiens yang hadir secara fisik',
                    desc: 'Menjangkau pengunjung yang benar-benar berada di lokasi, bukan hanya impression di layar gadget.',
                  },
                  {
                    title: 'Konten dinamis & kontekstual',
                    desc: 'Sesuaikan konten dengan event, musim liburan, atau jam tertentu di setiap venue.',
                  },
                  {
                    title: 'Brand safety terjaga',
                    desc: 'Lingkungan tayang yang kurasi, aman untuk brand premium, keluarga, dan institusi.',
                  },
                  {
                    title: 'Tanpa investasi perangkat',
                    desc: 'Infrastruktur layar dan player kami yang sediakan. Anda hanya membayar slot tayang.',
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 shadow-soft-xl lg:p-6"
                  >
                    <h4 className="text-base font-semibold text-white lg:text-lg">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/65 lg:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics / CTA ── */}
        <section
          id="metrics"
          ref={setSectionRef('metrics')}
          className="section-fade border-b border-canvas-500/40 bg-canvas-900"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] lg:gap-12">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                  Angka Utama
                </h2>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Dibangun untuk campaign berkualitas dengan coverage kuat di area wisata & lifestyle.
                </h3>
                <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:gap-6">
                  {[
                    { value: '6+',   label: 'Venue aktif',        sub: 'Dan terus bertambah sesuai ekspansi jaringan.' },
                    { value: '3',    label: 'Kota utama',          sub: 'Bandung, Bali, Jakarta (hingga saat ini).'     },
                    { value: 'High', label: 'Traffic pengunjung',  sub: 'Venue dengan arus pengunjung harian stabil.'   },
                  ].map(stat => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 shadow-soft-xl lg:p-6"
                    >
                      <div className="text-3xl font-semibold text-brand-400 lg:text-4xl">{stat.value}</div>
                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/50 lg:text-base">
                        {stat.label}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/65 lg:text-base">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-3xl border border-brand-500/50 bg-canvas-800/60 p-6 shadow-soft-xl lg:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-sm">
                    Siap mulai?
                  </p>
                  <h4 className="mt-3 text-base font-semibold text-white lg:text-lg">
                    Diskusikan kebutuhan campaign Anda dengan tim TVCloud.
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 lg:text-base">
                    Ceritakan objektif, durasi campaign, dan target audiens Anda.
                    Kami bantu rancang kombinasi venue dan paket tayang yang paling efisien.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-canvas-700 transition hover:bg-brand-400 lg:px-6 lg:py-3 lg:text-base"
                  >
                    Jadwalkan Konsultasi
                  </a>
                  <span className="text-sm text-white/50 lg:text-base">
                    Tidak ada kewajiban, kami bantu hitungkan opsi terbaik.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          ref={setSectionRef('contact')}
          className="section-fade border-t border-canvas-500/40 bg-canvas-700 pb-20 pt-16 lg:pb-28 lg:pt-20"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            {/* Header */}
            <div className="mb-10 space-y-3 lg:mb-14">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 lg:text-base">
                Hubungi Kami
              </h2>
              <h3 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Siap membantu Anda merancang kampanye TVCloud berikutnya.
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">
                Kirimkan detail singkat mengenai brand, jenis promo, dan periode tayang yang Anda inginkan.
                Tim PT. Gandrung Media Corp akan menghubungi Anda kembali dengan rekomendasi paket dan estimasi biaya.
              </p>
            </div>

            {/* 2-col: info + map | form */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

              {/* Left — info cards + map */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                  <div className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 lg:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:text-sm">Email</div>
                    <a
                      href="mailto:info@gandrungmedia.co.id"
                      className="mt-2 block truncate text-base font-medium text-white transition hover:text-brand-400 lg:text-lg"
                    >
                      info@gandrungmedia.co.id
                    </a>
                  </div>
                  <div className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 lg:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:text-sm">
                      Telepon / WhatsApp
                    </div>
                    <p className="mt-2 text-base font-medium text-white lg:text-lg">+62 812-0000-0000</p>
                  </div>
                  <div className="rounded-2xl border border-canvas-500/60 bg-canvas-800/60 p-5 sm:col-span-2 lg:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:text-sm">
                      Alamat Kantor
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65 lg:text-base">
                      PT. Gandrung Media Corp<br />
                      Bandung, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="overflow-hidden rounded-2xl border border-canvas-500/60 shadow-soft-xl">
                  <div className="border-b border-canvas-500/60 bg-canvas-800/70 px-4 py-3 lg:px-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:text-sm">
                      Lokasi Kantor
                    </p>
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7666678077935!2d107.61767427379067!3d-6.918474867712324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62d68c23405%3A0x173e885208f579d7!2sGANDRUNG%20EVENT%20EQUIPMENT!5e0!3m2!1sid!2sid!4v1772178772250!5m2!1sid!2sid"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Kantor PT. Gandrung Media Corp"
                    />
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="rounded-3xl border border-canvas-500/60 bg-canvas-800/60 p-6 shadow-soft-xl lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:text-sm">
                  Kirim Pesan
                </p>
                <h4 className="mt-2 text-lg font-semibold text-white lg:text-xl">
                  Ceritakan kebutuhan campaign Anda
                </h4>
                <form className="mt-6 space-y-5 lg:mt-7 lg:space-y-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-white/65 lg:text-sm">
                      Nama & perusahaan
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Anda / Nama brand"
                      className="mt-2 w-full rounded-xl border border-canvas-500/70 bg-canvas-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 lg:py-3.5 lg:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-white/65 lg:text-sm">
                      Email kerja
                    </label>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.co.id"
                      className="mt-2 w-full rounded-xl border border-canvas-500/70 bg-canvas-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 lg:py-3.5 lg:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-white/65 lg:text-sm">
                      Nomor telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+62 812-xxxx-xxxx"
                      className="mt-2 w-full rounded-xl border border-canvas-500/70 bg-canvas-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 lg:py-3.5 lg:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-white/65 lg:text-sm">
                      Jenis campaign & venue minat
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Contoh: Promo seasonal di Floating Market Lembang & Discovery Mall Bali, periode Maret–April"
                      className="mt-2 w-full resize-none rounded-xl border border-canvas-500/70 bg-canvas-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 lg:text-lg"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-full bg-brand-500 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-canvas-700 transition hover:bg-brand-400 lg:py-4 lg:text-base"
                  >
                    Kirim Pesan
                  </button>
                  <p className="text-xs leading-relaxed text-white/35 lg:text-sm">
                    Atau hubungi langsung via WhatsApp di{' '}
                    <a href="https://wa.me/6281200000000" className="text-brand-400 hover:underline">
                      +62 812-0000-0000
                    </a>.
                    Kami biasanya merespons dalam 1×24 jam kerja.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-canvas-500/40 bg-canvas-950 py-6 text-white/50 lg:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm sm:flex-row lg:px-8 lg:text-base">
          <p>
            © {new Date().getFullYear()} PT. Gandrung Media Corp • TVCloud Digital Out-of-Home Network
          </p>
          <p className="text-xs text-white/35 lg:text-sm">
            Dibangun dengan React & Tailwind CSS, dioptimalkan untuk loading cepat.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
