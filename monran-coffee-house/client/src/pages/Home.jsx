// client/src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#6F4E37', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem' }}>☕ MonRan Coffee House</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Nairobi’s community brew for remote workers in Kinoo.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/menu" style={{ marginRight: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#E6C588', color: '#333', textDecoration: 'none', borderRadius: '4px' }}>
            View Menu
          </Link>
          <Link to="/events" style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white', color: '#6F4E37', textDecoration: 'none', borderRadius: '4px' }}>
            Events & Space
          </Link>
        </div>
      </section>

      {/* Featured Drink */}
      <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2>Barista’s Pick</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <img 
            src="/images/drinks/oat_latte.jpg" 
            alt="Oat Milk Honey Latte" 
            style={{ width: '200px', borderRadius: '8px' }} 
          />
          <div style={{ textAlign: 'left', maxWidth: '400px' }}>
            <h3>Oat Milk Honey Latte</h3>
            <p>Smooth espresso with house-made honey syrup and creamy oat milk.</p>
            <p><strong>KSh 750</strong></p>
            <Link to="/menu" style={{ padding: '0.5rem 1rem', backgroundColor: '#6F4E37', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Try It Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f8f5f0', textAlign: 'center' }}>
        <h2>“MonRan is my second office.”</h2>
        <p>Monica, Freelance UX Designer in Kinoo</p>
      </section>
    </>
  );
}