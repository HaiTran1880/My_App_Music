import R from '../assets/index';
const songs = [
  {
    title: 'See you again',
    artist: 'Charlie Puth',
    image: require('../assets/images/see_you_again.jpeg'),
    id: '1',
    fileName: 'sya',
  },
  {
    title: 'Take me to your heart',
    artist: 'Michael Learns To Rock',
    image: require('../assets/images/take_me_to_your_heart.jpeg'),
    id: '2',
    fileName: 'tmtyh',
  },
  {
    title: 'Nắng ấm xa dần',
    artist: 'Sơn Tùng MT-P',
    image: require('../assets/images/nang_am_xa_dan.jpeg'),
    id: '3',
    fileName: 'naxd',
  },
  {
    title: 'Là ai mang nắng đi xa',
    artist: 'Yang',
    image: require('../assets/images/la_ai_mang_nang_di_xa.jpeg'),
    id: '4',
    fileName: 'lamndx',
  },
  {
    title: 'Họ yêu ai mất rồi',
    artist: 'Doãn Hiếu',
    image: require('../assets/images/ho_yeu_ai_mat_roi.jpeg'),
    id: '5',
    fileName: 'hyamr',
  },
  {
    title: 'Suýt nữa thì',
    artist: 'Andiez',
    image: require('../assets/images/snt.jpeg'),
    id: '6',
    fileName: 'snt',
  },
  {
    title: 'Chắc anh sẽ nhớ em nhiều',
    artist: 'Bằng Cường',
    image: require('../assets/images/casnen.jpeg'),
    id: '7',
    fileName: 'casnen',
  },
  {
    title: 'Lãng quên chiều thu',
    artist: 'Hoa Vinh',
    image: require('../assets/images/lqct.jpeg'),
    id: '8',
    fileName: 'lqct',
  },
];

const image = [
  {
    id: '1',
    title: 'This is the cuties dog i even seen ',
    link: R.images.dog,
  },
  {
    id: '2',
    title: 'This is the beauty red sky ',
    link: R.images.sky1,
  },
  {
    id: '3',
    title: 'This is the window sky ',
    link: R.images.sky2,
  },
  {
    id: '4',
    title: 'This is the happy end wedding ',
    link: R.images.weding,
  },
  {
    id: '5',
    title: 'This is caro picture ',
    link: R.images.couple,
  },
  {
    id: '6',
    title: 'This is Lux Capital  ',
    link: R.images.pari,
  },
  {
    id: '7',
    title: 'This is star  ',
    link: R.images.star,
  },
  {
    id: '8',
    title: 'This is super car ',
    link: R.images.pangani,
  },
];
const data = {
  songs,
  image,
};
export default data;
