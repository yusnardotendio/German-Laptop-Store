import React, { useState } from 'react';
    import { Laptop, ShieldCheck, Truck, ChevronRight, Search, ShoppingCart, Menu } from 'lucide-react';

    const PRODUCTS = [
      { id: 1, name: "ProBook X1", specs: "i7, 16GB RAM, 512GB SSD", price: "1.299 €", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&h=300&q=80" },
      { id: 2, name: "UltraSlim 14", specs: "i5, 8GB RAM, 256GB SSD", price: "899 €", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300&q=80" },
      { id: 3, name: "Workstation Z", specs: "i9, 32GB RAM, 1TB SSD", price: "2.199 €", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&h=300&q=80" }
    ];

    export default function App() {
      const [currentPage, setCurrentPage] = useState('home');

      return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
          <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[#0065BD]">TechStore.de</h1>
              <nav className="hidden md:flex gap-8 font-medium">
                {['home', 'products', 'support'].map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)} className={`capitalize ${currentPage === p ? 'text-[#0065BD]' : 'hover:text-[#0065BD]'}`}>
                    {p}
                  </button>
                ))}
              </nav>
              <button className="bg-[#0065BD] text-white px-6 py-2 rounded-md hover:bg-[#005293] transition-all">Login</button>
            </div>
          </header>

          {currentPage === 'home' && (
            <main>
              <section className="py-20 bg-white text-center px-6">
                <h2 className="text-5xl font-bold mb-6">Premium Laptops für Profis</h2>
                <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">Entdecken Sie unsere Auswahl an leistungsstarken Geräten für Arbeit und Freizeit.</p>
                <button onClick={() => setCurrentPage('products')} className="bg-[#0065BD] text-white px-8 py-3 rounded-md hover:bg-[#005293] transition-all font-medium">Jetzt entdecken</button>
              </section>
              
              <section className="py-16 bg-neutral-100 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                  {[ { icon: ShieldCheck, title: "3 Jahre Garantie" }, { icon: Truck, title: "Kostenloser Versand" }, { icon: Laptop, title: "Top-Marken" } ].map((f, i) => (
                    <div key={i} className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm text-center">
                      <f.icon className="w-12 h-12 text-[#0065BD] mx-auto mb-4" />
                      <h3 className="text-xl font-bold">{f.title}</h3>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          )}

          {currentPage === 'products' && (
            <main className="max-w-7xl mx-auto py-16 px-6">
              <h2 className="text-3xl font-bold mb-10">Unsere Produkte</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {PRODUCTS.map(p => (
                  <div key={p.id} className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6 hover:shadow-md transition-all">
                    <img src={p.img} alt={p.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <p className="text-neutral-600 mb-4">{p.specs}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#0065BD]">{p.price}</span>
                      <button className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-700">Kaufen</button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          )}

          <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <p>&copy; 2024 TechStore Deutschland. Alle Rechte vorbehalten.</p>
            </div>
          </footer>
        </div>
      );
    }