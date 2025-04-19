// there will be discount for a product if discount is true

const data = {
  Products: [
    {
      id: 1,
      title: 'DNK Yellow Shoes',
      price: 150,
      discountPercentage: 20,
      discount: true,
      img: '/images/men3.jpg',
      category: 'Men',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.5,
        count: 87,
      },
      stock: 7,
      createdAt: '2024-04-28T13:15:00Z',
      // variants: [
      //   { color: 'blue', img: '/images/men2.jpg' },
      //   { color: 'yellow', img: '/images/shirt-yellow.jpg' },
      //   { color: 'green', img: '/images/men3.jpg' },
      // ],
    },
    {
      id: 2,
      title: 'DNK Blue Shoes',
      price: 240,
      discountPercentage: 0,
      discount: false,
      img: '/images/men2.jpg',
      category: 'Men',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.5,
        count: 80,
      },
      stock: 4,
      createdAt: '2024-05-12T09:45:00Z',
    },
    {
      id: 3,
      title: 'Dark Brown Jeans',
      price: 150,
      discountPercentage: 0,
      discount: false,
      img: '/images/men1.jpg',
      category: 'Men',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 40,
      },
      stock: 10,
      createdAt: '2024-06-30T18:20:00Z',
    },
    {
      id: 4,
      title: 'Blue Denim Jeans',
      price: 150,
      discountPercentage: 0,
      discount: false,
      img: '/images/women2.jpg',
      category: 'Women',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.5,
        count: 70,
      },
      stock: 8,
      createdAt: '2024-07-18T07:10:00Z',
    },
    {
      id: 5,
      title: 'Basic Grey Jeans',
      price: 130,
      discountPercentage: 0,
      discount: false,
      img: '/images/women3.jpg',
      category: 'Women',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 90,
      },
      stock: 0,
      createdAt: '2024-08-05T21:30:00Z',
    },
    {
      id: 6,
      title: 'Blue Denim Shorts',
      price: 190,
      discountPercentage: 30,
      discount: true,
      img: '/images/women1.jpg',
      category: 'Women',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 90,
      },
      stock: 0,
      createdAt: '2024-09-23T14:05:00Z',
    },
    {
      id: 7,
      title: 'Anchor Braclet',
      price: 170,
      discountPercentage: 0,
      discount: false,
      img: '/images/accessory2.jpg',
      category: 'Accessories',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 70,
      },
      stock: 15,
      createdAt: '2024-10-11T10:55:00Z',
    },
    {
      id: 8,
      title: 'Boho Bangle Braclet',
      price: 165,
      discountPercentage: 0,
      discount: false,
      img: '/images/accessory1.jpg',
      category: 'Accessories',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 0,
        count: 0,
      },
      stock: 6,
      createdAt: '2024-11-27T16:40:00Z',
    },
    {
      id: 9,
      title: 'Light Brown Purse',
      price: 250,
      discountPercentage: 0,
      discount: false,
      img: '/images/accessory3.jpg',
      category: 'Accessories',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 10,
      },
      stock: 13,
      createdAt: '2025-01-03T08:25:00Z',
    },
    {
      id: 10,
      title: 'Light Brown Purse',
      price: 240,
      discountPercentage: 0,
      discount: false,
      img: '/images/accessory4.jpg',
      category: 'Accessories',
      description:
        'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
      rating: {
        value: 4.0,
        count: 70,
      },
      stock: 7,
      createdAt: '2025-03-15T19:50:00Z',
    },
  ],
}
export default data
