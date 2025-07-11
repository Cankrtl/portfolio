import classNames from "../assets/styles/Contact01.module.css";

export function Contact() {
  return (
    <section>
      <h1>contact</h1>

      <p>Contact İnfo</p>

      <section className="limited-width-container section-contact">
        <ul className="contact-info">
          <li>
            <strong>phone : </strong>
            +90 (507) 018 58 60
          </li>
          <li>
            <strong>E-Posta : </strong>
            canskartal@hotmail.com
          </li>
          <li>
            <strong>Adress : </strong>
            İstanbul / Pendik
          </li>
        </ul>
      </section>

      <footer>
        <nav className="nav-social">
          <ul>
            <li>
              <a
                href="https://github.com/Cankrtl?tab=overview&from=2023-03-01&to=2023-03-13"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/can-kartal-607b71243/ "
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/20801873/can-kartal"
                target="_blank"
              >
                <i className="fa-brands fa-stack-overflow"></i>StackOverFLow
              </a>
            </li>
          </ul>
        </nav>
      </footer>

      <button className="Btn-CV">
        <a href="./public/Can Kartal CV.pdf" download="CanKartalcv.pdf">
          Cv indir
        </a>
      </button>
    </section>
  );
}
