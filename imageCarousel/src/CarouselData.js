// CarouselData.js
import guitarImg from "../assets/20211225_191735_3382CE20-3BB9-44AE-9B2E0D25636C92FF_30920b02-2a34-450d-aac98514749e8aa1.jpg";
import sportsImg from "../assets/featured-sports-bars-sydney.jpg";
import photoImg from "../assets/jannes-glas-0NaQQsLWLkA-unsplash-1-edited-scaled.jpg";
import bookClubImg from "../assets/non-book-club-blog.png";
// import friendsImg from "../assets/young-diverse-group-friends-having-600nw-2363810697.webp";

const CarouselData = (() => {
  const carouselState = { currentId: 0 };

  const carouselData = [
    { id: 0, title: "Guitar Meet Up", image: guitarImg },
    { id: 1, title: "Sports Bar Night", image: sportsImg },
    { id: 2, title: "Photography Walk", image: photoImg },
    { id: 3, title: "Book Club Meetup", image: bookClubImg },
    // { id: 4, title: "Friends Gathering", image: friendsImg },
  ];

  function getCarouselData() {
    return carouselData;
  }
  function getCarouselDataById(id) {
    return carouselData.find((item) => item.id === id);
  }
  function getCarouselCurrentId() {
    return carouselState.currentId;
  }
  function setCarouselCurrentId(id) {
    carouselState.currentId = id;
  }

  return { getCarouselData, getCarouselDataById, getCarouselCurrentId, setCarouselCurrentId };
})();

export default CarouselData;