import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section Moderne avec effets */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1000px 400px at 20% -10%, rgba(242,251,35,0.15), transparent), radial-gradient(800px 300px at 80% 110%, rgba(255,255,255,0.12), transparent)'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="fade-in-up">
            <h1 style={{ letterSpacing: '-0.5px' }}>Technologies Médicales de Pointe</h1>
            <p style={{ maxWidth: '760px' }}>
              TRAUMATEC/HOPITEC accompagne l'excellence des soins au Cameroun avec des technologies
              avancées pour la traumatologie, l'ingénierie hospitalière et les formations continues.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/services" className="btn btn-secondary" style={{ boxShadow: '0 8px 20px rgba(242,251,35,0.35)' }}>
                Découvrir nos Services
              </a>
              <a href="/contact" className="btn btn-outline" style={{ borderColor: 'var(--primary-green)', color: 'white', background: 'transparent' }}>
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.08))'
        }} />
      </section>

      {/* Présentation */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Votre Partenaire de Confiance en Santé</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Depuis notre implantation au Cameroun, nous nous engageons à fournir 
              les meilleures technologies médicales et formations pour améliorer 
              la qualité des soins dans votre établissement.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                🏥
              </div>
              <h3>Technologies Hospitalières</h3>
              <p>
                Maintenance des groupes électrogènes, installation de relais automatiques 
                et solutions informatiques adaptées aux réalités hospitalières camerounaises.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-green)', 
                marginBottom: '1rem' 
              }}>
                🔧
              </div>
              <h3>Matériel de Traumatologie</h3>
              <p>
                Implants pour ostéosynthèse, ancillaires d'implantation, instruments 
                chirurgicaux et technologies de réanimation de dernière génération.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                📚
              </div>
              <h3>Formations Médicales</h3>
              <p>
                Formations continues en premiers secours, échographie d'urgence, 
                traitement des fractures et hygiène hospitalière pour vos équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Rapides */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Nos Domaines d'Expertise</h2>
            <p>
              Une gamme complète de services pour répondre à tous vos besoins médicaux
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)' }}>
                🏥 Technologies de Traumatologie
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Implants pour ostéosynthèse</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Ancillaires d'implantation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Instruments chirurgicaux</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Technologies de réanimation</li>
              </ul>
              <a href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                En savoir plus
              </a>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--primary-green)' }}>
                ⚡ Technologies Hospitalières
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Maintenance groupes électrogènes</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Relais automatiques ENEO</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Logiciel LOGISME</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Solutions informatiques</li>
              </ul>
              <a href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                En savoir plus
              </a>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)' }}>
                🎓 Formations Médicales
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Premiers secours</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Échographie FAST</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Traitement des fractures</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Hygiène hospitalière</li>
              </ul>
              <a href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                En savoir plus
              </a>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--primary-green)' }}>
                💻 Services Web & IT
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Annuaire médical Cameroun</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Espaces professionnels</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Outils marketing santé</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Portail publicitaire</li>
              </ul>
              <a href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Ils nous font confiance</h2>
            <p>Retour d'expérience de nos partenaires et professionnels de santé</p>
          </div>

          <div className="grid grid-3">
            {[{
              quote: "Maintenance impeccable et délais tenus, nos services n'ont jamais été interrompus.",
              author: "Dr. N., Hôpital de Yaoundé",
            },{
              quote: "Formations très pratiques et adaptées à notre réalité de terrain.",
              author: "Mme T., Responsable qualité",
            },{
              quote: "Les équipements fournis sont fiables et le support est réactif.",
              author: "M. K., Directeur technique",
            }].map((t, idx) => (
              <div key={idx} className="card" style={{
                position: 'relative',
                overflow: 'hidden',
                transform: 'translateZ(0)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(242,251,35,0.15)'
                }} />
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--dark-gray)' }}>
                  “{t.quote}”
                </p>
                <p style={{ fontWeight: 700, color: 'var(--primary-blue)' }}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, #004d7a 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Prêt à Améliorer vos Soins Médicaux ?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Contactez-nous dès aujourd'hui pour découvrir comment nos technologies 
            et formations peuvent transformer votre pratique médicale.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-secondary">
              Demander un Devis
            </a>
            <a href="/services" className="btn" style={{ 
              backgroundColor: 'transparent', 
              border: '2px solid white',
              color: 'white'
            }}>
              Voir nos Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;