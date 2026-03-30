import Featured from "../Featured/Featured";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Hero from "../Hero/Hero";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (<>
        <Hero />
        <Featured />
        <Testimonials />
        <About />
       </>
    );
}
