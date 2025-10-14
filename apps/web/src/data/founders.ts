export interface Person {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
}

export const founders: Person[] = [
  {
    name: 'Dhanesh Todarwal',
    role: 'Co‑Founder, Grow‑Withus',
    image: '/images/founders/dhanesh.jpeg',
    bio: 'Dhanesh is a skilled developer and stock market analyst known for building powerful apps and websites. He designs and tests trading strategies, blending tech expertise with sharp market insights for actionable results.',
    expertise: ['App & Website Development', 'Stock Market Analysis', 'Trading Strategies', 'Data Analytics']
  },
  {
    name: 'Ishwar Hiran',
    role: 'Co‑Founder, Grow‑Withus',
    image: '/images/founders/ishwar.jpeg',
    bio: 'Expert in marketing and SEO, Ishwar specializes in boosting brand visibility and driving growth through data‑driven strategies. His deep market research skills help deliver smart solutions for business expansion.',
    expertise: ['Marketing', 'SEO', 'Market Research', 'Growth Strategy']
  }
]

export const advisors: Person[] = [
  {
    name: 'Yogesh Todarwal',
    role: 'Advisor',
    image: '/images/founders/yogesh.jpeg',
    bio: 'Yogesh brings academic excellence and research expertise from IIT Bombay and a PhD in Sweden. He guides in career planning, stock market strategies, and business growth, helping shape vision and deliver success.',
    expertise: ['Research', 'Career Guidance', 'Stock Market', 'Business Strategy']
  }
]
