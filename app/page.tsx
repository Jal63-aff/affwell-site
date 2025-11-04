export default function Home(){ return (
  <>
    <header className="flex items-center justify-between">
      <a href="/" className="flex items-center gap-3"><img src="/logo.png" alt="affwell" style={{height:44}}/><div className="font-bold">affwell</div></a>
      <nav className="flex gap-4"><a href="#featured" className="text-sm">Guides</a><a href="#howitworks" className="text-sm">How it works</a><a href="#subscribe" className="text-sm">Subscribe</a></nav>
    </header>
    <section id="hero" className="grid md:grid-cols-2 gap-8 mt-8 items-center">
      <div>
        <h1 className="text-3xl font-serif">Discover the Best Wellness & Gut Health Supplements</h1>
        <p className="text-gray-600 mt-4">Evidence-based reviews and expert insights to help you choose smarter, live better, and feel your best every day.</p>
        <div className="mt-6"><a className="btn-primary" href="#featured">Explore Top Supplements</a></div>
      </div>
      <div>
        <div className="card"><img src="/assets/hero-probiotics.jpg" alt="probiotics" style={{width:'100%',height:220,objectFit:'cover',borderRadius:8}}/></div>
      </div>
    </section>
    <section id="about" className="mt-12"><div className="card"><h2 className="font-serif">Who we are</h2><p className="text-gray-600">affwell helps you make confident choices about supplements. We research, test, and recommend products that meet high standards for safety and effectiveness.</p></div></section>
    <section id="featured" className="mt-10"><h2 className="font-serif">Top Wellness Guides & Reviews</h2><div className="grid md:grid-cols-3 gap-6 mt-4"><article className="card"><h4>Top Probiotics for Athletes in 2025</h4><p className="text-gray-600">Boost recovery and performance with clinically-backed probiotic strains.</p></article></div></section>
    <section id="howitworks" className="mt-12"><h2 className="font-serif">How affwell Works</h2><p className="text-gray-600">We review and recommend high-quality wellness products. When you buy through our links, we may earn a small commission at no extra cost to you.</p></section>
    <section id="subscribe" className="mt-12"><div className="card"><h2 className="font-serif">Stay Connected</h2><p className="text-gray-600">Get weekly supplement tips, research highlights, and exclusive deals — no spam.</p></div></section>
    <footer className="mt-12 text-center text-sm text-gray-600"><p>© 2025 affwell — All rights reserved.</p></footer>
  </>
)}