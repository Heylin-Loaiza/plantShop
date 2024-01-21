const plantRecommenQuestions = {
  location: {
    question: 'Where will you place your plant?',
    id: [
      { value: 'lowLight', label: 'Inside with some indirect light' },
      { value: 'mediumLight', label: 'Inside with a lot of indirect light' },
      { value: 'outdoor', label: 'Outside' },
    ],
    type: 'radio',
  },
  soil: {
    question: 'Will it receive direct sunlight?',
    id: [
      { value: 'composted', label: 'Yes' },
      { value: 'fertilized', label: 'No' },
    ],
    type: 'radio',
  },
  pets: {
    question: 'Do you have pets (cats or dogs)?',
    id: [
      { value: 'noToxic', label: 'Yes' },
      { value: 'toxic', label: 'No' },
    ],
    type: 'radio',
  },
  watering: {
    question: 'Do you tend to overwater or underwater?',
    id: [
      { value: 'overwater', label: 'Overwater' },
      { value: 'default', label: 'Underwater' },
      { value: 'default', label: 'Neither / I don’t know' },
    ],
    type: 'radio',
  },
  style: {
    question: 'How do you define your style?',
    id: [
      { value: 'simple', label: 'I like minimalism and material colors' },
      { value: 'decorated', label: 'I like some decoration and simple colors' },
      { value: 'decorated', label: 'I like a lot of decoration and bright colors' },
    ],
    type: 'radio',
  },
  extras: {
    question: 'Do you want to add any extra elements to your plant?',
    id: [
      { value: 'moss_pole', label: 'Moss pole' },
      { value: 'pebbles', label: 'Pebbles' },
      { value: 'mini_plants', label: 'Smaller plants' },
    ],
    type: 'checkbox',
  },
};

export default plantRecommenQuestions;
