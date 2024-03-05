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

const state = {
  name: '',
  color: '',
  soil: '',
  pot: '',
  style: '',
  extras: [],
};

const colors = ['blue', 'pink', 'green', 'purple', 'unpainted'];

export { typeOfPlants, state, colors };
