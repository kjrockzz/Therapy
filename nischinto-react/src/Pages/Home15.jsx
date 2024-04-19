import React from 'react';
import LocationInMap from '../Components/Map/LocationInMap';
import ServiceSlider from '../Components/Slider/ServiceSlider';
import BeforeAfter2 from '../Components/BeforeAfter/BeforeAfter2';
import TestimonialSlider2 from '../Components/Slider/TestimonialSlider2';
import Price2 from '../Components/Price/Price2';
import About4 from '../Components/About/About4';
import Funfact2 from '../Components/Funfact/Funfact2';
import Hero15 from '../Components/Hero/Hero15';
import SpecialistsSlider3 from '../Components/Slider/SpecialistsSlider3';
import PostWrapper3 from '../Components/Post/PostWrapper3';
import Appointment3 from '../Components/Appointment/Appointment3';
import Contact3 from '../Components/Contact/Contact3';

const heroData = {
  subTitle: 'To build your Trust',
  title: 'Provide high quality Therapy services',
  text: 'Our service and the work efficiency of our doctors are the <br /> reasons for our success.',
  imgSrc: '/img/pic1.jpg',
  // imgSrc: '/images/dental/hero-img.jpg',
  videoSrc: 'https://www.youtube.com/embed/_oIlv59bTL4',
};

const aboutData = {
  imgSrc: `images/dental/about2.png`,
  title: `A great spot for top-notch <span className="st-pink">therapy</span>  that leaves clients feeling really happy.`,
  textLine: [
    {
      text: `
      Therapy is a supportive space where you can openly discuss your thoughts, feelings, and struggles without judgment. Whether it's stress, anxiety, depression, or relationship issues, therapy provides guidance and tools to navigate life's challenges. It's about gaining insight, developing coping skills, and finding healthier ways to cope and relate to others.`,
    },
    {
      text: `When life's difficulties impact mental well-being, therapy provides a structured approach to address issues, offering support and confidentiality.`,
    },
    {
      text: `Ultimately, therapy empowers individuals to lead fulfilling lives by fostering self-understanding, resilience, and improved relationships.`,
    },
  ],
};

const serviceData = {
  sectionHeadingData: {
    title: `The main feature of our service <br /> is to <span className="st-pink">serve</span> the people.`,
  },
  services: [
    {
      img: '/img/depression.jpeg',
      title: 'Depression',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      img: '/img/Alcohol.jpeg',
      title: 'Alcohol Addiction',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      img: '/img/Ocd.jpeg',
      title: 'Obssesive Complusive Disorder(OCD)',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      img: '/img/anxity.jpeg',
      title: 'Generalized Anxiety Disorder(GAD)',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      img: '/img/bipolar.jpeg',
      title: 'Bipolar Disorder',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      img: '/img/adult adhd.jpeg',
      title: 'Dental Implants',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    },
  ],
};

const beforeAfterData = {
  bgImg: '/images/before-after-bg.jpg',
  beforeImg: '/images/dental/after.jpg',
  afterImg: 'images/dental/before.jpg',
  sectionHeadingData: {
    title: `Some samples of our work <br> <span class="st-pink">before</span>
  and <span class="st-pink">after</span>`,
  },
};

const priceData = {
  sectionHeadingData: {
    title: `Looking for someone to <span className="st-pink">talk</span> to? <br />
    chat with us`,
  },
  pricePlan: [
    {
      title: 'Plan A is for under 15 year olds',
      img: '/img/child.jpeg',
      txt:"Therapy for children is crucial for their emotional well-being and development. Just like adults, children face challenges that can impact their mental health, and therapy provides a safe space for them to express themselves and learn coping skills. A qualified child psychologist or therapist can help children navigate through issues such as anxiety, depression, trauma, behavioral problems, and family conflicts. Through play therapy, art therapy, or talk therapy tailored to their age and developmental stage, children can explore their feelings and experiences in a supportive environment, leading to improved emotional regulation, communication, and overall well-being."
      ,
      
    },
    {
      title: 'Plan B is for above 16 year olds',
      img: '/img/mid.jpeg',
      txt:"For middle-aged men, therapy can be invaluable in navigating the unique challenges they face, such as career stress, relationship issues, midlife transitions, and concerns about aging. Therapy offers a non-judgmental space for them to explore their emotions, develop healthier coping mechanisms, and gain insight into their thoughts and behaviors. A qualified therapist can help middle-aged men address issues like work-life balance, identity crises, and coping with changes in health or family dynamics, empowering them to lead more fulfilling lives."
      
    
    },
    {
      title: 'Plan C is for above 40 year olds',
      img: 'img/old.jpeg',
      txt:"Older adults also benefit greatly from therapy, especially as they navigate life transitions, retirement, loss of loved ones, and health concerns. Therapy provides a supportive environment for older individuals to process their feelings, reminisce about their life experiences, and find meaning and purpose in their later years. A skilled therapist can help older adults manage feelings of loneliness, depression, anxiety, or grief, while also providing tools for enhancing resilience, maintaining cognitive function, and fostering social connections. Through therapy, older individuals can find support, validation, and guidance as they navigate the challenges and joys of aging."
    },
  ],
};

const appointmentData = {
  title: `Make <span className="st-pink">appointment</span> We always welcome new patients`,
  img: `/images/dental/appointment2.png`,
  phone: `1 800-123-4567`,
};

const testimonialData = {
  sectionHeadingData: {
    title: ` All that our clients have  <span class="st-pink">said</span><br/>
    about our work`,
  },
  testimonials: [
    {
      img: 'images/avatar2.png',
      name: 'Ralph Jones',
      designation: 'Executive',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
    {
      img: 'images/avatar3.png',
      name: 'Francis Jara',
      designation: 'Biographer',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
    {
      img: 'images/avatar4.png',
      name: 'David Baer',
      designation: 'UX Designer',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
    {
      img: 'images/avatar2.png',
      name: 'Ralph Jones',
      designation: 'Executive',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
    {
      img: 'images/avatar3.png',
      name: 'Francis Jara',
      designation: 'Biographer',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
    {
      img: 'images/avatar4.png',
      name: 'David Baer',
      designation: 'UX Designer',
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
    },
  ],
};

const specialistData = {
  sectionHeadingData: {
    title: ` Professional staff at for <br/><span class="st-pink"> Therapy  </span> session`,
  },
  doctors: [
    {
      img: 'images/member1.jpg',
      name: 'Dr. Philip Bailey',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member2.jpg',
      name: 'Dr. Vera Hasson',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member3.jpg',
      name: 'Dr. Matthew Hill',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member4.jpg',
      name: 'Dr. Jeanette Hoff',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member1.jpg',
      name: 'Dr. Philip Bailey',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member2.jpg',
      name: 'Dr. Vera Hasson',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member3.jpg',
      name: 'Dr. Matthew Hill',
      designation: '',
      authorLink: 'doctor-profile3',
    },
    {
      img: 'images/member4.jpg',
      name: 'Dr. Jeanette Hoff',
      designation: '',
      authorLink: 'doctor-profile3',
    },
  ],
};

const postData = {
  sectionHeadingData: {
    title: `Read the updated <span class="st-pink"> news </span><br/>about
    dental treatment`,
  },
  posts: [
    {
      img: 'images/dental/blog1.jpg',
      title: 'Working in emergency medicine',
      date: 'Aug 23, 2020',
      author: 'Albert Brian',
      authorLink: '',
      subTitle:
        "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
      postLink: '/post/post_details_right_sitebar_One',
    },
    {
      img: 'images/dental/blog2.jpg',
      title: 'Individual treatment & assistance',
      date: 'Aug 22, 2020',
      author: 'William Juarez',
      authorLink: '',
      subTitle:
        "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
      postLink: '/post/post_details_right_sitebar_One',
    },
    {
      img: 'images/dental/blog3.jpg',
      title: 'Child’s first hospital visit',
      date: 'Aug 21, 2020',
      author: 'Jamse Lewis',
      authorLink: '',
      subTitle:
        "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
      postLink: '/post/post_details_right_sitebar_One',
    },
    {
      img: 'images/blog3.jpg',
      title: 'Child’s first hospital visit',
      date: 'Aug 21, 2020',
      author: 'Jamse Lewis',
      authorLink: '',
      subTitle:
        "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
      postLink: '/post/post_details_right_sitebar_One',
    },
  ],
};

const mapLocationURL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193175.30893635444!2d-74.373409!3d40.841927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy%20Meadows%20Wetlands!5e0!3m2!1sen!2sbd!4v1701067943819!5m2!1sen!2sbd';

const contactData = {
  sectionHeadingData: {
    title: `Contact us for any  <span class="st-pink">said</span><br/>
      treatment`,
  },
};

const Home15 = () => {
  return (
    <div>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero15 data={heroData} />
      <About4 data={aboutData} />
      <Funfact2 />
      <ServiceSlider data={serviceData} varient="st-type1" />
      {/* <BeforeAfter2 data={beforeAfterData} /> */}
      <Price2 data={priceData} varient="st-color2" />
      <Appointment3 data={appointmentData} />
      <TestimonialSlider2 data={testimonialData} varient="st-type1 st-color1" />
      <SpecialistsSlider3 data={specialistData} />
      {/* <PostWrapper3 data={postData} varient="st-type2" /> */}
      {/* <LocationInMap data={mapLocationURL} /> */}
      <Contact3 data={contactData} />
    </div>
  );
};

export default Home15;
