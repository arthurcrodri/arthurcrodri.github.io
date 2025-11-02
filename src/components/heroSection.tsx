import { Link } from "react-router-dom"
import profile from "../assets/profile.png"

const HeroSection = () => {
    return (
        <section className="bg-brand-light-purple py-20 md:py-28">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6">
                <div className="flex-shrink-0">
                    <img src={profile} alt="Arthur Rodrigues" className="w-48 h-48 md:w-56 md:h-56" />
                </div>

                <div className="text-center md:text-left">
                    <p className="text-lg font-medium text-brand-gold">bem-vindo ao site de</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold mt-1">
                        Arthur Rodrigues
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-brand-gold mt-2">
                        futuro engenheiro de computação
                    </h2>

                    <div className="mt-8">
                        <Link to="/sobre" className="inline-block bg-brand-purple text-brand-gold font-bold py-3 px-8 rounded-lg border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-purple transition-colors shadow-md">
                        Saiba Mais
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection