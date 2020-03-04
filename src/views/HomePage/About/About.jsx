import React, { useEffect } from "react";
import {
  MDBCarousel,
  MDBContainer,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBIcon,
  MDBMask
} from "mdbreact";

import pedagogo from "./../../../assets/images/about/pedagogo.jpg";
import design from "./../../../assets/images/about/alejandro.jpg";
import dev from "./../../../assets/images/about/julio.jpg";
import exp from "./../../../assets/images/about/expert.jpg";

import bg from "./../../../assets/images/content/signal/QueEs.jpg";

import "./style.scss";

export const About = props => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

  return (
    <div className="contenido">
      <section id="testimonials" className="text-center py-5 wow fadeIn">
        <MDBContainer>
          <h2
            className="h1-responsive font-weight-bold mb-5"
            style={{ color: "#000" }}
          >
            About Us
          </h2>
          <MDBCarousel
            id="carousel-example-1"
            activeItem={1}
            length={4}
            slide={true}
            showControls={true}
            showIndicators={true}
            multiItem
            className="no-flex  testimonial-carousel  carousel-fade"
          >
            <MDBCarouselInner role="listbox">
              <MDBCarouselItem itemId="1" className="active">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-3">
                    <img
                      src={pedagogo}
                      className="rounded-circle img-fluid"
                      alt="First sample avatar"
                    />
                  </div>
                  <p className="texto-informativo">
                    <MDBIcon icon="quote-left" size="lg" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore cum accusamus eveniet molestias voluptatum inventore
                    laboriosam labore sit, aspernatur praesentium iste impedit
                    quidem dolor veniam.
                  </p>
                  <h4 className="font-weight-bold">Oscar Fabian Patiño</h4>
                  <h6 className="font-weight-bold my-3">
                    Ing Sistemas / Pedagogo
                  </h6>
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2" className="active">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src={exp}
                      className="rounded-circle img-fluid"
                      alt="First sample avatar"
                    />
                  </div>
                  <p className="texto-informativo">
                    <MDBIcon icon="quote-left" size="lg" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore cum accusamus eveniet molestias voluptatum inventore
                    laboriosam labore sit, aspernatur praesentium iste impedit
                    quidem dolor veniam.
                  </p>
                  <h4 className="font-weight-bold">Esmeralda cruz</h4>
                  <h6 className="font-weight-bold my-3">expert / Docent</h6>
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3" className="active">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src={design}
                      className="rounded-circle img-fluid"
                      alt="First sample avatar"
                    />
                  </div>
                  <p className="texto-informativo">
                    <MDBIcon icon="quote-left" size="lg" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore cum accusamus eveniet molestias voluptatum inventore
                    laboriosam labore sit, aspernatur praesentium iste impedit
                    quidem dolor veniam.
                  </p>
                  <h4 className="font-weight-bold">Alejandro Peña Soto</h4>
                  <h6 className="font-weight-bold my-3">Student / Design</h6>
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4" className="active">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src={dev}
                      className="rounded-circle img-fluid"
                      alt="First sample avatar"
                    />
                  </div>
                  <p className="texto-informativo">
                    <MDBIcon icon="quote-left" size="lg" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore cum accusamus eveniet molestias voluptatum inventore
                    laboriosam labore sit, aspernatur praesentium iste impedit
                    quidem dolor veniam.
                  </p>
                  <h4 className="font-weight-bold">Julio Alfredo Vasquez</h4>
                  <h6 className="font-weight-bold my-3">Student / Developer</h6>
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBIcon icon="star" className="amber-text" />
                  <MDBMask overlay="black-slight" />
                </div>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </section>
    </div>
  );
};
