const Features = () => {
  const features = [
    { title: "Responsive Layouts", description: "Looks perfect on all devices, mobile, tablet, and desktop." },
    { title: "Customizable Templates", description: "Easily modify colors, fonts, and sections to match your brand." },
    { title: "Fast & Lightweight", description: "Optimized for performance and speed for better user experience." },
    { title: "24/7 Support", description: "Our team is ready to help you anytime you need assistance." },
  ];

  return (
    <section className="features">
      {features.map((feature, i) => (
        <div className="feature-box" key={i}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
