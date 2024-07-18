import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";

function BottomScrollspy() {
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     let scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     let sections = document.querySelectorAll(".scrollspy-section");
//     sections.forEach((section) => {
//       let sectionTop = section.offsetTop;
//       let sectionBottom = sectionTop + section.offsetHeight;
//       if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
//         let id = section.getAttribute("id");
//         document.querySelectorAll(".nav-link").forEach((link) => {
//           link.classList.remove("active");
//           if (link.getAttribute("href") === `#${id}`) {
//             link.classList.add("active");
//           }
//         });
//       }
//     });
//   };

  return (
    <Nav className="justify-content-center fixed-bottom bg-light p-2 pt-6">
      <Nav.Item>
        <Nav.Link href="#section1" className="nav-link active">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#section2" className="nav-link">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#section2" className="nav-link">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#section2" className="nav-link">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#section2" className="nav-link">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#section2" className="nav-link">
          <img
            src="https://images.all-free-download.com/images/thumbjpg/iphone_6_sample_photo_566464.jpg"
            alt=""
            width={"200px"}
          />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BottomScrollspy;
