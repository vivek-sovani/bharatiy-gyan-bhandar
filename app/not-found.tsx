import Link from 'next/link';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="sec-hero">
        <div className="shell">
          <div className="sec-crumb"><Link href="/">Library</Link><span className="sep">→</span><span className="cur">Not found</span></div>
          <span className="deva-only">न विद्यते</span>
          <h1>This page is not in the library.</h1>
          <p className="lede">
            The text you were looking for has not been catalogued here yet. Return to the
            library and browse the corpus from the beginning.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              ← Back to the library
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
