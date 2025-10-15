import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in-up">
            <h1>Nos Services</h1>
            <p>
              Découvrez notre gamme complète de services en technologies médicales, 
              ingénierie hospitalière et formations continues pour les professionnels de la santé.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies de Traumatologie */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>
              🏥 Technologies de Prise en Charge des Traumatismes
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Nous fournissons des équipements et technologies de pointe pour la prise en charge 
              des traumatismes et la chirurgie orthopédique.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>🔧 Implants pour Ostéosynthèse</h3>
              <p>
                Plaques, vis, clous et autres implants de haute qualité pour la fixation 
                des fractures et la stabilisation osseuse.
              </p>
              <ul>
                <li>Plaques d'ostéosynthèse</li>
                <li>Vis de compression</li>
                <li>Clous centromédullaires</li>
                <li>Fils de cerclage</li>
              </ul>
            </div>

            <div className="card">
              <h3>🛠️ Ancillaires d'Implantation</h3>
              <p>
                Instruments spécialisés pour la pose et l'ajustement des implants 
                avec précision et sécurité.
              </p>
              <ul>
                <li>Forets et alésoirs</li>
                <li>Tournevis spécialisés</li>
                <li>Marteaux et extracteurs</li>
                <li>Gabarits de mesure</li>
              </ul>
            </div>

            <div className="card">
              <h3>⚕️ Instruments de Chirurgie</h3>
              <p>
                Instruments de base pour la chirurgie générale et la gynécologie, 
                garantissant une précision optimale.
              </p>
              <ul>
                <li>Scalpels et bistouris</li>
                <li>Pinces et ciseaux chirurgicaux</li>
                <li>Écarteurs et rétracteurs</li>
                <li>Instruments gynécologiques</li>
              </ul>
            </div>

            <div className="card">
              <h3>💊 Technologies de Réanimation</h3>
              <p>
                Équipements de réanimation et de monitoring pour la prise en charge 
                des patients critiques.
              </p>
              <ul>
                <li>Ventilateurs mécaniques</li>
                <li>Moniteurs de signes vitaux</li>
                <li>Défibrillateurs</li>
                <li>Pompes à perfusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Hospitalières */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-green)' }}>
              ⚡ Technologies Hospitalières
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Solutions complètes pour l'infrastructure hospitalière et la gestion 
              informatique des établissements de santé.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>🔌 Groupes Électrogènes</h3>
              <p>
                Réparation, réhabilitation et maintenance de tous types de groupes électrogènes 
                pour assurer la continuité électrique.
              </p>
              <ul>
                <li>Installation et entretien</li>
                <li>Mise en place de relais automatiques</li>
                <li>Maintenance préventive et curative</li>
                <li>Formation du personnel</li>
              </ul>
            </div>

            <div className="card">
              <h3>⚡ Relais Automatiques ENEO</h3>
              <p>
                Installation et maintenance de systèmes de relais automatiques pour 
                la gestion des coupures d'électricité du réseau ENEO.
              </p>
              <ul>
                <li>Relais de transfert automatique</li>
                <li>Protection contre les surtensions</li>
                <li>Monitoring en temps réel</li>
                <li>Maintenance programmée</li>
              </ul>
            </div>

            <div className="card">
              <h3>📡 Équipements de Radiographie</h3>
              <p>
                Maintenance, programmation et réparation des relais dans les circuits 
                électrotechniques des appareils de radiographie.
              </p>
              <ul>
                <li>Diagnostic électronique</li>
                <li>Réparation de circuits</li>
                <li>Calibrage et ajustement</li>
                <li>Formation technique</li>
              </ul>
            </div>

            <div className="card">
              <h3>💻 Logiciel LOGISME</h3>
              <p>
                Logiciel de Gestion Informatisée des Structures Médicales Évoluées, 
                développé au Cameroun et adapté aux réalités hospitalières locales.
              </p>
              <ul>
                <li>Gestion automatique des stocks</li>
                <li>Gestion automatique des caisses</li>
                <li>Documentation et suivi patients</li>
                <li>Formulaires et étiquettes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Médicales */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>
              📚 Formations Médicales Continues et Expertises
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Programmes de formation continue destinés aux professionnels de la santé 
              pour améliorer leurs compétences et pratiques.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>🚑 Premiers Secours</h3>
              <p>
                Formation des personnes en notions et gestes de premiers secours 
                pour une intervention efficace en situation d'urgence.
              </p>
              <ul>
                <li>Notions de base des premiers secours</li>
                <li>Gestes de secourisme</li>
                <li>Utilisation du défibrillateur</li>
                <li>Gestion du stress en urgence</li>
              </ul>
            </div>

            <div className="card">
              <h3>👨‍⚕️ Secouristes Sauveteurs de Travail</h3>
              <p>
                Formation spécialisée pour les secouristes sauveteurs de travail 
                dans les environnements professionnels.
              </p>
              <ul>
                <li>Prévention des risques professionnels</li>
                <li>Secourisme en entreprise</li>
                <li>Organisation des secours</li>
                <li>Évaluation et prise en charge</li>
              </ul>
            </div>

            <div className="card">
              <h3>🩺 Échographie FAST</h3>
              <p>
                Cours "Diagnostic échographique en urgence d'après le concept FAST" 
                pour chirurgiens, réanimateurs et médecins généralistes.
              </p>
              <ul>
                <li>Techniques d'échographie d'urgence</li>
                <li>Interprétation des images FAST</li>
                <li>Diagnostic des traumatismes abdominaux</li>
                <li>Pratique sur simulateurs</li>
              </ul>
            </div>

            <div className="card">
              <h3>🦴 Traitement des Fractures</h3>
              <p>
                Cours "Principes du traitement chirurgical des fractures" 
                destiné aux chirurgiens et médecins praticiens.
              </p>
              <ul>
                <li>Classification des fractures</li>
                <li>Techniques chirurgicales</li>
                <li>Choix des implants</li>
                <li>Suivi post-opératoire</li>
              </ul>
            </div>

            <div className="card">
              <h3>🏥 Hygiène Hospitalière</h3>
              <p>
                Séminaire "Hygiène hospitalière et traitement des déchets hospitaliers" 
                pour les comités d'hygiène des structures sanitaires.
              </p>
              <ul>
                <li>Protocoles d'hygiène</li>
                <li>Gestion des déchets médicaux</li>
                <li>Prévention des infections</li>
                <li>Audit et contrôle qualité</li>
              </ul>
            </div>

            <div className="card">
              <h3>🧼 Stérilisation et Entretien</h3>
              <p>
                Séminaire "Notions générales sur la stérilisation et l'entretien des instruments" 
                pour le personnel de stérilisation et les infirmiers de bloc.
              </p>
              <ul>
                <li>Techniques de stérilisation</li>
                <li>Entretien des instruments</li>
                <li>Contrôle qualité</li>
                <li>Organisation du bloc opératoire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Web et IT */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--primary-green)' }}>
              💻 Services Web et Informatiques
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Solutions numériques innovantes pour les acteurs du secteur de la santé 
              au Cameroun et en Afrique.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>🔍 Annuaire Médical du Cameroun</h3>
              <p>
                Moteur de recherche des acteurs de la santé permettant de retrouver 
                institutions, entreprises et professionnels référencés.
              </p>
              <ul>
                <li>Base de données complète</li>
                <li>Recherche avancée</li>
                <li>Filtres par spécialité</li>
                <li>Géolocalisation</li>
              </ul>
            </div>

            <div className="card">
              <h3>👥 Espace Professionnel</h3>
              <p>
                Espace privé réservé aux professionnels abonnés pour gérer leur présence 
                et développer leur identité numérique.
              </p>
              <ul>
                <li>Profil professionnel personnalisé</li>
                <li>Gestion des informations</li>
                <li>Statistiques de visibilité</li>
                <li>Support client dédié</li>
              </ul>
            </div>

            <div className="card">
              <h3>📢 Outils Marketing Santé</h3>
              <p>
                Système de gestion de campagnes marketing par newsletter et SMS, 
                connecté aux principaux réseaux sociaux.
              </p>
              <ul>
                <li>Campagnes newsletter</li>
                <li>Marketing SMS</li>
                <li>Réseaux sociaux</li>
                <li>Analytics et reporting</li>
              </ul>
            </div>

            <div className="card">
              <h3>📺 Portail Publicitaire</h3>
              <p>
                Plateforme dédiée aux bandeaux et bannières publicitaires pour 
                partenaires et annonceurs du secteur santé.
              </p>
              <ul>
                <li>Espaces publicitaires ciblés</li>
                <li>Campagnes personnalisées</li>
                <li>Suivi des performances</li>
                <li>Tarifs compétitifs</li>
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
            Besoin d'Informations Complémentaires ?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Contactez-nous pour obtenir un devis personnalisé ou pour toute question 
            concernant nos services et formations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-secondary">
              Demander un Devis
            </a>
            <a href="/about" className="btn" style={{ 
              backgroundColor: 'transparent', 
              border: '2px solid white',
              color: 'white'
            }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;