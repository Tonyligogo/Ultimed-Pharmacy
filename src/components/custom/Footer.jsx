import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/UltimedLogo2.jpg";
import { Mail, Phone } from "lucide-react";
function Footer() {
  return (
    <div className='grid grid-cols-4 gap-4 bg-[#eff4f8] px-[80px] py-10'>
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply" />
      </div>
      <div>
      <h1 className="text-xl font-semibold mb-4">Ultimed Pharmacy</h1>
        <p className="leading-7">
          We are your trusted partner in health and wellness. <br />
          Accessible. Affordable. Quality.
          <br />
          Contact us for any questions or concerns.
        </p>
        <ul className="flex gap-4 mt-2">
          <li><FaInstagram /></li>
          <li><FaXTwitter /></li>
          <li><FaFacebookF /></li>
          <li><FaLinkedin /></li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4">Working Hours</h1>
        <ul className="flex flex-col gap-2">
          <li>Mon - Sat: 09:00 - 21:00</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4">Address</h1>
        <ul className="flex flex-col gap-2">
          <li>1st Floor, Lang&apos;ata,</li>
          <li>Phenom Estate Shopping Centre,</li>
          <li className="flex items-center gap-2">
            <Phone size={16}/>
            0719384458
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16}/>
            ulyimedpharmacy@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
