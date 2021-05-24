import React from "react";
import Social from "./Social";

const data = [
  {
    heading: "Our company",
    links: ["How we work", "Why Insure?", "View plans", "Reviews"],
  },
  {
    heading: "Help me",
    links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"],
  },
  {
    heading: "Contact",
    links: ["Sales", "Support", "Live chat"],
  },
  {
    heading: "Others",
    links: ["Careers", "Press", "Licenses"],
  },
];

function Footer(props) {
  return (
    <footer className="footer container">
      <Social />
      <hr />
      <div className="footer__sections">
        {data.map((item) => (
          <section className="footer__section">
            <h2 className="footer__heading">{item.heading}</h2>
            <div className="footer__content">
              <ul className="list">
                {item.links.map((link) => (
                  <li className="list__item">
                    <a className="link" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
