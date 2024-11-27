import { getRandomInt } from "../../helper-functions/helper-functions";
import image from '../../assets/react-core-concepts.png';

const reactDesrpiption = ['Core', 'Fundamental', 'Essential'];

export default function Header() {
    const description = reactDesrpiption[getRandomInt(2)];
  
    return (
      <header>
        <img src={image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }