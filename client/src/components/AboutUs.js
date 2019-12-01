import React from "react";
import AboutMe from "../img/about-me.jpg";

const AboutUs = () => {
  document.title = "About Us | Veganease";
  return (
    <React.Fragment>
      <div className="aboutme-container">
        <div className="aboutme-img">
          <img
            className="aboutme-img__image"
            src={AboutMe}
            alt="Veganease Owner Vanessa"
          />
        </div>
        <div className="aboutme-text">
          <h4 className="aboutme-text__title">Why Veganease?</h4>
          <p>
            The inception of Veganease, can be accredited to our founder’s
            personal & hands-on research in veganism. Five years ago, Vanessa
            Wilson initiated a personal lifestyle change, which deeply
            prioritized weekly plant-based grocery shopping, daily physical HIIT
            workout routines, and creating the time to make her own meals so
            that she would stay on track through her school and work schedules.
          </p>
          <p>
            Vanessa’s inspiration is rooted in her early childhood, as she
            states, “I am a first generation Jamaican- American in my family. I
            grew up in a home where authentic Jamaican cuisine was prepared
            daily. This included, but was not limited to, chicken, goat,
            oxtails, stewed or baked in hefty, savory gravies. As well as the
            four cheese baked macaroni and cheese, which would fail the family
            test if the cheese to macaroni ratio was, in fact, equal. I
            witnessed my mother be the chef for all family functions, she cooked
            for dozens of people each eventful day of the year. However, as a
            child, likely due to my mother having to work eight hours daily to
            provide for the household, I strayed away from my culture and became
            more and more immersed in the American culture, the American diet. I
            based my reality in a culture and diet fascinated with burgers,
            hotdogs, and cheeses of all kinds. I preferred breaking fast with
            honey glazed turkey with everything on a roll from the bodega up the
            block, with a side of honey BBQ potato chips and a fruit punch. (I
            guess I liked honey? *shrugs*) (FYI: honey isn’t vegan) I recall
            hating fruit as a child and despising the texture of salad, but IHOP
            for dinner was definitely my speed.
          </p>
          <p>
            What I am showing you here, is that I am no different from you. It
            is extremely likely your childhood was like mine, in that eating
            “good” food was celebrated but eating to prevent illness or
            contribute to a healthier, more energetic and fulfilling lifestyle,
            was not. I reached a point in my life where I was determined to take
            charge and make a lifestyle change for the preservation of my
            physical, mental, and spiritual wellness. Poor eating habits can be
            linked to traumatic experiences. Most of us use food to cope with
            stress, which can cause an over-indulgence in fatty and high caloric
            foods, therefore, creating an unhealthy lifestyle. An unhealthy diet
            and lifestyle causes illnesses and all sorts of fatal ailments
            humans experience today. We must consider how our eating habits
            affect our mental health and overall mood. It’s time to get to the
            root of these effects.”
          </p>
          <p>
            Veganism is a simple and logical approach to dieting and wellness
            for human beings. Our physical bodies require care in the form of an
            abundance of water through drinking and eating, the right amounts of
            fats, sugars and acids. Veganism is logical as it pertains to our
            planet, cutting out the “middle animal” and getting straight to the
            greens. Meat consumption uses an unbelievably wasteful amount of
            water, which is required to feed and raise cattle to provide humans
            with beef burgers and pounds of steak.{" "}
          </p>
          <p>
            Honestly, the list goes on and on. We know someone like you gets it,
            especially if you’re already accustomed to the vegan lifestyle, you
            attracted us for a reason. We’re ready and willing to help you along
            wherever you are, on whatever journey you’re on. We know you have so
            much on your plate, that sometimes you don't even want to make your
            own plate. We feel you! Between work, home, and kids, it's difficult
            to squeeze in time and energy to cook every meal, as well as make
            sure it aligns with your wellness goals. We get it, and that's why
            our service will lighten your load, so you don't have to worry about
            what to eat, when to eat and if you're making a smart meal decision.
            Our vision is to return to nature by influencing a worldwide vegan
            lifestyle. Our goal is to make “vegan easy for you” with Veganease.{" "}
          </p>
        </div>
        <div className="services-container">
          <div className="grid-container">
            <div className="services">
              <h3>Who Are We</h3>
              <p>
                Veganease is a meal prep service that specializes in vegan
                cuisine. Offering break fast, lunch, dinner & snack options
                using a variety of juicy, hand-picked, 100% organic fruits &
                vegetables, Veganease is the perfect choice for your busy
                lifestyle. We're here to make vegan easy for you!
              </p>
            </div>
            <div className="services">
              <h3>Our Services</h3>
              <p>
                Customize your meal options per week or per month and we'll
                handle the rest, by delivering fresh plant based meals right to
                your doorstep. We offer fresh, affordable, and of course tasty
                vegan meal options. The diversity in our menu will make you fall
                in love with your vegan lifestyle, while keeping it super easy
                to maintain.
              </p>
            </div>
            <div className="services">
              <h3>Fast and Easy</h3>
              <p>
                We know you have so much on your plate, that sometimes you don't
                even want to make your plate. We feel you! Between work, home
                and kids, it's difficult to squeeze in time and energy to cook
                every meal, as well as make sure it aligns with your wellness
                goals. We get it, and that's why our service will lighten your
                load, so you don't have to worry about what to eat, when to eat
                and if you're making a smart meal decision.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
