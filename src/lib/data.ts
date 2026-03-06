
export type Member = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subscriptionPlan: 'Basic' | 'Pro' | 'Elite';
  joinDate: string;
  avatar: string;
};

export type Payment = {
  id: string;
  memberId: string;
  memberName: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Overdue' | 'Pending';
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  price: number;
  benefits: string[];
};

export type Attendance = {
  id: string;
  memberId: string;
  memberName: string;
  checkInTime: string;
};

export type GymClass = {
    id: string;
    time: string;
    name: string;
    location: string;
    instructor: string;
    date: string;
}

export const members: Member[] = [
  { id: 'm1', name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', subscriptionPlan: 'Pro', joinDate: '2023-01-15', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 'm2', name: 'Bob Williams', email: 'bob@example.com', phone: '123-456-7891', subscriptionPlan: 'Basic', joinDate: '2023-02-20', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { id: 'm3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '123-456-7892', subscriptionPlan: 'Elite', joinDate: '2023-03-10', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  { id: 'm4', name: 'Diana Miller', email: 'diana@example.com', phone: '123-456-7893', subscriptionPlan: 'Pro', joinDate: '2023-04-05', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
  { id: 'm5', name: 'Eve Davis', email: 'eve@example.com', phone: '123-456-7894', subscriptionPlan: 'Basic', joinDate: '2023-05-25', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d' },
];

export const payments: Payment[] = [
  { id: 'p1', memberId: 'm1', memberName: 'Alice Johnson', amount: 49.00, date: '2024-05-15', status: 'Paid' },
  { id: 'p2', memberId: 'm2', memberName: 'Bob Williams', amount: 29.00, date: '2024-05-20', status: 'Paid' },
  { id: 'p3', memberId: 'm3', memberName: 'Charlie Brown', amount: 79.00, date: '2024-05-10', status: 'Paid' },
  { id: 'p4', memberId: 'm4', memberName: 'Diana Miller', amount: 49.00, date: '2024-04-05', status: 'Overdue' },
  { id: 'p5', memberId: 'm5', memberName: 'Eve Davis', amount: 29.00, date: '2024-05-25', status: 'Pending' },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  { id: 'plan1', name: 'Basic', price: 29, benefits: ['Access to gym facilities', 'Standard workout plans', 'Locker access'] },
  { id: 'plan2', name: 'Pro', price: 49, benefits: ['All Basic features', 'Access to all classes', 'Personal trainer session (1/month)', 'Sauna & Steam room'] },
  { id: 'plan3', name: 'Elite', price: 79, benefits: ['All Pro features', 'Unlimited personal trainer sessions', 'Nutritional guidance', 'Guest passes'] },
];

export const attendance: Attendance[] = [
  { id: 'a1', memberId: 'm1', memberName: 'Alice Johnson', checkInTime: '2024-05-27T08:05:00' },
  { id: 'a2', memberId: 'm3', memberName: 'Charlie Brown', checkInTime: '2024-05-27T09:15:00' },
  { id: 'a3', memberId: 'm4', memberName: 'Diana Miller', checkInTime: '2024-05-26T18:30:00' },
  { id: 'a4', memberId: 'm1', memberName: 'Alice Johnson', checkInTime: '2024-05-25T08:00:00' },
  { id: 'a5', memberId: 'm2', memberName: 'Bob Williams', checkInTime: '2024-05-25T19:00:00' },
];

export const memberGrowthData = [
    { month: 'Jan', members: 65 },
    { month: 'Feb', members: 72 },
    { month: 'Mar', members: 80 },
    { month: 'Apr', members: 85 },
    { month: 'May', members: 92 },
    { month: 'Jun', members: 101 },
];

export const classes: GymClass[] = [
    { id: 'c1', time: '15:15', name: 'Wellness (self-guided)', location: 'Proteen Fitness De Pijp', instructor: 'Self-Guided', date: '2024-07-29' },
    { id: 'c2', time: '15:15', name: 'Hyrox Chase', location: 'Proteen Fitness City', instructor: 'Andre Coppens', date: '2024-07-29' },
    { id: 'c3', time: '15:15', name: 'Boxing', location: 'Proteen Fitness Oud-West', instructor: 'Sanne Jonk', date: '2024-07-29' },
    { id: 'c4', time: '09:00', name: 'Open Gym', location: 'Proteen Fitness City', instructor: 'Open Gym', date: '2024-07-30' },
    { id: 'c5', time: '10:00', name: 'Shred', location: 'Proteen Fitness Oud-Zuid', instructor: 'Carlos Lens', date: '2024-07-30' },
    { id: 'c6', time: '17:00', name: 'Reformer Classic', location: 'Proteen Fitness City', instructor: 'Naomi Solis', date: '2024-07-31' },
    { id: 'c7', time: '18:00', name: 'Yoga Flow', location: 'Proteen Fitness De Pijp', instructor: 'Clara Vidal', date: '2024-07-31' },
    { id: 'c8', time: '19:00', name: 'HIIT', location: 'Proteen Fitness City', instructor: 'Mark Roberts', date: '2024-07-31' },
    { id: 'c9', time: '08:00', name: 'Boxing', location: 'Proteen Fitness Oud-West', instructor: 'Sanne Jonk', date: '2024-08-01' },
    { id: 'c10', time: '12:00', name: 'Open Gym', location: 'Proteen Fitness City', instructor: 'Open Gym', date: '2024-08-01' },
    { id: 'c11', time: '16:00', name: 'Shred', location: 'Proteen Fitness Oud-Zuid', instructor: 'Carlos Lens', date: '2024-08-02' },
    { id: 'c12', time: '17:30', name: 'Hyrox Chase', location: 'Proteen Fitness City', instructor: 'Andre Coppens', date: '2024-08-02' },
    { id: 'c13', time: '10:00', name: 'Yoga Flow', location: 'Proteen Fitness De Pijp', instructor: 'Clara Vidal', date: '2024-08-03' },
    { id: 'c14', time: '11:00', name: 'Boxing', location: 'Proteen Fitness Oud-West', instructor: 'Sanne Jonk', date: '2024-08-04' },
];

export const missionValues = [
    {
        title: 'Community',
        description: "We believe in the power of a supportive community. We're a tribe that sweats together, grows together, and celebrates every victory, big or small."
    },
    {
        title: 'Excellence',
        description: "From our world-class trainers to our state-of-the-art equipment, we are committed to providing an unparalleled fitness experience."
    },
    {
        title: 'Integrity',
        description: "We operate with transparency and honesty. Your trust is our most valuable asset, and we work hard to earn it every day."
    },
    {
        title: 'Passion',
        description: "Fitness is not just what we do; it's who we are. We are passionate about helping you discover your strength and achieve your goals."
    }
];

export const teamMembers = [
    {
        name: 'Jane Doe',
        title: 'Head Coach',
        imageId: 'team-member-1',
    },
    {
        name: 'John Smith',
        title: 'Yoga Instructor',
        imageId: 'team-member-2',
    },
    {
        name: 'Peter Jones',
        title: 'Strength & Conditioning',
        imageId: 'team-member-3',
    }
];

export const pricingFeatures = [
    { name: 'Train unlimited at all clubs' },
    { name: 'Exclusive classes & events' },
    { name: 'In-club discount' },
    { name: 'Priority booking' },
    { name: 'Coaching Session (one-off)' },
    { name: 'Proteen Fitness bottle (one-off)' },
    { name: 'Exclusive Reformer access' },
    { name: 'Exclusive Wellness access' },
    { name: 'Exclusive Recovery access' },
    { name: 'Invite 1 friend' },
    { name: 'Waitlist priority' },
    { name: 'Unlimited protein' },
    { name: 'Body Scan' },
];

export const pricingPlans = [
    {
        name: 'GOLD',
        price: 139,
        features: {
            'Train unlimited at all clubs': true,
            'Exclusive classes & events': true,
            'In-club discount': '15%',
            'Priority booking': '2 weeks',
            'Coaching Session (one-off)': 1,
            'Proteen Fitness bottle (one-off)': true,
            'Exclusive Reformer access': false,
            'Exclusive Wellness access': false,
            'Exclusive Recovery access': false,
            'Invite 1 friend': false,
            'Waitlist priority': false,
            'Unlimited protein': false,
            'Body Scan': false,
        },
    },
    {
        name: 'PREMIUM',
        price: 199,
        features: {
            'Train unlimited at all clubs': true,
            'Exclusive classes & events': true,
            'In-club discount': '25%',
            'Priority booking': '3 weeks',
            'Coaching Session (one-off)': 2,
            'Proteen Fitness bottle (one-off)': true,
            'Exclusive Reformer access': true,
            'Exclusive Wellness access': true,
            'Exclusive Recovery access': true,
            'Invite 1 friend': true,
            'Waitlist priority': true,
            'Unlimited protein': true,
            'Body Scan': true,
        },
    },
];

export const pricingTerms = [
    {
        name: '1 YEAR',
        id: '1-year',
        description: 'Freeze your membership for up to 28 days. 12 month commitment period. After 11 months, you can cancel anytime with a 4-week cancellation period.',
        priceModifier: 0,
    },
    {
        name: 'FLEX (+$30)',
        id: 'flex',
        description: 'Unlimited freeze options. Your membership will automatically renew. Cancel anytime with a 4-week cancellation period.',
        priceModifier: 30,
    },
];

export const highlights = [
  {
    text: 'A Crowd-Free\nGym',
    imageId: 'highlight-1',
  },
  {
    text: 'Luxury locker\nrooms',
    imageId: 'highlight-2',
  },
  {
    text: 'Luxury\nAtmosphere',
    imageId: 'highlight-3',
  },
  {
    text: 'Customized\nEquipment',
    imageId: 'highlight-4',
  },
];

export const expertiseCards = [
    {
        id: 'open-gym',
        title: 'First-Timer',
        description: "Is it your first time? Discover our next level gym.",
        href: '/first-timer'
    },
    {
        id: 'premium-membership',
        title: 'Memberships',
        description: 'Become a member now & get unlimited workouts!',
        href: '/pricing'
    },
];

export const footerLinks = {
    'ABOUT US': [
        { title: 'ABOUT', href: '/about' },
        { title: 'LOCATIONS', href: '/locations' },
        { title: 'CONTACT', href: '/contact' },
        { title: 'JOBS', href: '/jobs' },
    ],
    'WHAT WE OFFER': [
        { title: 'FIRST-TIMER', href: '/first-timer' },
        { title: 'MEMBERSHIPS', href: '/memberships' },
        { title: 'PRICING', href: '/pricing' },
        { title: 'CLASSES', href: '/classes' },
    ],
    'READ MORE': [
        { title: 'FAQ', href: '/faq' },
        { title: 'TERMS & CONDITIONS', href: '/terms-and-conditions' },
    ],
};

export const socialLinks = [
    { icon: 'Instagram', href: '#' },
    { icon: 'Facebook', href: '#' },
    { icon: 'Twitter', href: '#' },
];

export const membershipBenefits = [
    {
        title: 'UNLIMITED WORKOUTS',
        description: "Train unlimited for the best value. Enjoy unlimited Holy classes and unlimited Open Gym sessions. Sounds amazing right?!"
    },
    {
        title: 'VIP EVENTS',
        description: "Are you ready to go all out? With our memberships, you can't miss any events and club nights with your VIP entrance."
    },
    {
        title: 'BOOKING PRIORITY',
        description: "Enjoy priority booking: book your workouts 2 or even 3 weeks in advance! Are you on the waitlist? We'll move you up, so you're more likely to get a spot."
    },
    {
        title: 'IN-CLUB DISCOUNT',
        description: "As a member, you'll get up to 25% discount on our merchandise, bites & shakes. To top it off, Premium members also get a free protein scoop per visit!"
    }
];

export const exclusiveBenefits = [
    {
        title: 'EXCLUSIVE REFORMER',
        description: "Our Premium members have exclusive access to our Reformer Pilates studio. Get ready to lengthen, strengthen and tone your body."
    },
    {
        title: 'EXCLUSIVE WELLNESS',
        description: "Premium members can relax and unwind in our luxurious wellness areas. Think saunas, steam rooms, and more."
    },
    {
        title: 'EXCLUSIVE RECOVERY',
        description: "Accelerate your recovery with our state-of-the-art recovery tools, exclusively for Premium members. Including compression boots and massage guns."
    },
    {
        title: 'INVITE 1 FRIEND',
        description: "Share the love! Premium members can bring a friend for free once a month to experience the best of Proteen Fitness."
    }
];

export const classCategories = [
    {
        name: 'Strength',
        description: 'Build power and muscle with our expert-led strength training sessions.',
        imageId: 'class-category-strength'
    },
    {
        name: 'Cardio',
        description: 'Boost your endurance and burn calories with high-energy cardio workouts.',
        imageId: 'class-category-cardio'
    },
    {
        name: 'Boxing',
        description: 'Unleash your inner fighter with our dynamic and empowering boxing classes.',
        imageId: 'class-category-boxing'
    },
    {
        name: 'Yoga',
        description: 'Find your balance and improve flexibility with our calming yoga sessions.',
        imageId: 'class-category-yoga'
    }
];

export const faqItems = [
    {
        question: "What are your opening hours?",
        answer: "Our clubs are open Monday to Thursday from 07:00 to 21:30, Friday from 07:00 to 19:30, Saturday from 07:30 to 17:30, and Sunday from 08:30 to 17:30."
    },
    {
        question: "Can I try a class before signing up?",
        answer: "Absolutely! We offer a First-Timer deal which includes 3 workouts, valid for 14 days. It's the perfect way to experience our classes and atmosphere."
    },
    {
        question: "What should I bring for my first workout?",
        answer: "Wear comfortable workout clothes and shoes, and bring a water bottle and a towel. We provide lockers, but you'll need to bring your own lock."
    },
    {
        question: "How do I book a class?",
        answer: "You can book classes through our website or our mobile app. Once you have a membership, you can book up to 2 or 3 weeks in advance, depending on your plan."
    },
    {
        question: "What is your cancellation policy for classes?",
        answer: "You can cancel a booked class up to 12 hours before it starts without any penalty. Late cancellations or no-shows may incur a fee or a strike, depending on your membership."
    },
    {
        question: "Can I freeze my membership?",
        answer: "Yes, our 1-year members can freeze their membership for up to 28 days. Our Flex members have unlimited freeze options. Please contact our front desk to arrange a freeze."
    }
];

export const pressMentions = [
    { publication: 'Fitness Weekly', logoId: 'press-logo-fw', href: '#' },
    { publication: 'Urban Health', logoId: 'press-logo-uh', href: '#' },
    { publication: 'Men\'s Fitness', logoId: 'press-logo-mf', href: '#' },
    { publication: 'The Modern Athlete', logoId: 'press-logo-tma', href: '#' },
    { publication: 'Wellness Today', logoId: 'press-logo-wt', href: '#' },
    { publication: 'City Life Magazine', logoId: 'press-logo-clm', href: '#' },
];

export const pressArticles = [
    {
        imageId: 'press-article-1',
        publication: 'Fitness Weekly',
        date: 'October 2023',
        title: 'Proteen Fitness: The New Temple of Sweat and Style',
        description: 'We dive deep into the most talked-about gym opening of the year, where luxury meets high-intensity training.',
        href: '#',
    },
    {
        imageId: 'press-article-2',
        publication: 'Urban Health',
        date: 'September 2023',
        title: 'Redefining the Gym Experience',
        description: 'Proteen Fitness isn\'t just a place to work out; it\'s a lifestyle destination. Here\'s why it\'s worth the hype.',
        href: '#',
    },
    {
        imageId: 'press-article-3',
        publication: 'Men\'s Fitness',
        date: 'August 2023',
        title: 'The Ultimate Urban Gym for the Modern Athlete',
        description: 'With state-of-the-art equipment and a vibe that\'s second to none, Proteen is setting a new standard for city fitness.',
        href: '#',
    },
];

export const termsAndConditionsContent = [
    {
        title: '1. Introduction',
        content: 'Welcome to Proteen Fitness. These are the terms and conditions governing your access to and use of the website proteen.fitness and its related sub-domains, sites, services, and tools. By accepting these terms and conditions, and by using the site, you represent that you agree to comply with these terms and conditions with Proteen Fitness ("we", "us" or "Proteen") in relation to your use of the site (the "User Agreement"). This User Agreement is effective upon acceptance. If you do not agree to be bound by this User Agreement please do not access, register with or use this Site.'
    },
    {
        title: '2. Membership and Access',
        content: 'To access our gym facilities and classes, you must be a registered member. Membership plans, their features, and prices are detailed on our Pricing page. We reserve the right to change membership fees, but will provide at least 30 days notice. All members must comply with our gym rules and regulations at all times.'
    },
    {
        title: '3. Booking and Cancellation',
        content: 'Classes can be booked in advance through our website or app, subject to availability and your membership type. Cancellations must be made at least 12 hours prior to the class start time to avoid penalties. Failure to attend a booked class or a late cancellation will result in a "no-show" which may incur a fee.'
    },
    {
        title: '4. Code of Conduct',
        content: 'Members are expected to behave in a respectful and responsible manner. Any form of harassment, discrimination, or unsafe behavior will not be tolerated and may result in immediate termination of membership without a refund. Please wipe down equipment after use and return it to its proper place.'
    },
    {
        title: '5. Liability',
        content: 'You acknowledge that engaging in physical exercise involves a risk of injury. You agree that your use of Proteen Fitness facilities is at your own risk. Proteen Fitness will not be liable for any injury, loss, or damage to personal property, except where it is caused by our gross negligence.'
    }
];

export const jobListings = [
    {
        title: 'Lead Fitness Trainer',
        location: 'Downtown Location',
        type: 'Full-time',
        description: 'We are looking for an experienced and certified Lead Fitness Trainer to guide our members, develop new programs, and mentor junior trainers. Must have a passion for fitness and leadership.',
        href: '#'
    },
    {
        title: 'Front Desk Associate',
        location: 'All Locations',
        type: 'Part-time',
        description: 'Be the face of Proteen Fitness! We need an energetic and organized individual to manage our front desk, greet members, and handle enquiries. Excellent customer service skills are a must.',
        href: '#'
    },
    {
        title: 'Yoga Instructor',
        location: 'Downtown Location',
        type: 'Contract',
        description: 'Seeking a certified Yoga Instructor to lead our Vinyasa and Hatha yoga classes. The ideal candidate will have experience teaching all levels and a calming, motivational presence.',
        href: '#'
    }
];
