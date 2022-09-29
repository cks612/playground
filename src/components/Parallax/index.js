import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef, useEffect } from "react";
import "../../styles/_parallaxStyles.scss";

const Parallax = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    gsap.from(element.querySelector("#m1"), {
      y: 200,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });

    gsap.from(element.querySelector("#m2"), {
      y: 50,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });

    gsap.from(element.querySelector("#t2"), {
      x: -50,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });

    gsap.from(element.querySelector("#t1"), {
      x: 50,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });
    gsap.from(element.querySelector("#man"), {
      x: -250,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });
    gsap.from(element.querySelector("#plants"), {
      x: -50,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });
    gsap.from(element.querySelector("#text"), {
      x: 500,
      scrollTrigger: {
        trigger: element.querySelector(".parallax"),
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="parallaxWrapper" ref={ref}>
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        <ul className="navigation">
          <li>
            <a href="#" className="active">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section className="parallax">
        <h2 id="text">Parallax Website</h2>
        <img id="m1" src="https://user-images.githubusercontent.com/66737450/193002083-2c8771e3-700f-4451-87e5-01004acf9141.png" alt="mountain1" />
        <img id="t2" src="https://user-images.githubusercontent.com/66737450/193002103-f7e0a403-d225-4f7d-8d61-a0003db866fe.png" alt="tree2" />
        <img id="m2" src="https://user-images.githubusercontent.com/66737450/193002092-de6756c7-0a32-4a91-861b-fcdb8a52ade3.png" alt="mountain2" />
        <img id="t1" src="https://user-images.githubusercontent.com/66737450/193002101-cc917ab1-2c27-41b1-936a-b9d904e8c1ce.png" alt="tree1" />
        <img id="man" src="https://user-images.githubusercontent.com/66737450/193002071-9919c59a-7ebf-4a48-9361-8ce8d5b25340.png" alt="man" />
        <img id="plants" src="https://user-images.githubusercontent.com/66737450/193002095-22f0d1f0-7ffc-4258-a6cd-4d3ed82ca3b1.png" alt="plant" />
      </section>
      <section className="sec">
        <h2>Parallax Scrolling Website</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, dolorem amet. Beatae architecto voluptatum iusto est vero? Velit dicta, eveniet, a
          ipsam distinctio laudantium nam odio possimus fugiat corrupti non quasi earum magni reprehenderit porro quae soluta cumque itaque praesentium
          excepturi tempora enim. Fuga exercitationem quidem ab repellat repudiandae consequuntur alias asperiores tempora placeat eveniet harum molestias eaque
          modi dolore, labore at quisquam saepe ratione, nam voluptas voluptatum dolor assumenda ut. Iure quos sunt exercitationem natus porro tenetur eos
          aliquam. Sit cupiditate dolorem pariatur perferendis atque incidunt impedit quia blanditiis enim delectus, laudantium illo facilis labore. Porro sit
          nesciunt quia voluptatibus minus nisi itaque velit doloribus dicta ad modi amet iure ipsa repudiandae, in perferendis! Commodi at quis iure deserunt
          doloremque inventore mollitia! Perspiciatis, doloremque? Rerum quo ut aut, pariatur sapiente nulla error magni, quas qui dolore distinctio ducimus.
          Cupiditate, veritatis architecto expedita tenetur commodi omnis tempora iure nihil porro libero cumque voluptate explicabo ratione autem officiis
          quidem! Provident quod similique voluptate. Dolore assumenda obcaecati fugiat ab, et quis ad earum repudiandae quisquam. Praesentium sint provident
          magni aliquam tempora ducimus beatae maxime aut eos obcaecati? Saepe nemo alias excepturi repellendus, corporis repellat nobis labore laborum
          distinctio voluptatem quam. Quasi magni sapiente dolorum nihil dolores nam explicabo ipsa reprehenderit hic illum beatae, eius sed reiciendis tempora
          tempore voluptates ducimus impedit asperiores tenetur. Nihil quae quos totam odit dolorem assumenda necessitatibus blanditiis laboriosam nesciunt
          ipsam culpa aspernatur corrupti sed modi accusamus ad, labore maiores voluptatibus animi, autem eius vitae id officiis! Unde consectetur expedita
          architecto magni necessitatibus quasi, excepturi maxime iure culpa aspernatur porro illum libero consequatur sed ratione fugiat obcaecati ipsam ullam
          quidem numquam. Laudantium consequuntur, aut nisi tempore quam illum recusandae soluta iure neque itaque ab ducimus esse vero ea, odio totam atque
          excepturi sit porro rerum debitis quidem! Ab magnam in eaque cupiditate aliquam quidem, rerum sint consequatur, quae debitis delectus reprehenderit
          optio voluptatem? Facere, provident enim iste excepturi aspernatur, minima, aut dolore odio illo ratione laborum quod ducimus. Eligendi ipsa ducimus
          aut, harum exercitationem earum doloribus qui voluptatem esse voluptatum ab quos magnam quae, corporis, itaque tenetur! Consectetur delectus neque
          deserunt, voluptate, non adipisci quos reiciendis numquam iste accusamus quod eius hic labore atque quas voluptates modi nihil temporibus ab. Minus
          suscipit, provident fugiat tempora vitae sapiente labore molestiae dignissimos, nam repellendus laboriosam aperiam libero excepturi possimus
          necessitatibus delectus repellat incidunt. Laudantium iste dolor deleniti nam incidunt quas consectetur rerum at. Enim provident maiores reprehenderit
          facere tenetur esse doloremque nostrum iusto fugit cum dolore aperiam, ea saepe modi temporibus distinctio dolor doloribus. Quod tenetur velit ad
          architecto aspernatur eius rerum, neque fugit quibusdam necessitatibus iusto provident. Tempora unde commodi labore dolore architecto doloremque
          excepturi maiores non provident quod ipsum eum molestias ab voluptates error doloribus, totam distinctio placeat voluptate. Iure ea quam porro iusto,
          veniam nihil quis magnam fugiat culpa voluptatibus blanditiis, aliquam voluptate excepturi optio sed? Et est in perferendis fugiat, aut totam eaque
          ipsa laboriosam autem dolorem, eum fugit atque placeat. Dolore sunt quisquam fugit aspernatur.
        </p>
      </section>
    </div>
  );
};

export default Parallax;
