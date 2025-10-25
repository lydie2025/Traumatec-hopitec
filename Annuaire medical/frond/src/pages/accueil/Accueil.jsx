import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material'
import { FaHospital, FaPills, FaUserMd, FaSearch, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './accueil.css'

function Accueil () {
  return (
   <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <Container maxWidth="lg">
          <div className="hero-content">
            <Typography variant="h1" className="hero-title">
              Annuaire Médical du Cameroun
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Trouvez facilement les professionnels de santé, hôpitaux et pharmacies près de chez vous
            </Typography>
            <div className="hero-buttons">
              <Button variant="contained" size="large" className="primary-btn">
                <FaSearch style={{ marginRight: '10px' }} />
                Rechercher
              </Button>
              <Button variant="outlined" size="large" className="secondary-btn">
                <FaMapMarkerAlt style={{ marginRight: '10px' }} />
                Localiser
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title">
            Nos Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <CardContent>
                  <FaHospital className="service-icon" />
                  <Typography variant="h5" className="service-title">
                    Hôpitaux
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    Trouvez les meilleurs hôpitaux et cliniques avec leurs spécialités et services disponibles.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="service-btn">Découvrir</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <CardContent>
                  <FaPills className="service-icon" />
                  <Typography variant="h5" className="service-title">
                    Pharmacies
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    Localisez les pharmacies de garde et trouvez vos médicaments 24h/24.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="service-btn">Découvrir</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <CardContent>
                  <FaUserMd className="service-icon" />
                  <Typography variant="h5" className="service-title">
                    Médecins
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    Consultez les profils des médecins spécialistes et prenez rendez-vous facilement.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="service-btn">Découvrir</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container maxWidth="lg">
          <div className="stats-grid">
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">500+</Typography>
              <Typography variant="h6" className="stat-label">Hôpitaux</Typography>
            </div>
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">1200+</Typography>
              <Typography variant="h6" className="stat-label">Pharmacies</Typography>
            </div>
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">3000+</Typography>
              <Typography variant="h6" className="stat-label">Médecins</Typography>
            </div>
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">50K+</Typography>
              <Typography variant="h6" className="stat-label">Utilisateurs</Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container maxWidth="lg">
          <div className="contact-content">
            <Typography variant="h2" className="section-title">
              Besoin d'aide ?
            </Typography>
            <Typography variant="h6" className="contact-subtitle">
              Notre équipe est là pour vous accompagner
            </Typography>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <Typography variant="h6">Téléphone</Typography>
                  <Typography variant="body1">+237 6XX XX XX XX</Typography>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <Typography variant="h6">Adresse</Typography>
                  <Typography variant="body1">Douala, Cameroun</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </Box>
  )
}
export default Accueil