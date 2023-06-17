import { useState } from "react";
import Accordion from "../accordion/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const Accordions = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const onMouseEnter = (index) => {
    if (index === active) {
      setActive(NO_ACCORDION_SELECTED);
      return;
    }
    setActive(index);
  };
  

  return (
    <div className="accordions">
      <h1>Pokédex</h1>
       <img src="../../image/001.png"/>
      <Accordion
        value={1}
        active={active}
        onMouseOver={onMouseEnter}
        title="Bulbizarre"
       
      >
      <div className="card">
        Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.
       Quand il est jeune, il absorbe les nutriments conservés dans son dos pour grandir et se développer.

         <div className="card_second">
          <h2>spécification</h2>
          <img className="card_img" src="././image/bulbizarre_stat.jpg"/>
          <img className="card_img" src="././image/bulbizarre_spec.jpg"/>
          <img className="card_img" src="././image/bulbizarre_type.jpg"/>
       </div>
      </div>
       
       
      </Accordion>
      <img src="././image/002.png"/>
      <Accordion
        value={2}
        active={active}
        onMouseOver={onMouseEnter}
        title="Herbizarre"
      >
      <div className="card">
      Son bulbe dorsal est devenu si gros qu’il ne peut plus se tenir sur ses pattes postérieures.
      La lumière du soleil le rend plus fort et vigoureux. Le bulbe sur son dos grossit en conséquence.

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/herbizare_stat.jpg"/>
        <img className="card_img" src="././image/herbizarre_spec.jpg"/>
        <img className="card_img" src="././image/herbizarre_type.jpg"/>
     </div>
    </div>
      </Accordion>
      <img src="././image/003.png"/>
      <Accordion
        value={3}
        active={active}
        onMouseOver={onMouseEnter}
        title="FLORIZARRE"
      >
        <div className="card">
        Sa plante donne une grosse fleur quand elle absorbe les rayons du soleil. Il est toujours à la recherche des endroits les plus ensoleillés.
        Une douce senteur émane de sa plante. Cette fragrance calme tous ceux qui sont engagés dans un combat.

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/florizarre_stat.jpg"/>
        <img className="card_img" src="././image/florizarre_spec.jpg"/>
        <img className="card_img" src="././image/florizarre_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/004.png"/>
      <Accordion
        value={4}
        active={active}
        onMouseOver={onMouseEnter}
        title="SALAMECHE"
      >
         <div className="card">
         Il préfère ce qui est chaud. En cas de pluie, de la vapeur se forme autour de sa queue.
         Depuis sa naissance, une petite flamme brûle au bout de sa queue. Si cette flamme s’éteint, la vie de ce Pokémon s’éteindra elle aussi.

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/salameche_stat.jpg"/>
        <img className="card_img" src="././image/salameche_spec.jpg"/>
        <img className="card_img" src="././image/salameche_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/005.png"/>
      <Accordion
        value={5}
        active={active}
        onMouseOver={onMouseEnter}
        title="REPTINCEL"
      >
        <div className="card">
        Il est très brutal. En combat, il se sert de ses griffes acérées et de sa queue enflammée pour mettre en pièces ses adversaires.
        S’il s’excite pendant un combat, il crache de grandes flammes, brûlant tout ce qui se trouve aux alentours.

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/reptincel_stat.jpg"/>
        <img className="card_img" src="././image/reptincel_spec.jpg"/>
        <img className="card_img" src="././image/reptincel_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/006.png"/>
      <Accordion
        value={6}
        active={active}
        onMouseOver={onMouseEnter}
        title="DRACOFEU"
      >
        <div className="card">
        On raconte que plus un Dracaufeu a vécu de combats difficiles, plus sa flamme est brûlante.
       

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/dracofeu_stat.jpg"/>
        <img className="card_img" src="././image/dracofeu_spec.jpg"/>
        <img className="card_img" src="././image/dracofeu_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/007.png"/>
      <Accordion
        value={7}
        active={active}
        onMouseOver={onMouseEnter}
        title="CARAPUCE"
      >
         <div className="card">
         Quand il rentre son cou dans sa carapace, il peut projeter de l’eau à haute pression.
         S’il se sent menacé, il rétracte ses pattes dans sa carapace pour se protéger et crache de l’eau.   

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/carapuce_stat.jpg"/>
        <img className="card_img" src="././image/carapuce_spec.jpg"/>
        <img className="card_img" src="././image/carapuce_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/008.png"/>
      <Accordion
        value={8}
        active={active}
        onMouseOver={onMouseEnter}
        title="CARABAFFE"
      >
         <div className="card">
         Il est considéré comme un symbole de longévité. On reconnaît les spécimens les plus âgés à la mousse qui pousse sur leur carapace. 
         Il se sert habilement de sa queue et de ses oreilles touffues pour garder son équilibre sous l’eau.  

       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/carabaffe_stat.jpg"/>
        <img className="card_img" src="././image/carabaffe_spec.jpg"/>
        <img className="card_img" src="././image/carabaffe_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/009.png"/>
      <Accordion
        value={9}
        active={active}
        onMouseOver={onMouseEnter}
        title="TORTEGA"
      >
        <div className="card">
        Il écrase ses adversaires de tout son poids pour leur faire perdre connaissance. Il rentre dans sa carapace s’il se sent en danger.
        Les canons sur sa carapace tirent des jets d’eau capables de percer même de l’acier trempé.
       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/tortega_stat.jpg"/>
        <img className="card_img" src="././image/tortega_spec.jpg"/>
        <img className="card_img" src="././image/tortega_type.jpg"/>
      </div>
    </div>
      </Accordion>
      <img src="././image/010.png"/>
      <Accordion
        value={10}
        active={active}
        onMouseOver={onMouseEnter}
        title="CHENIPAN"
      >
         <div className="card">
         Pour se protéger, il émet par ses antennes une odeur nauséabonde qui fait fuir ses ennemis.
         Ses petites pattes munies de ventouses lui permettent de monter les pentes et de grimper aux murs sans se fatiguer.
       <div className="card_second">
        <h2>spécification</h2>
        <img className="card_img" src="././image/chenipan_stat.jpg"/>
        <img className="card_img" src="././image/chenipan_spec.jpg"/>
        <img className="card_img" src="././image/tortega_type.jpg"/>
      </div>
    </div>
      </Accordion>
    </div>
  );
};

export default Accordions;
