import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Intro from '../../Components/Intro'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: false
});

export default function Home() {

  const text_generator_heading = "Text Generator";
  const text_generator_first_content = "Our Text generator uses state-of-the-art artificial intelligence algorithms to generate text from your input. Whether you need promotional text, educational content, or anything in between, our AI is here to help.";
  const text_generator_second_content = "Get started by entering your prompt and let our AI work its magic to generate helpful text for you.";

  const image_generator_heading = "Image Generator";
  const image_generator_first_content = "Our image generator uses state-of-the-art artificial intelligence algorithms to create stunning Images from your input. Whether you need promotional images, educational content, or anything in between, our AI is here to help.";
  const image_generator_second_content = "Get started by entering your prompt and let our AI work its magic to generate beautiful images for you.";

  const image_analyzer_heading = "Image Analyzer";
  const image_analyzer_first_content = "Our image analyzer uses state-of-the-art artificial intelligence algorithms to analyze your given image. You need to analyze your image, our AI is here to help.";
  const image_analyzer_second_content = "Get started by entering your image and let our AI work its magic to analyze your image for you.";

  return (
    <div>
      <Header />
      <div className='section mobile-body'>
        <Intro btn_text="Text Generator" link="/generator" heading={text_generator_heading} first_content={text_generator_first_content} second_content={text_generator_second_content} />
        <div className="image">
          <img className="shape-gif img-fluid" data-aos="fade-in-left" data-aos-duration="2000" data-aos-easing="ease-in-out" src="img/giphy.gif" alt="Logo" />
        </div>
      </div>

      <div className='section'>
        <div className="image">
          <img className="shape" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" src="img/shape.svg" alt="Logo" />
        </div>
        <Intro btn_text="Image Generator" link="/image_generator" heading={image_generator_heading} first_content={image_generator_first_content} second_content={image_generator_second_content} />
      </div>

      <div className='section analyzer-section mobile-body'>
        <Intro link="/analyzer" btn_text="Image Analyzer" heading={image_analyzer_heading} first_content={image_analyzer_first_content} second_content={image_analyzer_second_content} />
        <div className="image">
          <img className="gif img-fluid" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" src="img/74pZ.gif" alt="Logo" width="80%" height="70%" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
