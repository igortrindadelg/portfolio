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
  return (
    <section className={styles.sobreMimContainer}>
      <div className={styles.heroImagemContainer}>
        <Image
          className={styles.heroImagem}
          src={heroImagem}
          alt="Foto de Igor Trindade"
        />
      </div>

      <div className={styles.quemSouEu}>
        <h2>Quem sou eu? 🌞</h2>

        <p>
          Olá! Meu nome é Igor Trindade e sou um desenvolvedor front-end de
          Florianópolis/SC com dois anos de experiência atuando como freelancer.
          Tive a oportunidade de trabalhar em vários projetos, desde pequenos
          sites a aplicativos web complexos. Minha especialidade é desenvolver
          interfaces de usuário atraentes, funcionais e intuitivas. Sou
          apaixonado em aprender novas tecnologias e estou sempre buscando
          expandir meu conhecimento em programação e design. Essas são algumas
          das minhas principais habilidades técnicas 👇
        </p>

        {/* <p>
          Se você está procurando um desenvolvedor front-end experiente e
          dedicado que pode ajudar a criar soluções visualmente impressionantes
          e funcionais, estou pronto para trabalhar com você. Entre em contato
          comigo para discutir como podemos colaborar em seu próximo projeto.
          Obrigado!
        </p> */}
        {/* <h2>Minhas Habilidades</h2> */}

        <ul className={styles.minhasHabilidades}>
          <li className={styles.skillIcon}>
            <FaHtml5 />
            {/* <p>HTML5</p> */}
          </li>
          <ul className={styles.skillIcon}>
            <FaCss3Alt />
            {/* <p>CSS3</p> */}
          </ul>
          <li className={styles.skillIcon}>
            <SiJavascript />
            {/* <p>JavaScript</p> */}
          </li>
          <li className={styles.skillIcon}>
            <FaReact />
            {/* <p>React</p> */}
          </li>
          <li className={styles.skillIcon}>
            <SiNextdotjs />
            {/* <p>Next.js</p> */}
          </li>
          <li className={styles.skillIcon}>
            <FaNodeJs />
            {/* <p>Node.js</p> */}
          </li>
          <li className={styles.skillIcon}>
            <FaGitAlt />
            {/* <p>Git</p> */}
          </li>
          <li className={styles.skillIcon}>
            <FaGithub />
            {/* <p>GitHub</p> */}
          </li>
          <li className={styles.skillIcon}>
            <FiFigma />{" "}
          </li>
          <li className={styles.skillIcon}>
            <SiAdobephotoshop />{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}
