import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in-up">
            <h1>À Propos de Nous</h1>
            <p>
              Découvrez l'histoire, la mission et les valeurs de TRAUMATEC/HOPITEC, 
              votre partenaire de confiance en technologies médicales au Cameroun.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>
                Notre Histoire
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                TRAUMATEC/HOPITEC est née de la vision de révolutionner les soins médicaux 
                au Cameroun en apportant des technologies de pointe et des formations 
                de qualité aux professionnels de la santé.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Depuis notre création, nous nous sommes spécialisés dans la fourniture 
                d'équipements médicaux de haute qualité, particulièrement dans le domaine 
                de la traumatologie et de l'ingénierie hospitalière.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Notre engagement envers l'excellence nous a permis de devenir un acteur 
                incontournable du secteur de la santé au Cameroun, avec une approche 
                adaptée aux réalités locales.
              </p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                color: 'var(--primary-green)', 
                marginBottom: '1rem' 
              }}>
                🏥
              </div>
              <h3>Notre Mission</h3>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                "Améliorer la qualité des soins médicaux au Cameroun en fournissant 
                des technologies de pointe, des formations continues et un support 
                technique de qualité aux professionnels de la santé."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>Nos Valeurs</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Les valeurs qui guident notre action quotidienne et notre engagement 
              envers nos clients et partenaires.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                🎯
              </div>
              <h3>Excellence</h3>
              <p>
                Nous nous engageons à fournir des produits et services de la plus haute 
                qualité, conformes aux standards internationaux.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-green)', 
                marginBottom: '1rem' 
              }}>
                🤝
              </div>
              <h3>Partage</h3>
              <p>
                Nous croyons en l'importance du partage des connaissances et de 
                l'accompagnement personnalisé de nos clients.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                💡
              </div>
              <h3>Innovation</h3>
              <p>
                Nous intégrons les dernières technologies et développons des solutions 
                innovantes adaptées aux besoins locaux.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-green)', 
                marginBottom: '1rem' 
              }}>
                🌍
              </div>
              <h3>Responsabilité</h3>
              <p>
                Nous assumons notre responsabilité sociale en contribuant à l'amélioration 
                du système de santé camerounais.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                🔧
              </div>
              <h3>Expertise</h3>
              <p>
                Notre équipe possède une expertise approfondie dans les technologies 
                médicales et l'ingénierie hospitalière.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-green)', 
                marginBottom: '1rem' 
              }}>
                ⚡
              </div>
              <h3>Réactivité</h3>
              <p>
                Nous nous engageons à répondre rapidement aux besoins urgents de nos 
                clients dans le domaine médical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>Notre Équipe</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Une équipe pluridisciplinaire d'experts dédiés à votre succès
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ color: 'var(--primary-green)' }}>👨‍⚕️ Équipe Médicale</h3>
              <p>
                Nos médecins et chirurgiens experts vous accompagnent dans le choix 
                et l'utilisation des équipements les plus adaptés à vos besoins.
              </p>
              <ul>
                <li>Chirurgiens orthopédistes</li>
                <li>Médecins réanimateurs</li>
                <li>Formateurs médicaux certifiés</li>
                <li>Experts en traumatologie</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)' }}>🔧 Équipe Technique</h3>
              <p>
                Nos ingénieurs et techniciens assurent l'installation, la maintenance 
                et la réparation de tous nos équipements.
              </p>
              <ul>
                <li>Ingénieurs biomédicaux</li>
                <li>Techniciens en électronique</li>
                <li>Spécialistes groupes électrogènes</li>
                <li>Experts en informatique médicale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>Nos Réalisations</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Quelques chiffres qui témoignent de notre engagement et de notre succès
            </p>
          </div>

          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary-blue)', 
                fontWeight: 'bold',
                marginBottom: '0.5rem' 
              }}>
                50+
              </div>
              <h4>Hôpitaux Équipés</h4>
              <p>Établissements de santé partenaires</p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary-green)', 
                fontWeight: 'bold',
                marginBottom: '0.5rem' 
              }}>
                500+
              </div>
              <h4>Professionnels Formés</h4>
              <p>Médecins et techniciens formés</p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary-blue)', 
                fontWeight: 'bold',
                marginBottom: '0.5rem' 
              }}>
                1000+
              </div>
              <h4>Interventions</h4>
              <p>Maintenances et réparations effectuées</p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary-green)', 
                fontWeight: 'bold',
                marginBottom: '0.5rem' 
              }}>
                5+
              </div>
              <h4>Années d'Expérience</h4>
              <p>Au service de la santé camerounaise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications et Partenaires */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>Certifications et Partenaires</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Nos certifications et partenaires qui garantissent la qualité de nos services
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ color: 'var(--primary-green)' }}>🏆 Certifications</h3>
              <ul>
                <li>Certification ISO 9001 (Qualité)</li>
                <li>Certification ISO 13485 (Dispositifs médicaux)</li>
                <li>Agrément Ministère de la Santé</li>
                <li>Certification formation médicale continue</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--primary-blue)' }}>🤝 Partenaires</h3>
              <ul>
                <li>Fabricants internationaux d'équipements médicaux</li>
                <li>Ministère de la Santé du Cameroun</li>
                <li>Ordre des Médecins du Cameroun</li>
                <li>Établissements de santé publics et privés</li>
              </ul>
            </div>
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
            Rejoignez Notre Réseau de Partenaires
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Découvrez comment nous pouvons vous accompagner dans l'amélioration 
            de vos services médicaux et la formation de vos équipes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-secondary">
              Devenir Partenaire
            </a>
            <a href="/services" className="btn" style={{ 
              backgroundColor: 'transparent', 
              border: '2px solid white',
              color: 'white'
            }}>
              Découvrir nos Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;