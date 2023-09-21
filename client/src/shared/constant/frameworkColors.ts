interface IframeworkColors {
  [tech: string]: string;
}

interface IframeworkTextColors {
  [tech: string]: string;
}

const frameworkColors: IframeworkColors = Object.freeze({
  NodeJS: '#73B212',
  Ruby: '#BF2626',
  Angular: '#BF2626',
  Hadoop: '#0AA6BF',
  Ember: '#BF2626',
  Django: '#08A642',
  Redux: '#6836D9',
  React: '#0AA6BF',
  Spring: '#73B212',
  Spark: '#D9790B',
  Backbone: '#225FE5',
  Figma: '#6836D9',
  Photoshop: '#225FE5',
  jQuery: '#225FE5',
  MUI: '#225FE5',
  'ASP.NET': '#225FE5',
  NumPy: '#225FE5',
  Flutter: '#0AA6BF',
  'React N.': '#0AA6BF',
  Flask: '#0AA6BF',
  VueJS: '#08A642',
  Bootstrap: '#6836D9',
  KMM: '#CC1FC3',
  GraphQL: '#CC1FC3',
  Laravel: '#BF2626',
  PyTorch: '#D9790B',
  'Tensor F.': '#D9790B',
  Express: '#FAFAFA',
  Illustrator: '#D9790B'
});

const frameworkTextColors: IframeworkTextColors = Object.freeze({
  NodeJS: 'white',
  Ruby: 'white',
  Angular: 'white',
  Hadoop: 'white',
  Ember: 'white',
  Django: 'white',
  Redux: 'white',
  React: 'white',
  Spring: 'white',
  Spark: 'white',
  Backbone: 'white',
  Figma: 'white',
  Photoshop: 'white',
  jQuery: 'white',
  MUI: 'white',
  'ASP.NET': 'white',
  NumPy: 'white',
  Flutter: 'white',
  'React N.': 'white',
  Flask: 'white',
  VueJS: 'white',
  Bootstrap: 'white',
  KMM: 'white',
  GraphQL: 'white',
  Laravel: 'white',
  PyTorch: 'white',
  'Tensor F.': 'white',
  Express: '#1E1E1E',
  Illustrator: 'white'
});

export { frameworkColors, frameworkTextColors };