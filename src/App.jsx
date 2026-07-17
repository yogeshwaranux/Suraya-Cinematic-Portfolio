import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Camera,
  ChevronRight,
  CirclePlay,
  Instagram,
  Mail,
  MapPin,
  Play,
  Star,
  Youtube,
  Film,
  Image,
  Edit3,
  Smartphone,
  Mic,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { clientLogos } from './data/clients';
import { testimonials } from './data/testimonials';
import { stats, experience } from './data/achievements';
import { awards } from './data/awards';
import { faqs } from './data/faqs';
import { socialLinks } from './data/socialLinks';
import heroBanner from './assets/hero-banner.png';
import aboutPortrait from './assets/about-portrait.png';

const previewVideos = [
  {
    href: socialLinks.instagram.url,
    title: 'Content Highlight Preview',
    label: 'Instagram Reels',
    platform: 'Instagram',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/f_mp4,vc_h264/v1784208835/Video-1_r0cbke.mp4',
  },
  {
    href: socialLinks.youtube.url,
    title: 'Unboxing Edit Preview',
    label: 'YouTube Shorts',
    platform: 'YouTube',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/f_mp4,vc_h264/v1784208808/Video-2_akaslc.mp4',
  },
  {
    href: socialLinks.instagram.url,
    title: 'Brand Preview',
    label: 'Instagram Reels',
    platform: 'Instagram',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784209869/Video-5_oembst.mp4',
  },
  {
    href: socialLinks.youtube.url,
    title: 'Real Estate Preview',
    label: 'YouTube',
    platform: 'YouTube',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784209877/Video-11_cm3fla.mp4',
  },
  {
    href: socialLinks.instagram.url,
    title: 'AI Creation Preview',
    label: 'Instagram Reels',
    platform: 'Instagram',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784208811/Video-6_ylsx8e.mp4',
  },
  {
    href: socialLinks.youtube.url,
    title: 'Wedding Promo Preview',
    label: 'YouTube',
    platform: 'YouTube',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784208764/Video-8_y2z8zx.mp4',
  },
  {
    href: socialLinks.instagram.url,
    title: 'Love Story Preview',
    label: 'Instagram Reels',
    platform: 'Instagram',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784208873/Video-9_p6j66m.mp4',
  },
  {
    href: socialLinks.youtube.url,
    title: 'Cinematic Cut Preview',
    label: 'YouTube',
    platform: 'YouTube',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784208829/Video-10_ip5fxd.mp4',
  },
  {
    href: socialLinks.youtube.url,
    title: 'Party Edit Preview',
    label: 'YouTube',
    platform: 'YouTube',
    localVideo: 'https://res.cloudinary.com/osexjaaj/video/upload/v1784209881/Video-7_am7nhe.mp4',
  },
];

const showreelVideos = [
  {
    id: '_mxAIpa2eA0',
    url: 'https://youtu.be/_mxAIpa2eA0?si=1HUSua_bZn91A5gP',
    alt: 'Music edit',
    platform: 'YouTube',
  },
  {
    id: 'auUcjEVV9qE',
    url: 'https://youtu.be/auUcjEVV9qE?si=uRpbMCR2ROdO-cAb',
    alt: 'Lifestyle edit',
    platform: 'YouTube',
  },
  {
    id: '4Zdzxaoyh8g',
    url: 'https://youtu.be/4Zdzxaoyh8g?si=ggulgaAeoPjABWGF',
    alt: 'Another video',
    platform: 'YouTube',
  },
];

const youtubeShorts = [
  {
    id: 'jGCDoalYLJM',
    url: 'https://youtube.com/shorts/jGCDoalYLJM?si=GykZfwWSJhdwx7E1p',
    alt: 'Short edit 1',
    platform: 'YouTube Shorts',
  },
  {
    id: 'NTTJ9CjiONw',
    url: 'https://youtube.com/shorts/NTTJ9CjiONw?si=2Sl-5CUeO3hx3oO7',
    alt: 'Short edit 2',
    platform: 'YouTube Shorts',
  },
  {
    id: 'kSvksaoGQoI',
    url: 'https://youtube.com/shorts/kSvksaoGQoI?si=ZJOiMIkvukoUOzti',
    alt: 'Short edit 3',
    platform: 'YouTube Shorts',
  },
  {
    id: 'rOZlq9oiGPc',
    url: 'https://youtube.com/shorts/rOZlq9oiGPc?si=ykZfwWSJhdwx7E1p',
    alt: 'Short edit 4',
    platform: 'YouTube Shorts',
  },
];

const youtubeEmbedUrl = 'https://www.youtube.com/embed?listType=user_uploads&list=skkuttystory9251';
const locationLink = 'https://www.google.com/maps/search/?api=1&query=Kerala%2C+India';
const emailLink = 'mailto:suryak10052003@gmail.com';
const whatsappLink = 'https://wa.me/919626950823?text=Hello%20Suraya%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.';

function PreviewTile({ tile }) {
  const vidRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [loadVideo, setLoadVideo] = useState(true);
  const videoSrc = tile.localVideo || tile.remoteVideo;
  const isVideo = Boolean(videoSrc);

  const ensureVideoLoaded = () => {
    if (!loadVideo) setLoadVideo(true);
  };

  const handleStart = async () => {
    ensureVideoLoaded();
    const v = vidRef.current;
    if (!v) return;
    try {
      v.muted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && p.catch) p.catch((err) => {
        console.warn('Video autoplay blocked:', err);
      });
    } catch (e) {
      console.warn('Video play error:', e);
    }
  };

  const handleLeave = () => {
    const v = vidRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch (e) {
      console.warn('Video pause/reset error:', e);
    }
  };

  const handleCanPlay = () => {
    const v = vidRef.current;
    if (!v) return;
    try {
      v.muted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) {
      console.warn('Video play on canplay failed:', e);
    }
  };

  const handleVideoError = (e) => {
    console.error('Preview video error:', e);
    setVideoError(true);
  };

  // Diagnostics: log video state and computed styles to debug production invisibility
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    const logState = () => {
      try {
        const cs = getComputedStyle(v);
        console.log('Video Diagnostics:', {
          title: tile.title,
          src: v.currentSrc,
          readyState: v.readyState,
          videoWidth: v.videoWidth,
          videoHeight: v.videoHeight,
          paused: v.paused,
          display: cs.display,
          visibility: cs.visibility,
          opacity: cs.opacity,
          zIndex: cs.zIndex,
          objectFit: cs.objectFit,
          clientWidth: v.clientWidth,
          clientHeight: v.clientHeight,
        });
      } catch (err) {
        console.warn('Video diagnostics failed', err);
      }
    };

    // attach listeners
    v.addEventListener('loadedmetadata', logState);
    v.addEventListener('canplay', logState);
    v.addEventListener('play', logState);

    // initial log (may be before src is set)
    setTimeout(logState, 250);

    return () => {
      v.removeEventListener('loadedmetadata', logState);
      v.removeEventListener('canplay', logState);
      v.removeEventListener('play', logState);
    };
  }, [loadVideo, videoSrc, tile.title]);

  return (
    <a
      href={tile.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900/70 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div
        className="relative overflow-hidden bg-black h-72"
        onMouseEnter={isVideo ? handleStart : undefined}
        onPointerEnter={isVideo ? handleStart : undefined}
        onTouchStart={isVideo ? handleStart : undefined}
        onMouseLeave={isVideo ? handleLeave : undefined}
        onPointerLeave={isVideo ? handleLeave : undefined}
        onFocus={isVideo ? handleStart : undefined}
        onBlur={isVideo ? handleLeave : undefined}
      >
        {isVideo && !videoError ? (
          <video
            ref={vidRef}
            className="h-full w-full object-cover block"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            poster=""
            onCanPlay={handleCanPlay}
            onError={handleVideoError}
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#000000' }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="h-72 w-full bg-zinc-900" />
        )}
        {/* gradient overlay removed per request */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-100 backdrop-blur-sm">
          {tile.platform}
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/60 p-4 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">{tile.label}</p>
          <h3 className="mt-2 text-sm font-semibold text-stone-100 leading-5">{tile.title}</h3>
        </div>
      </div>
    </a>
  );
}

function App() {
  console.log('previewVideos', previewVideos);

  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100 font-body">
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.24),_transparent_42%)]" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="text-lg font-semibold tracking-[0.25em] text-stone-100">SURAYA</div>
            <div className="hidden gap-6 text-sm text-stone-300 md:flex">
              <a href="#about" className="transition hover:text-accent">About</a>
              <a href="#services" className="transition hover:text-accent">Services</a>
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">Instagram</a>
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">YouTube</a>
              <a href="#contact" className="transition hover:text-accent">Contact</a>
            </div>
          </nav>

          <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-16">
              <div className="absolute inset-0 overflow-hidden">
              <img src={heroBanner} alt="Hero background banner" className="h-full w-full object-cover object-right lg:object-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_35%)] mix-blend-overlay opacity-80" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_35%)] blur-2xl" />
            <div className="relative z-10 animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                <CirclePlay size={16} /> Videographer • Editor • Storyteller
              </div>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                Cinematic stories for <span className="text-[#d4af37]">weddings, music, and brands</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                I create premium visual content that feels elegant, emotional, and built to perform across film, reels, and social platforms.
              </p>
              <div className="mb-6 flex flex-wrap gap-5 pt-5">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm shadow-accent/20 transition duration-300 hover:-translate-y-1">
                  Book a project <ArrowRight size={18} />
                </a>
                <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-stone-100 transition duration-300 hover:border-accent hover:text-accent">
                  View Instagram
                </a>
                <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-stone-100 transition duration-300 hover:border-accent hover:text-accent">
                  Watch YouTube
                </a>
              </div>
              <div className="mt-8 flex gap-3">
                <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-3 text-stone-200 transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"><Instagram size={18} /></a>
                <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-3 text-stone-200 transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"><Youtube size={18} /></a>
                <a href="mailto:suryak10052003@gmail.com" className="rounded-full border border-white/10 p-3 text-stone-200 transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
            <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <img src={aboutPortrait} alt="Videographer portrait" className="h-full w-full object-cover" />
            </div>
            <div id="about" className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">About</p>
              <h2 className="section-title">Professional storytelling shaped by experience and intention.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                I’m a videographer and editor with experience creating premium content for weddings, music artists, and brands. My workflow blends cinematic direction, social strategy, and polished post-production.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="soft-card p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Experience</p>
                  <p className="mt-2 text-xl font-semibold text-stone-100">3+ years</p>
                </div>
                <div className="soft-card p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Software</p>
                  <p className="mt-2 text-xl font-semibold text-stone-100">Premiere Pro • Lightroom • CapCut</p>
                </div>
              </div>
              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">Creative philosophy</p>
                <p className="text-stone-300">Every frame is crafted to feel authentic, emotionally resonant, and visually elevated.</p>
              </div>
              
              {/* Services moved to its own full-width section */}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[32px] border bg-white/5 p-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur" style={{ borderColor: 'rgba(255,255,255,0.09)' }}>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Our Services</p>
            <h2 className="font-display text-3xl sm:text-4xl">Professional visual storytelling services designed to help brands, businesses, creators, and individuals stand out through high-quality photography, cinematic videos, and engaging digital content.</h2>

            <div className="mt-6">
              <ServicesPremium />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-accent">How I Work</p>
            <h2 className="font-display text-3xl sm:text-4xl">Simple Process. <span className="block">Exceptional Output.</span></h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col gap-3">
                <div className="text-3xl font-bold text-accent">01</div>
                <h4 className="text-lg font-semibold text-stone-100">Brief</h4>
                <p className="text-sm text-stone-300">Understanding the brand, audience, and goal before touching any tool.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl font-bold text-accent">02</div>
                <h4 className="text-lg font-semibold text-stone-100">Plan</h4>
                <p className="text-sm text-stone-300">Script, shot list, and visual direction aligned to platform and tone.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl font-bold text-accent">03</div>
                <h4 className="text-lg font-semibold text-stone-100">Shoot / Edit</h4>
                <p className="text-sm text-stone-300">Full production or post-production with cinematic quality and intent.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl font-bold text-accent">04</div>
                <h4 className="text-lg font-semibold text-stone-100">Refine</h4>
                <p className="text-sm text-stone-300">Revisions until the work is exactly right — no shortcuts.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl font-bold text-accent">05</div>
                <h4 className="text-lg font-semibold text-stone-100">Deliver</h4>
                <p className="text-sm text-stone-300">Final files, optimised for every platform — ready to publish.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio section removed per request */}

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Youtube</p>
                <h2 className="font-display text-3xl sm:text-4xl">Two recent edits for your next project.</h2>
                <p className="mt-5 text-stone-300">Watch the latest showreel selections, styled for weddings, music videos, and branded storytelling.</p>
              </div>
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(212,175,55,0.24)]">
                Visit channel <Youtube size={18} />
              </a>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {showreelVideos.map((video) => (
                <div key={video.id} className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/70 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                  <div className="relative overflow-hidden rounded-[32px] bg-black">
                    <iframe
                      className="h-72 w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-stone-100">{video.platform}</h3>
                    <p className="mt-2 text-sm text-stone-400">{video.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Youtube Shorts</p>
                <h2 className="font-display text-3xl sm:text-4xl">Vertical edits built for mobile viewing.</h2>
                <p className="mt-5 text-stone-300">Watch short-form stories designed for YouTube Shorts in portrait format.</p>
              </div>
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(212,175,55,0.24)]">
                Visit channel <Youtube size={18} />
              </a>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {youtubeShorts.map((video) => (
                <div key={video.id} className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/70 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                  <div className="relative overflow-hidden rounded-[32px] bg-black">
                    <iframe
                      className="aspect-[9/16] w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-stone-100">{video.platform}</h3>
                    <p className="mt-2 text-sm text-stone-400">{video.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Live</p>
                <h2 className="font-display text-3xl sm:text-4xl">Instagram highlights in a quick preview grid.</h2>
                <p className="mt-5 max-w-2xl text-stone-300">Click any tile to open the latest Instagram stories, reels, and BTS moments.</p>
              </div>
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1">
                Visit Instagram
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previewVideos.map((tile, index) => (
                <PreviewTile key={`${tile.platform}-${index}`} tile={tile} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Statistics</p>
                <h2 className="font-display text-3xl sm:text-4xl">A growing body of work with measurable impact.</h2>
              </div>
              <div className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm text-accent">Trusted by creators and brands</div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[22px] border border-white/10 bg-zinc-900/70 p-5">
                  <div className="text-3xl font-semibold text-accent">{item.value}</div>
                  <div className="mt-2 text-stone-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl">Career highlights and professional growth.</h2>
          <div className="mt-10 space-y-5">
            {experience.map((item) => (
              <div key={item.company} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-100">{item.company}</h3>
                    <p className="mt-2 text-accent">{item.role}</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-sm text-stone-300">{item.period}</div>
                </div>
                <ul className="mt-4 space-y-2 text-stone-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2"><Briefcase size={16} className="text-accent" />{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Social Media</p>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="section-title">Follow My Creative Journey</h3>
                <p className="mt-3 max-w-2xl text-stone-300">Instagram for daily reels, BTS moments, and photography. YouTube for short films, wedding films, and music videos.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-5 py-3 font-semibold text-zinc-950 transition hover:-translate-y-1">Follow Instagram</a>
                <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-stone-100 transition hover:border-accent hover:text-accent">Watch YouTube</a>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Instagram</p>
                <h4 className="mt-3 text-2xl font-semibold text-stone-100">{socialLinks.instagram.username}</h4>
                <p className="mt-2 text-stone-300">{socialLinks.instagram.followers}</p>
                <ul className="mt-5 space-y-2 text-stone-300">
                  <li>• Daily Reels</li>
                  <li>• Behind the Scenes</li>
                  <li>• Photography</li>
                </ul>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">YouTube</p>
                <h4 className="mt-3 text-2xl font-semibold text-stone-100">{socialLinks.youtube.channel}</h4>
                <p className="mt-2 text-stone-300">{socialLinks.youtube.subscribers}</p>
                <ul className="mt-5 space-y-2 text-stone-300">
                  <li>• Short Films</li>
                  <li>• Wedding Films</li>
                  <li>• Music Videos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Clients</p>
            <div className="flex flex-wrap gap-4">
              {clientLogos.map((logo) => (
                <div key={logo} className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-2 text-sm text-stone-300">{logo}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl">Loved by filmmakers, couples, and founders.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                <div className="mb-4 flex gap-1 text-accent"><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /></div>
                <p className="leading-7 text-stone-300">“{item.quote}”</p>
                <div className="mt-5">
                  <p className="font-semibold text-stone-100">{item.name}</p>
                  <p className="text-sm text-stone-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Awards</p>
            <div className="grid gap-4 md:grid-cols-3">
              {awards.map((award) => (
                <div key={award.title} className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-5">
                  <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent"><BadgeCheck size={18} /></div>
                  <h3 className="text-lg font-semibold text-stone-100">{award.title}</h3>
                  <p className="mt-2 text-sm text-stone-400">{award.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl">Questions clients often ask.</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-stone-100">{faq.question}</h3>
                  <ChevronRight size={18} className="text-accent" />
                </div>
                <p className="mt-3 text-stone-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
                <h2 className="section-title">Let’s create something memorable.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">For weddings, music videos, and premium brand content, reach out for availability and custom pricing.</p>
                <div className="mt-8 space-y-3 text-stone-300">
                  <a href={emailLink} className="flex items-center gap-2 transition hover:text-accent"><Mail size={16} className="text-accent" /> suryak10052003@gmail.com</a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-accent"><Play size={16} className="text-accent" /> WhatsApp: +91 96269 50823</a>
                  <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-accent"><Instagram size={16} className="text-accent" /> {socialLinks.instagram.username}</a>
                  <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-accent"><Youtube size={16} className="text-accent" /> {socialLinks.youtube.channel}</a>
                  <a href={locationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-accent"><MapPin size={16} className="text-accent" /> Tamil Nadu, India</a>
                </div>
              </div>
              <div className="rounded-[26px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                <form className="space-y-4">
                  <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-stone-100 outline-none transition focus:border-accent" placeholder="Name" />
                  <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-stone-100 outline-none transition focus:border-accent" placeholder="Email" />
                  <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-stone-100 outline-none transition focus:border-accent" placeholder="Project Type" />
                  <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-stone-100 outline-none transition focus:border-accent" placeholder="Tell me about your project" />
                  <button className="rounded-full bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-1">Send enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-stone-400 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.25em] text-stone-100">SURAYA</div>
            <p className="mt-3 text-sm">© 2026 Suraya K. All rights reserved.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Instagram</p>
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-300 transition hover:text-accent">{socialLinks.instagram.username}</a>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">YouTube</p>
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-300 transition hover:text-accent">{socialLinks.youtube.channel}</a>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Email</p>
              <a href="mailto:suryak10052003@gmail.com" className="block text-sm text-stone-300 transition hover:text-accent">suryak10052003@gmail.com</a>
            </div>
            <div className="pl-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Location</p>
              <a href={locationLink} target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-300 transition hover:text-accent">Tamil Nadu, India</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServicesPremium() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const items = [
    {
      title: 'Video Production',
      icon: Film,
      bullets: ['Commercial Videos', 'Brand Films', 'Promotional Videos', 'Product Videos'],
    },
    {
      title: 'Photography',
      icon: Image,
      bullets: ['Wedding Photography', 'Portrait Photography', 'Event Photography', 'Product Photography'],
    },
    {
      title: 'Video Editing',
      icon: Edit3,
      bullets: ['YouTube Videos', 'Instagram Reels', 'YouTube Shorts', 'Cinematic Editing'],
    },
    {
      title: 'Social Media Content',
      icon: Smartphone,
      bullets: ['Instagram Reels', 'Content Strategy', 'Content Planning', 'Audience Growth'],
    },
    {
      title: 'Voice Over',
      icon: Mic,
      bullets: ['Tamil Voice Over', 'Commercial Voice', 'Story Narration', 'Brand Promotions'],
    },
  ];

  return (
    <div ref={ref} className="mt-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl border bg-zinc-900/60 p-6 backdrop-blur transition-transform duration-500 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 120}ms`, borderColor: 'rgba(255,255,255,0.09)' }}
              aria-labelledby={`service-${idx}`}
            >
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:blur-sm" style={{ boxShadow: '0 0 40px rgba(212,175,55,0.08)' }} />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black/40 text-accent backdrop-blur-sm">
                      <Icon size={22} />
                    </span>
                    <h4 id={`service-${idx}`} className="text-lg font-semibold text-stone-100">
                      {it.title}
                    </h4>
                  </div>

                  <ul className="mt-2 space-y-2 text-sm text-stone-300">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1 text-accent">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm transition-transform duration-300 hover:-translate-y-2"
                  >
                    Enquire <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition duration-300 hover:-translate-y-1">
          Let's Create Something Amazing <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default App;
