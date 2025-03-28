/**
 * Member Stories Data Array
 * ------------------------ 
 * + An array of objects representing Member Stories items.

 * @example
 * // Used in a React component to generate Member Stories Card elements.
 * import { MemberstoriesCardData } from './MemberstoriesCardData';
 *
 * MemberstoriesCardData.map((item, index) => (
 * <div key={item.id}>
 * <h2>{item.title}</h2>
 * <p>{item.description}</p>
 * <img src={item.image} alt={item.title} />
 * </div>
 * ));
 */

export const MemberstoriesCardData = [
  {
    id: 1,
    title: "John’s Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    image: "./member1StoryImage.png",
    link: "/explore-fly-fishing",
  },
  {
    id: 2,
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "./member2StoryImage.png",
    link: "/fly-fishing-experiences",
  },
  {
    id: 3,
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: "./member3StoryImage.png",
    link: "/gear-up-and-catch-more",
  },
  {
    id: 4,
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    image: "./member4StoryImage.png",
    link: "/gear-up-and-catch-more",
  },
];
