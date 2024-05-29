import { GridLayout } from "./GridLayout/grid-layout";
import { useEffect, useState } from "react";
import Img from "./../assets/images/car1.webp";
import Img2 from "./../assets/images/car2.avif";
import Img3 from "./../assets/images/car3.jpg";
import Img4 from "./../assets/images/car4.webp";
import Img5 from "./../assets/images/car5.jpg";
import Img6 from "./../assets/images/car6.webp";
import Img7 from "./../assets/images/car7.jpg";
import Img8 from "./../assets/images/car8.webp";
import Img9 from "./../assets/images/car9.jpg";
import { Modal } from "./Modal/modal";
import clsx from "clsx";
import { Slider1 } from "./Slider/Slider";

const STORAGE_KEY = "feedback-form-state";

const SliderImages = [Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormDatga] = useState(localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) :{
    email: "",
    message: "",
  })

  const handleImageClick = (e) => {
    const imgId = e.target.getAttribute("data-img-id");
    setCurrentSlide(Number(imgId));
    setModalOpen(true);
  };

  const handleModalClose = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
    setFormDatga({
      email: "",
      message: ""
    })
    console.log(formData);
  }

  const handleEmailChange = (e) => {
    setFormDatga({...formData, email: e.target.value})
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  const handleMessageChange = (e) => {
    setFormDatga({...formData, message: e.target.value})
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <div className={clsx("container")}>
      <h1>Web lab 7</h1>
      <GridLayout>
        {SliderImages.map((img, index) => {
          return (
            <img
              className="grid-item"
              onClick={handleImageClick}
              data-img-id={index}
              key={img}
              src={img}
              alt="car"
            />
          );
        })}
      </GridLayout>
      {modalOpen && (
        <Modal onClose={handleModalClose}>
          <Slider1 images={SliderImages} current={currentSlide} />
        </Modal>
      )}

      <div className="container">
      <form action="" onSubmit={handleFormSubmit} autoComplete="off" className="feedback-form">
        <label>
          <p>Email</p>
          <input onChange={handleEmailChange} value={formData.email} type="email" name="email" autoFocus />
        </label>
        <label>
          <p>Message</p>
          <textarea onChange={handleMessageChange} value={formData.message} name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>

    </div>
  );
}

export default App;
