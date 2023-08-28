/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Are You Making A Difference? (Social Media Content)",
    description:
      "A call for individuals and businesses to drive and chase for impact rather than only financial satisfactions",
    url: "https://m.facebook.com/story.php?story_fbid=pfbid0yEmZLxBsg6E2jkx8jGJTgxXLsfFi4tZL421wLj9L16qgR2aJRu9tZjP1zohra3Jal&id=100083371626083&mibextid=Nif5oz",
  },
  {
    title: "Jaythrift Brand Design",
    description:
      "Fashion accessories brand that needed to recreate and optimize it's presence with new visuals for social media",
    url: "https://www.canva.com/design/DAFsCumtQXo/T5Gr_L8UbArT7ozJ7yZjug/view?utm_content=DAFsCumtQXo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    title: "Understaanding Clients Needs (Social Media Content)",
    description:
      "Describing the necessitiy that in try to create solutions for others as businesses, it must be percieved helpful by the people you trying to help",
    url: "https://m.facebook.com/story.php?story_fbid=pfbid02sNuY2GCAzmES6aq8Q4p8vpEie37ZVJ12WMQD2BF5LQqVwN11Mei71baJ4waaXKfhl&id=100083371626083&mibextid=Nif5oz",
  },
 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
