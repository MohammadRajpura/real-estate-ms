import React from "react";
import Button from "./components/utility/Button";
import Title from "./components/utility/Title/Title";

const App = () => {
  return (
    <div>
      <Title title="What Our Clients Say" label="View All Testimonials">
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
      </Title>
      <Button elementType="a" color="grey-10" buttonType="outline">
        Send Your Message
      </Button>
    </div>
  );
};

export default App;
