import { ReactComponent as One } from './SVG/1.svg';
import { ReactComponent as OneImg } from './SVG/oneImg.svg';

export const InfoList = [
  {
    title: '1',
    h2: 'smart contract will payout shareholders',
    TestClass: (
      <h1 class='text-white font-[400] lowercase text-left font-mono '></h1>
    ),
    h2Class: 'capitalize text-[#1ED760] font-[700] text-left mb-1',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,nibh imperdiet arcu ullamcorper amet, elit. Sodales suspendisse nunc turpis ut risus, nibh pretium ut. Ac aliquam ac non posuere id cursus donec et habitant fermentum.',
    pClass: 'text-white font-[400] lowercase text-left',
    image1: One,
    image1Class: 'my-[1rem] mx-[2rem]',
    image2: OneImg,
    imageAlt: 'smart contract will payout shareholders',
    image2Class: 'mx-auto w-3/4',
    divClass:
      'box-g absolute right-0 rounded-3xl border-l-[5px] border-l-[#1ed760] border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between',
  },
  {
    title: '2',
    h2: 'smart contract will payout shareholders',
    h2Class: 'capitalize font-[700] text-[#1ED760] text-left mb-1',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,nibh imperdiet arcu ullamcorper amet, elit. Sodales suspendisse nunc turpis ut risus, nibh pretium ut. Ac aliquam ac non posuere id cursus donec et habitant fermentum.',
    pClass: 'text-white font-[400] lowercase text-left',
    image1: One,
    image1Class: 'my-[1rem] mx-[2rem]',
    image2: OneImg,
    imageAlt: 'smart contract will payout shareholders',
    image2Class: 'mx-auto w-3/4',
    divClass:
      'box-g absolute left-0 rounded-3xl top-[48rem] md:top-[25rem]  border-l-[0px] border-r-[5px] border-r-[#1ed760] border-r-0 border-y-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between',
  },
];
