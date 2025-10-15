import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par une vraie API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        service: '',
        message: ''
      });
      
      // Reset du message de succès après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const services = [
    'Technologies de traumatologie',
    'Technologies hospitalières',
    'Formations médicales',
    'Services Web et informatiques',
    'Autre'
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in-up">
            <h1>Contactez-nous</h1>
            <p>
              Nous sommes à votre écoute pour répondre à vos besoins en technologies médicales, 
              formations et services hospitaliers. N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Informations de Contact */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>
                Nos Coordonnées
              </h2>
              
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3>📍 Adresse</h3>
                <p>
                  TRAUMATEC/HOPITEC<br />
                  Yaoundé, Cameroun<br />
                  <em>Adresse complète à préciser</em>
                </p>
              </div>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3>📞 Téléphone</h3>
                <p>
                  <strong>Commercial :</strong> +237 XXX XXX XXX<br />
                  <strong>Technique :</strong> +237 XXX XXX XXX<br />
                  <strong>Formations :</strong> +237 XXX XXX XXX
                </p>
              </div>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3>📧 Email</h3>
                <p>
                  <strong>Général :</strong> info@traumatec-hopitec.cm<br />
                  <strong>Commercial :</strong> commercial@traumatec-hopitec.cm<br />
                  <strong>Formations :</strong> formations@traumatec-hopitec.cm
                </p>
              </div>

              <div className="card">
                <h3>🕒 Horaires d'Ouverture</h3>
                <p>
                  <strong>Lundi - Vendredi :</strong> 8h00 - 17h00<br />
                  <strong>Samedi :</strong> 8h00 - 12h00<br />
                  <strong>Dimanche :</strong> Fermé<br />
                  <em>Urgences médicales : 24h/24</em>
                </p>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div>
              <div className="card">
                <h2 style={{ color: 'var(--primary-green)', marginBottom: '1.5rem' }}>
                  Demandez un Devis
                </h2>
                
                {submitStatus === 'success' && (
                  <div style={{
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    padding: '1rem',
                    borderRadius: 'var(--border-radius-md)',
                    marginBottom: '1.5rem',
                    border: '1px solid #c3e6cb'
                  }}>
                    ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nom" className="form-label">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="form-input"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telephone" className="form-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className="form-input"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="entreprise" className="form-label">
                      Entreprise/Établissement
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      className="form-input"
                      value={formData.entreprise}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service d'intérêt *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="form-input"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin ou votre demande..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Rapides */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Pourquoi Nous Choisir ?</h2>
            <p>
              Découvrez les avantages de faire appel à TRAUMATEC/HOPITEC
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
              <h3>Expertise Locale</h3>
              <p>
                Nous comprenons les réalités du système de santé camerounais 
                et adaptons nos solutions en conséquence.
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
                Réponse rapide à vos demandes et intervention d'urgence 
                pour les équipements critiques.
              </p>
            </div>

            <div className="card text-center">
              <div style={{ 
                fontSize: '3rem', 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem' 
              }}>
                🏆
              </div>
              <h3>Qualité Garantie</h3>
              <p>
                Tous nos équipements et services sont conformes aux standards 
                internationaux de qualité médicale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;