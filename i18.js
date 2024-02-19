import i18next from 'i18next';

i18next.init({
  lng: 'pt', 
  debug: true,
  resources: {
    en: {
      translation: {
        explore: 'Explore',
        cars: 'Cars',
        signIn: 'Sign in', 
        viewMore: 'View More',
        carCatalogue: 'Car Catalogue',
      },
    },
    pt: {
      translation: {
        explore: 'Explorar',
        cars: 'Carros',
        signIn: 'Entrar',
        viewMore: 'Ver Mais',
        carCatalogue: 'Catálogo de Carros'
      },
    },
  }
});

export default i18next;


