import heroImg from './hero.avif';
import aboutImg from './about.avif';

import item1Img from './item1.avif';
import item2Img from './item2.avif';
import item3Img from './item3.avif';
import item4Img from './item4.avif';
import item5Img from './item5.avif';
import item6Img from './item6.avif';
import item7Img from './item7.avif';
import item8Img from './item8.avif';
import item9Img from './item9.avif';
import item10Img from './item10.avif';
import item11Img from './item11.avif';
import item12Img from './item12.avif';
import item13Img from './item13.avif';
import item14Img from './item14.avif';
import item15Img from './item15.avif';

import user1Img from './user1Img.jpg';
import user2Img from './user2Img.jpg';
import user3Img from './user3Img.jpg';
import { label } from 'framer-motion/client';

const assets = {
  heroImg,
  aboutImg,
  item1Img,
  item2Img,
  item3Img,
  item4Img,
  item5Img,
  item6Img,
  item7Img,
  item8Img,
  item9Img,
  item10Img,
  item11Img,
  item12Img,
  item13Img,
  item14Img,
  item15Img,
//   user1Img,
//   user2Img,
//   user3Img
};


export const timeOptions = [
  { value: "", label: "Select Time" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "20:30", label: "8:30 PM" },
  { value: "21:00", label: "9:00 PM" },
];

// Party size options
export const partySizeOptions = [
  { value: "", label: "Select Party Size" },
  ...Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `${i + 1} person${i + 1 > 1 ? "s" : ""}`,
  })),
];


// Table reference options
export const tableRefOptions = [
  { value: "", label: "Select Table Area" },
  { value: "window", label: "Window" },
  { value: "center", label: "Center" },
  { value: "outdoor", label: "Outdoor" },
];


export const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    message: "Amazing food and ambience. Highly recommended!",
    image: user1Img,
  },
  {
    id: 2,
    name: "Priya Singh",
    message: "Service was excellent. Will visit again!",
    image: user2Img,
  },
  {
    id: 3,
    name: "Rahul Verma",
    message: "Loved the desserts and mocktails!",
    image: user3Img,
  },
];

export default assets;
