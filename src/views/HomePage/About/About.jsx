import React, { useEffect } from "react";
import {
  MDBCarousel,
  MDBContainer,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBIcon,
  MDBMask
} from "mdbreact";

import "./style.scss";

export const About = props => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

  return (
    <div className="contenido">
      <section id="testimonials" className="text-center py-5 wow fadeIn">
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold mb-5">About Us</h2>
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
                      src="https://scontent.feyp1-1.fna.fbcdn.net/v/t1.0-9/7706_10153282643007133_8565210206721975586_n.jpg?_nc_cat=109&_nc_oc=AQl_RvE2vzC4MB2Dl7e2jDh6roaEg1u9lICMqGPjs5Ml20JF9vDGDdniJRA8vt5DNY8&_nc_ht=scontent.feyp1-1.fna&oh=a7fb21877d6a8098b2bc08944f1c54e6&oe=5E6125CA"
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
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
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
                      src="https://i.ibb.co/Zf19c4h/Most-Beautiful-Girls-Wallpapers.jpg"
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
                  <h4 className="font-weight-bold">Fan Bingbing</h4>
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
                      src="https://image.ibb.co/gbeBCx/julio.jpg"
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
