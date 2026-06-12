"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Droplet, Heart, Leaf, Milk, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Our Story",
          id: "#about",
        },
        {
          name: "Flavors",
          id: "#products",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
      ]}
      brandName="Lassi Bliss"
      button={{
        text: "Order Now",
        href: "#products",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Authentic Lassi, Crafted Fresh Daily"
      description="Premium yogurt blends made from local ingredients. Visit us today or order ahead for pickup."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@LassiLover",
          testimonial: "The best lassi I've ever had! So fresh and truly authentic. My go-to spot now.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-loving-woman-doing-heart-symbol-shape-gesture_482257-111490.jpg",
        },
        {
          name: "Arjun M.",
          handle: "@FoodieFinds",
          testimonial: "Lassi Bliss delivers on its promise. High-quality ingredients and incredible flavors. A must-try!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg",
        },
        {
          name: "Priya S.",
          handle: "@WellnessQueen",
          testimonial: "Healthy, refreshing, and delicious! I love knowing exactly what goes into my drink. Pure bliss.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-spectacular-woman-laughing-front_197531-19644.jpg",
        },
        {
          name: "David K.",
          handle: "@LocalEats",
          testimonial: "Finally found an authentic lassi spot! The mango lassi is a game-changer. Highly recommend visiting.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-male-wearing-vintage-business-clo_613910-11962.jpg",
        },
        {
          name: "Emily R.",
          handle: "@SweetTreats",
          testimonial: "Each lassi is a work of art. You can taste the dedication in every sip. My new favorite beverage!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thirsty-curly-haired-young-woman-drinks-fresh-water-from-bottle-wears-blue-shirt-carries-bag-keeps-eyes-closed-strolls-outdoors-poses-against-blurred-background-hydration-aqua-balance-regulation_273609-60565.jpg",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="Taste the Tradition"
      tagAnimation="opacity"
      buttons={[
        {
          text: "Order Now",
          href: "#products",
        },
        {
          text: "Find Us",
          href: "#contact",
        },
      ]}
      buttonAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stylish-young-redhead-woman-wearing-grey-checkered-shirt-laughing-out-loud-while-having-fun-indoors_273609-9041.jpg",
          alt: "Sarah J.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/joyful-good-looking-ordinary-man-with-ginger-hair-bristle-blue-t-shirt-smiling-broadly_176420-27465.jpg",
          alt: "Arjun M.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-girl-sitting-cafe_1262-3083.jpg",
          alt: "Priya S.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-man-hostel_23-2150601149.jpg",
          alt: "David K.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-female-trendy-summer-red-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25758.jpg",
          alt: "Young beautiful smiling female in trendy summer red dress",
        },
      ]}
      avatarText="Join our happy customers"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563243.jpg"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Freshness Guaranteed",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Authentic Flavors",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Locally Sourced",
          icon: Milk,
        },
        {
          type: "text-icon",
          text: "Hand-Blended Perfection",
          icon: Droplet,
        },
        {
          type: "text-icon",
          text: "Healthy & Delicious",
          icon: Heart,
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      tagAnimation="opacity"
      title="The Craft Behind Every Sip"
      description="At Lassi Bliss, we believe in tradition, quality, and community. Our journey began with a passion for authentic Indian lassi, perfected over years using time-honored recipes."
      subdescription="We hand-pick the freshest local fruits and use premium, wholesome yogurt to create beverages that are both delicious and nutritious. Each lassi is a labor of love, ensuring a truly blissful experience."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/man-relaxing-by-vaping-from-hookah-bar_23-2149191838.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Ingredients",
          title: "Fresh Local Produce",
          subtitle: "Farm-to-cup goodness",
          description: "We partner with local farmers to source the freshest fruits and dairy, ensuring every lassi is packed with natural flavor and essential nutrients.",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-bottle-with-milk-near-glass-with-frozen-berries-ready-cocktail-making-isolated-white-table-with-melted-ice_346278-721.jpg",
        },
        {
          tag: "Tradition",
          title: "Authentic Recipes",
          subtitle: "Timeless taste",
          description: "Our lassis are crafted using traditional Indian methods passed down through generations, delivering an authentic flavor experience you won't find anywhere else.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-family-cooking-delicious-pizza_23-2150306981.jpg",
        },
        {
          tag: "Wellness",
          title: "Natural Health Benefits",
          subtitle: "Nourish your body",
          description: "Rich in probiotics and vitamins, our lassis are not just delicious but also contribute to your digestive health and overall well-being. A wholesome treat!",
          imageSrc: "http://img.b2bpic.net/free-photo/glad-positive-young-female-student-enjoys-summer-holidays-abroad-spends-free-time-cafe-eats-salad-red-smoothie-dressed-casually-likes-being-good-company-people-lifestyle-concept_273609-2187.jpg",
        },
        {
          tag: "Craftsmanship",
          title: "Artisanal Preparation",
          subtitle: "Hand-blended perfection",
          description: "Every lassi is hand-blended with care and precision by our expert team, ensuring a smooth, consistent texture and a burst of flavor in every sip.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-indian-drinks-arrangement_23-2149312382.jpg",
        },
      ]}
      title="Experience the Lassi Bliss Difference"
      description="We're dedicated to bringing you the purest, most delightful lassi, crafted with attention to every detail, from sourcing to your cup."
      tag="Why Choose Us"
      tagAnimation="opacity"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "mango-lassi",
          name: "Mango Lassi",
          price: "$6.00",
          variant: "Sweet & Tropical",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-milkshake-with-umbrella_23-2148371183.jpg",
        },
        {
          id: "sweet-lassi",
          name: "Sweet Lassi",
          price: "$5.00",
          variant: "Classic & Creamy",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-milkshake-with-mint-straw-table_141793-15559.jpg",
        },
        {
          id: "salted-lassi",
          name: "Salted Lassi",
          price: "$5.00",
          variant: "Savory & Refreshing",
          imageSrc: "http://img.b2bpic.net/free-photo/dovga-yogurt-boiled-pouring-inside-glass-grey_140725-14952.jpg",
        },
        {
          id: "strawberry-lassi",
          name: "Strawberry Lassi",
          price: "$6.00",
          variant: "Fruity & Delightful",
          imageSrc: "http://img.b2bpic.net/free-photo/raspberry-plum-smoothie-closed-jar-wooden-table-against-black-backdrop_23-2147946293.jpg",
        },
        {
          id: "rose-lassi",
          name: "Rose Lassi",
          price: "$6.50",
          variant: "Fragrant & Exotic",
          imageSrc: "http://img.b2bpic.net/free-photo/petals-cream-with-cup-drink-blue_114579-29082.jpg",
        },
        {
          id: "pistachio-lassi",
          name: "Pistachio Lassi",
          price: "$7.00",
          variant: "Rich & Nutty",
          imageSrc: "http://img.b2bpic.net/free-photo/jar-yogurt-half-cutted-lime_23-2148341675.jpg",
        },
      ]}
      title="Savor Our Signature Blends"
      description="Explore our exquisite range of lassis, from classic sweet and savory to refreshing fruit infusions. There's a perfect blend for every palate."
      tag="Our Menu"
      tagAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Anika Sharma",
          handle: "@AnikaFoodie",
          testimonial: "Absolutely divine! The Mango Lassi is unparalleled. You can truly taste the quality of the ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-drinking-juice-from-glass-bottle-looking-away_23-2148523461.jpg",
        },
        {
          id: "2",
          name: "Rohan Patel",
          handle: "@TravelerRohan",
          testimonial: "As a tourist, finding authentic Indian flavors is a treat. Lassi Bliss exceeded all expectations!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-delicious-pina-colada_23-2150183980.jpg",
        },
        {
          id: "3",
          name: "Meera Devi",
          handle: "@HealthyLiving",
          testimonial: "I appreciate the fresh, local ingredients. It's a healthy and delicious way to get my probiotics daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-candid-woman-student-eating-morning-cereals-having-her-breakfast-listening_1258-204737.jpg",
        },
        {
          id: "4",
          name: "Vivek Singh",
          handle: "@LassiConnoisseur",
          testimonial: "From the texture to the balance of flavors, every lassi is a masterpiece. My new favorite beverage spot.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-teenager-isolated_23-2149158179.jpg",
        },
        {
          id: "5",
          name: "Natasha Khan",
          handle: "@UrbanEats",
          testimonial: "The Rose Lassi is heavenly! A truly premium experience from taste to presentation. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-portrait-beautiful-young-woman-chilling-comfortable-cafe-winter-time-cheerful-mood-positive-emotions-long-brunette-hair-delicious-dessert-sweet-life_197531-1495.jpg",
        },
      ]}
      title="What Our Patrons Say"
      description="Hear from our happy customers who love the taste, quality, and refreshing experience of Lassi Bliss."
      tag="Customer Reviews"
      tagAnimation="opacity"
      speed={40}
      topMarqueeDirection="left"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What makes Lassi Bliss lassis authentic?",
          content: "Our lassis are crafted using traditional Indian recipes and methods, ensuring an authentic taste profile. We focus on natural ingredients and avoid artificial additives.",
        },
        {
          id: "q2",
          title: "Where do you source your ingredients?",
          content: "We pride ourselves on using fresh, locally sourced fruits and premium quality yogurt from trusted regional suppliers to support our community and ensure freshness.",
        },
        {
          id: "q3",
          title: "Do you offer vegan or dairy-free options?",
          content: "Currently, our traditional lassis contain dairy. We are always exploring new recipes and options, so please stay tuned for potential vegan offerings in the future!",
        },
        {
          id: "q4",
          title: "Can I order online for pickup?",
          content: "Yes! You can place your order conveniently through our website and pick it up at our physical location. Look for the 'Order Now' button to get started.",
        },
        {
          id: "q5",
          title: "Are there any allergens in your lassis?",
          content: "Our lassis contain dairy. Some flavors may include nuts (e.g., pistachio). Please inform our staff about any allergies when ordering, and we can provide detailed ingredient information.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Have questions about our ingredients, ordering, or anything else? We've got answers to help you enjoy your Lassi Bliss experience."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Connect With Us"
      title="Visit Our Shop or Join Our Community"
      description="Find us at our vibrant location for a refreshing experience, or sign up for our newsletter to receive updates on new flavors, special offers, and events!"
      tagAnimation="opacity"
      inputPlaceholder="Enter your email"
      buttonText="Subscribe Now"
      termsText="By clicking Subscribe Now you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Flavors",
              href: "#products",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Visit Us",
              href: "#contact",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/lassibliss",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/lassibliss",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Lassi Bliss. All rights reserved."
      bottomRightText="Handcrafted with joy."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
