/**
 * Accordion Data Array
 * -------------------- 
 * + An array of objects representing accordion items.

 * @example
 * // Used in a React component to generate accordion elements.
 * import { accordionData } from './accordionData';
 *
 * accordionData.map((item, index) => (
 * <div key={item.id}>
 * <h2>{item.title}</h2>
 * <p>{item.description}</p>
 * <img src={item.image} alt={item.title} />
 * </div>
 * ));
 */

export const accordionData = [
  {
    id: 1,
    title: "Explore Fly Fishing",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "./accordionImage.png",
    link: "/explore-fly-fishing",
  },
  {
    id: 2,
    title: "Fly Fishing Experiences",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "./accordionImage.png",
    link: "/fly-fishing-experiences",
  },
  {
    id: 3,
    title: "Gear Up and Catch More",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "./accordionImage.png",
    link: "/gear-up-and-catch-more",
  },
];
