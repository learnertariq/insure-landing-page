import React from "react";
import Media from "./common/Media";

function Feature(props) {
  return (
    <section className="feature container">
      <span className='block-line line--primary'></span>
      <h2 className="feature__heading">We’re different</h2>
      <div className="feature__body">
        <Media
          icon="bolt"
          heading="Snappy Process"
          body="Our application process can be completed in minutes, not hours. Don’t get 
        stuck filling in tedious forms."
        />
        <Media
          icon="dollar"
          heading="Affordable Prices"
          body="We don’t want you worrying about high monthly costs. Our prices may be low, 
          but we still offer the best coverage possible."
        />
        <Media
          icon="user"
          heading="People First"
          body="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
          sure you’re covered when you need it."
        />
      </div>
    </section>
  );
}

export default Feature;
