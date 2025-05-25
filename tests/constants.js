const SINGLE_AUTHOR = [
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
    {
      tags: ['spa', 'art', 'fashion'],
      id: 6,
      text: 'Id nulla sunt ipsum consectetur commodo deserunt exercitation nostrud consectetur. Aliquip irure Lorem non aliqua. Anim do eu consectetur adipisicing sunt mollit non.',
      likes: 16,
      reads: 57,
      popularity: 0.68,
    },
    {
      tags: ['vacation', 'fashion', 'food'],
      id: 7,
      text: 'Ullamco deserunt et eu aliqua est et consequat fugiat sunt adipisicing ipsum. Incididunt fugiat esse amet dolore sunt quis officia minim minim. Esse ullamco duis eu qui enim in nulla enim eu aliquip nisi sunt laboris. Est commodo aliquip dolor nulla anim.',
      likes: 11,
      reads: 38,
      popularity: 0.2,
    },
    {
      tags: ['art', 'hotel', 'beach'],
      id: 8,
      text: 'Ex labore cillum aute in proident nostrud in. Adipisicing tempor Lorem occaecat ea quis ad ex velit sit cillum adipisicing. Adipisicing dolore velit aliqua in sunt duis ad adipisicing. Ut duis sit deserunt mollit velit cillum aute commodo ea nisi. Laboris enim ex cillum tempor amet do proident eu consectetur. Adipisicing elit ipsum et sit sunt esse laborum enim laborum.',
      likes: 0,
      reads: 17,
      popularity: 0.06,
    },
    {
      tags: ['art', 'spa', 'beach'],
      id: 9,
      text: 'Quis sint amet ex ea cillum. Cillum eiusmod sit dolor proident. Exercitation enim sunt tempor tempor laborum dolor enim esse irure. Labore ut sit culpa sunt nostrud laboris. Adipisicing proident ea amet duis cillum do quis ipsum nostrud elit occaecat qui veniam. Laborum eu nostrud laboris labore ipsum id non Lorem dolor.',
      likes: 0,
      reads: 71,
      popularity: 0.78,
    },
  ];
  
  const MULTIPLE_AUTHORS = [
    {
      id: 4,
      text: 'This is post 4',
      likes: 50,
      reads: 300,
      popularity: 0.4,
      tags: ['vacation', 'spa'],
    },
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
    {
      tags: ['spa', 'art', 'fashion'],
      id: 6,
      text: 'Id nulla sunt ipsum consectetur commodo deserunt exercitation nostrud consectetur. Aliquip irure Lorem non aliqua. Anim do eu consectetur adipisicing sunt mollit non.',
      likes: 16,
      reads: 57,
      popularity: 0.68,
    },
    {
      tags: ['vacation', 'fashion', 'food'],
      id: 7,
      text: 'Ullamco deserunt et eu aliqua est et consequat fugiat sunt adipisicing ipsum. Incididunt fugiat esse amet dolore sunt quis officia minim minim. Esse ullamco duis eu qui enim in nulla enim eu aliquip nisi sunt laboris. Est commodo aliquip dolor nulla anim.',
      likes: 11,
      reads: 38,
      popularity: 0.2,
    },
    {
      tags: ['art', 'hotel', 'beach'],
      id: 8,
      text: 'Ex labore cillum aute in proident nostrud in. Adipisicing tempor Lorem occaecat ea quis ad ex velit sit cillum adipisicing. Adipisicing dolore velit aliqua in sunt duis ad adipisicing. Ut duis sit deserunt mollit velit cillum aute commodo ea nisi. Laboris enim ex cillum tempor amet do proident eu consectetur. Adipisicing elit ipsum et sit sunt esse laborum enim laborum.',
      likes: 0,
      reads: 17,
      popularity: 0.06,
    },
    {
      tags: ['art', 'spa', 'beach'],
      id: 9,
      text: 'Quis sint amet ex ea cillum. Cillum eiusmod sit dolor proident. Exercitation enim sunt tempor tempor laborum dolor enim esse irure. Labore ut sit culpa sunt nostrud laboris. Adipisicing proident ea amet duis cillum do quis ipsum nostrud elit occaecat qui veniam. Laborum eu nostrud laboris labore ipsum id non Lorem dolor.',
      likes: 0,
      reads: 71,
      popularity: 0.78,
    },
  ];
  
  const SORT_BY_READS = [
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
    {
      tags: ['vacation', 'fashion', 'food'],
      id: 7,
      text: 'Ullamco deserunt et eu aliqua est et consequat fugiat sunt adipisicing ipsum. Incididunt fugiat esse amet dolore sunt quis officia minim minim. Esse ullamco duis eu qui enim in nulla enim eu aliquip nisi sunt laboris. Est commodo aliquip dolor nulla anim.',
      likes: 11,
      reads: 38,
      popularity: 0.2,
    },
    {
      tags: ['spa', 'art', 'fashion'],
      id: 6,
      text: 'Id nulla sunt ipsum consectetur commodo deserunt exercitation nostrud consectetur. Aliquip irure Lorem non aliqua. Anim do eu consectetur adipisicing sunt mollit non.',
      likes: 16,
      reads: 57,
      popularity: 0.68,
    },
    {
      id: 4,
      text: 'This is post 4',
      likes: 50,
      reads: 300,
      popularity: 0.4,
      tags: ['vacation', 'spa'],
    },
  ];
  
  const SORT_BY_READS_DIRECTION_ONE = [
    {
      id: 4,
      text: 'This is post 4',
      likes: 50,
      reads: 300,
      popularity: 0.4,
      tags: ['vacation', 'spa'],
    },
    {
      tags: ['travel', 'airbnb', 'vacation'],
      id: 3,
      text: 'Voluptate consequat minim commodo nisi minim ut. Exercitation incididunt eiusmod qui duis enim sunt dolor sit nisi laboris qui enim mollit. Proident pariatur elit est elit consectetur. Velit anim eu culpa adipisicing esse consequat magna. Id do aliquip pariatur laboris consequat cupidatat voluptate incididunt sint ea.',
      likes: 10,
      reads: 32,
      popularity: 0.7,
    },
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
  ];
  
  const SORT_BY_READS_DIRECTION_TWO = [
    {
      id: 4,
      text: 'This is post 4',
      likes: 50,
      reads: 300,
      popularity: 0.4,
      tags: ['vacation', 'spa'],
    },
    {
      id: 6,
      text: 'Id nulla sunt ipsum consectetur commodo deserunt exercitation nostrud consectetur. Aliquip irure Lorem non aliqua. Anim do eu consectetur adipisicing sunt mollit non.',
      likes: 16,
      reads: 57,
      popularity: 0.68,
      tags: ['spa', 'art', 'fashion'],
    },
    {
      id: 7,
      text: 'Ullamco deserunt et eu aliqua est et consequat fugiat sunt adipisicing ipsum. Incididunt fugiat esse amet dolore sunt quis officia minim minim. Esse ullamco duis eu qui enim in nulla enim eu aliquip nisi sunt laboris. Est commodo aliquip dolor nulla anim.',
      likes: 11,
      reads: 38,
      popularity: 0.2,
      tags: ['vacation', 'fashion', 'food'],
    },
    {
      tags: ['travel', 'airbnb', 'vacation'],
      id: 3,
      text: 'Voluptate consequat minim commodo nisi minim ut. Exercitation incididunt eiusmod qui duis enim sunt dolor sit nisi laboris qui enim mollit. Proident pariatur elit est elit consectetur. Velit anim eu culpa adipisicing esse consequat magna. Id do aliquip pariatur laboris consequat cupidatat voluptate incididunt sint ea.',
      likes: 10,
      reads: 32,
      popularity: 0.7,
    },
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
  ];
  
  const SORT_BY_READS_DIRECTION_THREE = [
    {
      tags: ['tech', 'music', 'spa'],
      id: 5,
      text: 'Nulla minim irure duis cillum dolore minim enim officia nulla ut. Tempor magna pariatur velit ea cillum reprehenderit. Commodo laborum ullamco est dolore ea nostrud excepteur cupidatat esse. Esse cupidatat velit aliquip aliquip consectetur duis veniam excepteur anim deserunt. Do irure id aute culpa deserunt aute sit ad irure ullamco enim non cupidatat.',
      likes: 13,
      reads: 14,
      popularity: 0.64,
    },
    {
      id: 4,
      text: 'This is post 4',
      likes: 50,
      reads: 300,
      popularity: 0.4,
      tags: ['vacation', 'spa'],
    },
    {
      tags: ['travel', 'airbnb', 'vacation'],
      id: 3,
      text: 'Voluptate consequat minim commodo nisi minim ut. Exercitation incididunt eiusmod qui duis enim sunt dolor sit nisi laboris qui enim mollit. Proident pariatur elit est elit consectetur. Velit anim eu culpa adipisicing esse consequat magna. Id do aliquip pariatur laboris consequat cupidatat voluptate incididunt sint ea.',
      likes: 10,
      reads: 32,
      popularity: 0.7,
    },
  ];
  
  module.exports = {
    SINGLE_AUTHOR,
    MULTIPLE_AUTHORS,
    SORT_BY_READS,
    SORT_BY_READS_DIRECTION_ONE,
    SORT_BY_READS_DIRECTION_TWO,
    SORT_BY_READS_DIRECTION_THREE,
  };
  