import Banner from "../../assets/aboutBanner2.jpg";

function About() {
  return (
    <div className=" px-[80px] my-20">
      <h2 className="text-2xl font-semibold"></h2>
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div className="relative">
          <img src={Banner} alt="Banner" className="rounded-lg h-[400px] w-full object-cover"/>
        </div>
        <div className="bg-[#e9faff] p-2 flex justify-center items-center rounded-lg">
        <div className=" max-w-[85%]">
          <h2 className="text-2xl mb-2 font-semibold text-[#ef4281]">Ultimed pharmacy
            <span className="block text-sm text-gray-400">Your Health Our Care</span>
          </h2>
          <p className="leading-6 tracking-wide">
            At Ultimed, we believe in health and wellness for everyone. With a
            strong commitment to patient care, our pharmacy has been serving the
            community for over 2 years. <br /> We offer a variety of services
            including prescription filling, medication management,
            immunizations, and health screenings. Visit us today to experience
            our patient-centered approach.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
