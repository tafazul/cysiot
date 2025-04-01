
import styles from './styles.module.css';

const ContactUsSection = () => {
  return (
    <section className="relative bg-[#c2d4f2]">
      {/* Diagonal Shape */}
      <div className={` w-full h-24 bg-[#293d61] ${styles['clip-path-custom']}`}></div>

      <div className="relative py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Left Side - Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#293d61]">Get in touch</h2>

        {/* Right Side - Description & Button */}
        <div className="mt-6 md:mt-0 md:w-2/3 text-center md:text-left">
          <p className="text-lg text-[#293d61]">
            We're here to answer all of your questions and talk you through the benefits of SITE Services and Products.
          </p>
          <button className="mt-6 flex items-center gap-2 bg-[#12124D] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-[#0E0E3A] transition">
            Contact us {'->'}
          </button>
        </div>
      </div>

      {/* Clip Path for Diagonal Effect */}
      {/* <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
        }
      `}</style> */}
    </section>
  );
}

export default ContactUsSection;