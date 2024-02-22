const typeOfPlants = {
  lowLight: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peaceLily',
    },
    noToxic: {
      default: 'fern',
    },
  },
  mediumLight: {
    toxic: {
      default: 'aglaonema',
      overwater: 'peaceLily',
    },
    noToxic: {
      default: 'monstera',
      overwater: 'peaceLily',
    },
  },
  outdoor: {
    toxic: {
      default: 'aloe',
      overwater: 'aloe',
    },
    noToxic: {
      default: 'cactus',
    },
  },
};

export default typeOfPlants;
