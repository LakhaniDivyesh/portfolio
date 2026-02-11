export const profile = {
  name: "Divyesh Lakhani",
  title: "Full Stack Developer (MERN Stack)",
  tagline:
    "Building scalable, real-world web applications with modern technologies.",
  description:
    "MERN Stack Developer with experience building production-ready web applications and management dashboards. Strong in JavaScript with hands-on experience in React.js, Node.js, SQL/NoSQL databases, REST APIs, real-time features, and third-party integrations.",
  avatar: "/profile_image.jpeg",
  resume: "/Divyesh-Lakhani-Resume.pdf",
  email: "lakhanidivyesh72@gmail.com",
  linkedin: "https://linkedin.com/in/divyesh-lakhani",
  github: "https://github.com/LakhaniDivyesh",
  whatsapp: "https://wa.me/917202034432",
};

export const skills = {
  Frontend: [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/javascript--v1.png",
    },
    {
      name: "React.js",
      icon: "https://img.icons8.com/color/48/react-native.png",
    },
    {
      name: "Next.js",
      icon: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color-glass/48/bootstrap.png",
    },
  ],
  Backend: [
    { name: "Node.js", icon: "https://img.icons8.com/fluency/48/node-js.png" },
    { name: "NestJS", icon: "https://img.icons8.com/color/48/nestjs.png" },
    {
      name: "Express.js",
      icon: "https://img.icons8.com/nolan/64/express-js.png",
    },
    { name: "Socket.io", icon: "https://socket.io/images/logo-dark.svg" },
    { name: "RESTful APIs", icon: "/restfull-api.png" },
  ],
  Databases: [
    { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png",
    },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongo-db.png" },
  ],
  Tools: [
    { name: "Sequelize ORM", icon: "https://sequelize.org/img/logo.svg" },
    {
      name: "Git",
      icon: "https://img.icons8.com/3d-fluency/94/github-logo.png",
    },
    {
      name: "Postman",
      icon: "https://icon.icepanel.io/Technology/svg/Postman.svg",
    },
    { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
    {
      name: "Stripe",
      icon: "https://logos-world.net/wp-content/uploads/2022/12/Stripe-Emblem.png",
    },
    {
      name: "Google Maps API",
      icon: "https://img.icons8.com/color/48/google-maps.png",
    },
  ],
};

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institute: "GLS University, Ahmedabad",
    year: "2022 — 2024",
    description:
      "Focused on software development, databases, and web technologies.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institute: "Gujarat University, Ahmedabad",
    year: "2019 — 2022",
    description:
      "Studied core computer science fundamentals and application development.",
  },
];

export const experience = [
  {
    company: "Hyperlink Infosystem",
    role: "Full Stack Developer",
    duration: "Jan 2024 — Present",
    responsibilities: [
      "Built and maintained scalable RESTful APIs using Node.js with secure authentication and RBAC.",
      "Developed management dashboards using React.js with real-time features via Socket.io.",
      "Optimized MySQL, PostgreSQL, and MongoDB databases for performance and scalability.",
      "Integrated third-party services including Stripe, Firebase, Google Maps, and external APIs.",
      "Managed deployments and handled client communication.",
    ],
  },
];

export const projects = [
  {
    id: "logistics-fleet",
    title: "Logistics & Fleet Management Application",
    tech: ["React.js", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"],
    description:
      "Multi-role courier management system supporting customers, drivers, fleet owners, and admins.",
    image: "/logistic-app.png",
    features: [
      "Distance & Fare Calculation: Calculates delivery distance using map data to generate accurate pricing, charges, and earnings.",
      "End-to-End Delivery Flow: Complete pickup-to-drop workflow including booking, driver assignment, pickup confirmation, delivery completion, and payment settlement.",
      "Real-Time Driver Operations: Drivers can accept/reject jobs, start deliveries, update status, and maintain driver work logs for each trip.",
      "Live Tracking & ETA: Real-time delivery tracking, route mapping, and ETA calculation using Google Maps integration.",
      "Urgent Delivery & Add-ons: Supports urgent delivery options and additional services (add-ons) with dynamic pricing adjustments.",
      "Referral & Coupon System: Referral-based rewards, discount coupons, and promotional offers for users to increase engagement.",
      "Charges & Earnings Management: Automated calculation of delivery charges, driver earnings, fleet earnings, and commission handling.",
      "Fleet & Admin Management: Dashboards to manage drivers, vehicles, bookings, subscriptions, RBAC, and overall platform operations.",
    ],
  },
  {
    id: "digital-gifting",
    title: "Digital Gifting Platform",
    tech: ["React.js", "Node.js", "PostgreSQL", "Stripe", "Gyft API"],
    description:
      "Platform for browsing, purchasing, and sharing digital gift cards.",
    image: "/gifting-app.png",
    features: [
      "Gyft API integration for real-time gift card catalog and purchasing",
      "Stripe-powered secure payment processing",
      "RESTful APIs for users, transactions, and platform services",
      "Real-time chat system for customer one to one chat",
      "Role-based admin dashboard for platform management",
      "Secure gift card sharing, redemption system and exchang",
    ],
  },
  {
    id: "stock-admin",
    title: "Stock Market & Social Media Admin Platform",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js"],
    description:
      "Admin dashboard for managing users, posts, subscriptions, and analytics.",
    image: "/stock-social-app.png",
    features: [
      "Advanced filters and analytics",
      "Role-based sub-admin access",
      "Real-time updates",
      "Content moderation tools",
    ],
  },
  {
    id: "material-transport",
    title: "Material Transport & Logistics Platform",
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
    description: "Bidding-based truck booking and logistics management system.",
    image: "/material-transport.png",
    features: [
      "Bidding system for transport",
      "Invoice and payment management",
      "Vehicle and driver management",
      "Multiple delivery models",
    ],
  },
  {
    id: "real-estate-property",
    title: "Real Estate Property Management Platform",
    tech: ["Node.js", "Express.js", "PostgreSQL", "React.js"],
    description:
      "Developed a full-featured real estate web application that allows users to discover nearby properties for sale or rent, connect with property owners and agents, and explore detailed listings through an interactive and user-friendly interface.The platform provides advanced search, filtering, and map-based property browsing to enhance user experience and simplify property discovery.",
    image: "/real-estate-app.png",
    features: [
      "Nearby property search with map view",
      "Filter by type, location, buy/rent, and price range",
      "Property listing with photos and amenities",
      "Direct contact with owners and agents",
      "Agent registration and property management",
      "Add, edit, and delete property listings",
      "Blog, testimonial, and gallery management",
      "Secure authentication and role-based access",
    ],
  },
];

export const achievements = [
  {
    title: "Best Performer of the Month",
    issuer: "Hyperlink Infosystem",
    year: "2025",
    description: "Recognized for outstanding performance and contribution.",
  },
  {
    title: "MySQL Certification",
    issuer: "HackerRank",
    year: "2023",
    description:
      "Recognized for demonstrating strong proficiency in MySQL queries, database design, and performance optimization.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
