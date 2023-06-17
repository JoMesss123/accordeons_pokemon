import { useState } from "react";
import Accordion from "../accordion/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const Accordions = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const handleClick = (index) => {
    if (index === active) {
      setActive(NO_ACCORDION_SELECTED);
      return;
    }
    setActive(index);
  };

  return (
    <div className="accordions">
       <img src="../../image/001.png"/>
      <Accordion
        value={1}
        active={active}
        onClick={handleClick}
        title="Bulbizarre"
       
      >
       Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.
       Quand il est jeune, il absorbe les nutriments conservés dans son dos pour grandir et se développer.
      </Accordion>
      <img src="././image/002.png"/>
      <Accordion
        value={2}
        active={active}
        onClick={handleClick}
        title="Herbizarre"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/003.png"/>
      <Accordion
        value={3}
        active={active}
        onClick={handleClick}
        title="FLORIZARRE"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/004.png"/>
      <Accordion
        value={4}
        active={active}
        onClick={handleClick}
        title="SALAMECHE"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/005.png"/>
      <Accordion
        value={5}
        active={active}
        onClick={handleClick}
        title="REPTINCEL"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/006.png"/>
      <Accordion
        value={6}
        active={active}
        onClick={handleClick}
        title="DRACOFEU"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/007.png"/>
      <Accordion
        value={7}
        active={active}
        onClick={handleClick}
        title="CARAPUCE"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/008.png"/>
      <Accordion
        value={8}
        active={active}
        onClick={handleClick}
        title="CARABAFFE"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/009.png"/>
      <Accordion
        value={9}
        active={active}
        onClick={handleClick}
        title="TORTEGA"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <img src="././image/010.png"/>
      <Accordion
        value={10}
        active={active}
        onClick={handleClick}
        title="CHENIPAN"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
    </div>
  );
};

export default Accordions;
