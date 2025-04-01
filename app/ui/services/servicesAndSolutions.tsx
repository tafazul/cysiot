"use client";
import FlippingCard from '../components/FlippingCard/FlippingCard';
import styles from './styles.module.css'

const ServicesAndSolutions = () => {
    return (
        <div className='pt-[4rem] pb-[8rem]'>
            <div className="text-center">
                <p className={styles.services}>To empower businesses with innovative
                    Cybersecurity and IoT solutions, ensuring
                    a secure and connected future. 
                    {/* We
                    deliver AI-driven insights and scalable
                    technologies to protect against emerging
                    threats and drive seamless digital
                    transformation. Through continuous
                    innovation, we strive to build a safer,
                    smarter, and more sustainable digital
                    ecosystem for our clients. */}
                    </p>
            </div>
            <div className='pt-10'>
                <p className={styles.innovationText}>INNOVATIVE SOLUTIONS WE PROVIDE</p>

                <FlippingCard />
            </div>
        </div>


    );
};

export default ServicesAndSolutions;
