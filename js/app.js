const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
  //additional images
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    description: 'mountain landscape, steps, stones',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'tree, sunset, clouds',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
    description: 'road, forest, fall',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg',
    description: 'lake, snow, mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg',
    description: 'road, pavement, landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg',
    description: 'forest, mist, nature',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg',
    description: 'forest, trees, sun rays',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_1280.jpg',
    description: 'railroad, landscape, countryside',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg',
    description: 'sunset, dawn, nature',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
    description: 'fantasy, beautiful, dawn',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
    description: 'avenue, trees, path',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg',
    description: 'mountains, hills, sky',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_1280.jpg',
    description: 'winter landscape, trees, snow',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    description: 'road, forest, fall',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg',
    description: 'hills, trees, fog',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg',
    description: 'canyon, mountains, river',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_1280.jpg',
    description: 'thunderstorm, ocean, twilight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg',
    description: 'mountains, alps, meadow',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_1280.jpg',
    description: 'mountains, village, trees',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',
    description: 'tree, clouds, fields',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
    description: 'mountains, sun, clouds',
  },
];

export { galleryItems };
