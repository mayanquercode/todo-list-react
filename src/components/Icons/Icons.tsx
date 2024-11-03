import {
  BsBellFill,
  BsHousesFill,
  BsInboxesFill,
  BsMicrosoft,
  BsPlus,
  BsPlusSquareFill,
  BsSearch,
  BsThreeDots,
} from "react-icons/bs";

const iconMap = {
  bell: <BsBellFill />,
  houses: <BsHousesFill />,
  inbox: <BsInboxesFill />,
  microsoft: <BsMicrosoft />,
  plus: <BsPlus />,
  plusSquare: <BsPlusSquareFill />,
  search: <BsSearch />,
  threeDots: <BsThreeDots />,
};

export type IconName = keyof typeof iconMap

interface Props {
    name: IconName
    className?: string;
}

function Icons({ name, className = ''  }:Props) {
  return (
    <div className={className}>
      {iconMap[name] ? iconMap[name] : "Icon not found"}
    </div>
  );
}

export default Icons