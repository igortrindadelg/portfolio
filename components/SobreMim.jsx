import styles from "../styles/SobreMim.module.scss";
import Image from "next/image";
import heroImagem from "../public/assets/imagem-igor3.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiAdobephotoshop } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export default function SobreMim() {
  const texto = `Quem sou Eu? - Quem sou Eu? - Quem sou Eu? -`;

  return (
    <section className={styles.sobreMimContainer}>
      <div className={styles.heroImagemContainer}>
        <Image
          className={styles.heroImagem}
          src={heroImagem}
          alt="Picture of the author"
        />
      </div>

      <div className={styles.quemSouEu}>
        <h2>Quem sou eu?</h2>

        <p>
          Olá! Meu nome é Igor Trindade e sou um desenvolvedor front-end de
          Florianópolis/SC. Atuando como freelancer há dois anos, tive a
          oportunidade de trabalhar em vários projetos, desde pequenos sites a
          aplicativos web complexos. Minha especialidade é criar interfaces de
          usuário atraentes e intuitivas. Sou apaixonado por aprender novas
          tecnologias e estou sempre buscando expandir meu conhecimento em
          programação e design.
        </p>

        {/* <p>
          Se você está procurando um desenvolvedor front-end experiente e
          dedicado que pode ajudar a criar soluções visualmente impressionantes
          e funcionais, estou pronto para trabalhar com você. Entre em contato
          comigo para discutir como podemos colaborar em seu próximo projeto.
          Obrigado!
        </p> */}
        <h2>Minhas Habilidades</h2>
        <div className={styles.minhasHabilidades}>
          <h3 className={styles.skillIcon}>
            <FaHtml5 />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <FaCss3Alt />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <SiJavascript />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <FaReact />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <SiNextdotjs />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <FaNodeJs />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <FaGitAlt />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <FaGithub />{" "}
          </h3>
          {/* <h3 className={styles.skillIcon}>
            <FiFigma />{" "}
          </h3>
          <h3 className={styles.skillIcon}>
            <SiAdobephotoshop />{" "}
          </h3> */}
        </div>
      </div>
    </section>
  );
}
