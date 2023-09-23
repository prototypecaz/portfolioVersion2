function MenuBurger({ transitionPage, setClique }) {
  return (
    <div id="containerBurger">
      <nav style={{ padding: "0 0.5rem" }}>
        <ul id="navMenu">
          <li>
            <a
              onClick={() => {
                transitionPage("sectionModal");
                setClique(false);
              }}
              className="ancre"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                transitionPage("sectionProjets");
                setClique(false);
              }}
              className="ancre"
            >
              Mes Projets
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                transitionPage("sectionContact");
                setClique(false);
              }}
              className="ancre"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <div id="blocInformations" style={{ padding: "0 0.5rem" }}>
          <div className="coordonnees">
            <div>
              <span className="coordonnee">06 89 76 62 44</span>
            </div>
            <div>
              <span className="coordonnee">guillaume.cazes21@gmail.com</span>
            </div>
          </div>
          <div>
            <ul className="reseauSociaux">
              <li>
                <a href="#">
                  <img src="images/facebookMin.webp" alt="" className="reseau" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/githubMin.webp" alt="" className="reseau" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/instagramMin.webp" alt="" className="reseau" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/linkedinMin.webp" alt="" className="reseau" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MenuBurger;
