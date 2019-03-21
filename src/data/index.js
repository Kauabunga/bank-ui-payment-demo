export const products = [
  {
    id: "0",
    name: "AISHA ANKLE BOOT",
    description:
      "The Aisha Ankle Boots are a wide-fit design with an almond-shaped toe and elastic gussets at the ankle to easily get this boot on and off.",
    image: "/static/aisha-ankle-boots-wide-fit-toffee-image01-aisha-boots_1550303202.jpg",
    price: 79.99,
  },
  {
    id: "1",
    name: "ATLANTA SHOES",
    description:
      "This Atlanta Shoe has a easy relaxed style, with a sporty lace-up design and exposed stitching on the upper for a comfortable weekend look that's smart-casual.",
    image: "/static/atlanta-shoes-navy-image01-atlanta-shoes_1550313658.jpg",
    price: 69.99,
  },
  {
    id: "2",
    name: "SHARK GUMBOOTS",
    description:
      "Splashing in puddles just got better. The Shark Gumboots are made for little active feet, with a comfortable slip on design, durable waterproof construction and fun style.",
    image: "/static/shark-gumboots-boys-grey-image01-shark-gumboots_1551242173.jpg",
    price: 29.99,
  },
];

export const productsObject = products.reduce((acc, current) => ({ ...acc, [current.id]: current }), {});
