import Landing from "./components/Landing";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Landing />
    </div>
  );
}
