export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Food delivery app with its own POS and a web3 exchange",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hak Bus",
    des: "iOS, Android and Web App.",
    img: "/xak.png",
    iconLists: ["/genid.svg","/re.svg","/java.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/dock.svg"],
    link: "https://www.hakbus.org",
  },
  {
    id: 2,
    title: "Insylink POS system",
    des: "Point of sale platform for your restaurant and coffee shop.",
    img: "/insylinkimage.jpg",
    iconLists: ["/genid.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/c.svg"],
    link: "https://www.insylink.com",
  },
  {
    id: 3,
    title: "Am Gmbh",
    des: "Willkommen in unserem Hausputz Service.",
    img: "/am.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma-16-svgrepo-com.svg"],
    link: "https://am-gmbh.vercel.app/",
  },

];

export const testimonials = [
  {
    quote:
      "Collaborating with Etnik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Etnik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Etnik is the ideal partner.",
    name: "Elmedin Zenuni",
    title: "Founder of Hak Bus",
  },  
];

export const companies = [
  // {
  //   id: 1,
  //   name: "hakbus",
  //   img: "/logohakbus.png",
  //   nameImg: "/logohakbus.png",
  // }
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer at iSolve",
    desc: "Contributed to major projects such as Neo, a cutting-edge insurance platform (iOS, Android, web), and Conome, an innovative POS solution.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    links: [{ label: "Neo", href: "https://www.neo.swiss/home"}, { label: "Conome", href: "https://www.conome.mk"}]
  },
  {
    id: 2,
    title: "Backend Engineer at HotelKey",
    desc: "Engineered a comprehensive Hospitality Platform, enhancing operational efficiency and guest experience.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
    links: [{label: "HotelKey", href: "https://www.hotelkeyapp.com"}]
  },
  {
    id: 3,
    title: "Full Stack Developer at Torsten Labs",
    desc: "Created an AI-driven project planner system to streamline project management and improve productivity.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    links: []
  },
  {
    id: 4,
    title: "Full Stack Developer & Co-Founder at Insyllium",
    desc: "Developed multiple innovative solutions including Hak Bus, a transportation management system, and Insylink, a dynamic linking platform for POS and online food delivery apps.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    links: [{label: "Hak Bus", href: "https://www.hakbus.org"}, {label : "Insylink", href:"https://www.insylink.com"}]
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
