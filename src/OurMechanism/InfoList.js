import { ReactComponent as One } from '../SVG/1.svg';
import { ReactComponent as OneImg } from '../SVG/oneImg.svg';
import { ReactComponent as Two } from '../SVG/2.svg';
import { ReactComponent as TwoImg } from '../SVG/Group 30.svg';
import { ReactComponent as Three } from '../SVG/3.svg';
import { ReactComponent as ThreeImg } from '../SVG/collect-illustration.svg';
import { ReactComponent as Four } from '../SVG/4.svg';
import { ReactComponent as FourImg } from '../SVG/archive-illustration.svg';
import { ReactComponent as Five } from '../SVG/5.svg';
import { ReactComponent as FiveImg } from '../SVG/query-illustration.svg';

// Lorem text for each item in the list
const p =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,nibh imperdiet arcu ullamcorper amet, elit. Sodales suspendisse nunc turpis ut risus, nibh pretium ut. Ac aliquam ac non posuere id cursus donec et habitant fermentum.';

// Generate a list of items to display in the List component
export const InfoList = [
  {
    title: '1',
    h2: 'Buy shares of songs from spotify',
    p: p,
    image1: One,
    image2: OneImg,
    imageAlt: 'Buy shares of songs from spotify',
    divClassA: `box-g lg:absolute flex mx-auto items-center justify-center md:md:right-0 fade-in-bottom  rounded-3xl border-l-[5px] border-[#1ed760] border-r-[5px] md:border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between`,
    divClassB: `opacity-0`,
  },
  {
    title: '2',
    h2: 'Money collected is used for advertisement',
    p: p,
    image1: Two,
    image2: TwoImg,
    imageAlt: 'Money collected is used for advertisement',
    divClassA: `box-g lg:absolute flex mx-auto items-center justify-center md:left-0 fade-in-bottom rounded-3xl md:border-l-[0px] border-r-[5px] border-l-[5px] border-[#1ed760] border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[18rem]`,
    divClassB: `opacity-0 box-g lg:absolute flex mx-auto items-center justify-center md:left-0 rounded-3xl md:border-l-[0px] border-r-[5px] border-l-[5px] border-[#1ed760] border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[18rem]`,
  },
  {
    title: '3',
    h2: '$8,000 generating 10 Billion YouTube impressions',
    p: p,
    image1: Three,
    image2: ThreeImg,
    imageAlt: '$8,000 generating 10 Billion YouTube impressions',
    divClassA: `box-g lg:absolute flex mx-auto items-center justify-center md:right-0 fade-in-bottom  rounded-3xl border-l-[5px] border-l-[5px] border-[#1ed760] border-r-[5px] md:border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 md:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[36rem]`,
    divClassB: `opacity-0 box-g lg:absolute flex mx-auto items-center justify-center md:right-0 opacity-0 rounded-3xl border-l-[5px] border-l-[5px] border-[#1ed760] border-r-[5px] md:border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 md:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[36rem]`,
  },
  {
    title: '4',
    h2: 'payment from streams is distributed to a smart contract ',
    p: p,
    image1: Four,
    image2: FourImg,
    imageAlt: 'payment from streams is distributed to a smart contract',
    divClassA: `box-g lg:absolute flex mx-auto items-center justify-center md:left-0 fade-in-bottom rounded-3xl md:border-l-[0px] border-r-[5px] border-l-[5px] border-[#1ed760] border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[54rem]`,
    divClassB: `opacity-0 box-g lg:absolute flex mx-auto items-center justify-center md:left-0  rounded-3xl md:border-l-[0px] border-r-[5px] border-l-[5px] border-[#1ed760] border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[54rem]`,
  },
  {
    title: '5',
    h2: 'smart contract will payout shareholders',
    p: p,
    image1: Five,
    image2: FiveImg,
    imageAlt: 'smart contract will payout shareholders',
    divClassA: `box-g lg:absolute flex mx-auto items-center justify-center md:right-0 fade-in-bottom  rounded-3xl border-l-[5px] border-l-[5px] border-[#1ed760] border-r-[5px] md:border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 md:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[72rem]`,
    divClassB: `opacity-0 box-g lg:absolute flex mx-auto items-center justify-center md:right-0 rounded-3xl border-l-[5px] border-l-[5px] border-[#1ed760] border-r-[5px] md:border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 md:justify-between mt-[16.2rem] md:mt-[5rem] lg:mt-[72rem]`,
  },
];
