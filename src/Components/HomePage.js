import React, { Suspense, useState } from "react";
import Accueil from "./Accueil";
import ChargementSite from "./ChargementSite";

const SectionModal = React.lazy(() => import("./SectionModal"));
const SectionProjets = React.lazy(() => import("./SectionProjets"));
const SectionContact = React.lazy(() => import("./SectionContact"));
const TransitionPage = React.lazy(() => import("./TransitionPage"));

function HomePage(props) {
  const [transitionPage, setTransitionPage] = useState(false);

  return (
    <>
      <ChargementSite />
      <Accueil transitionPage={setTransitionPage} />

      <Suspense fallback={<div>Chargement de la section...</div>}>
        <SectionModal transitionPage={setTransitionPage} />
        <SectionProjets />
        <SectionContact />
      </Suspense>

      {transitionPage && (
        <Suspense fallback={<div>Chargement de la transition...</div>}>
          <TransitionPage
            transitionPage={setTransitionPage}
            nameTransition={transitionPage}
          />
        </Suspense>
      )}
    </>
  );
}

export default HomePage;
