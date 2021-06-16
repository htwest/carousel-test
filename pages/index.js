import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faBahai } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(null);
  const [x, setX] = useState(null);

  const eventHandler = (e) => {
    if (e.type === "mousedown") {
      setPressed(true);
      setStartX(e.nativeEvent.offsetX);
      console.log(startX);
    }
  };

  return (
    <div className="body">
      <Head>
        <title>Carousel Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="body">
        <div className="slider" onMouseDown={eventHandler}>
          <div className="slider-inner">
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faCoffee} />
            </div>
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faAngry} />
            </div>
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faAd} />
            </div>
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faArchive} />
            </div>
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faAward} />
            </div>
            <div className="slide-img">
              <FontAwesomeIcon className="icon" icon={faBahai} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
