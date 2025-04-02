import "./App.css";
import ServiceCard from "./components/ServiceCard";

const App = () => {
  const services = [
    { id: 1, title: "Cloud Computing", desc: "Scalable cloud solutions" },
    { id: 2, title: "Cybersecurity", desc: "Data protection & security" },
    { id: 3, title: "AI & ML", desc: "Building smart systems" },
  ];

  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold">Services</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
};

export default App;
