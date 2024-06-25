import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const slides = [
  {
    description: (
      <p>
        Organize, Gerencie e Realize Seus Projetos com Eficiência na{" "}
        <strong>Smart Plan</strong>. Entendemos que gerenciar projetos pode ser
        um desafio.
      </p>
    ),
  },
  {
    description: (
      <p>
        Por isso, desenvolvemos uma <strong>aplicação web completa</strong> que
        facilita o gerenciamento de seus projetos, desde a criação até a
        conclusão.
      </p>
    ),
  },
  {
    description: (
      <p>
        Com uma interface intuitiva e funcionalidades poderosas, você pode focar
        no que realmente importa:{" "}
        <strong>fazer seus projetos acontecerem</strong>.
      </p>
    ),
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  
  return (
    <section className="carousel">
      <button onClick={handlePrevSlide} className="arrow">
        <FaArrowAltCircleLeft />
      </button>

      <div className="slide">{slides[currentSlide].description}</div>

      <button onClick={handleNextSlide} className="arrow">
        <FaArrowAltCircleRight />
      </button>
    </section>
  );
}
