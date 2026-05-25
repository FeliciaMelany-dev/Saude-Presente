import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Bell } from 'lucide-react';
import { Button } from '../components/Button';

const slides = [
  {
    icon: Calendar,
    title: 'Marque consultas sem precisar ligar',
    description: 'Agende suas consultas de forma rápida e simples, direto pelo aplicativo.',
    color: '#4F8CFF'
  },
  {
    icon: Bell,
    title: 'Receba lembretes e nunca mais esqueça',
    description: 'Notificações automáticas para você não perder nenhuma consulta importante.',
    color: '#22C55E'
  }
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full">
        <button
          onClick={handleSkip}
          className="self-end text-[#64748B] mb-8 text-base hover:text-[#4F8CFF] transition-colors"
        >
          Pular
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-white rounded-full p-12 mb-8 shadow-lg"
              style={{ backgroundColor: `${slide.color}15` }}
            >
              <Icon className="w-24 h-24" style={{ color: slide.color }} strokeWidth={1.5} />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-3xl font-semibold text-[#1E293B] mb-4 px-4"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg text-[#64748B] px-6 leading-relaxed"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[#4F8CFF]'
                  : 'w-2 bg-[#CBD5E1]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 max-w-md mx-auto w-full">
        <Button onClick={handleNext} fullWidth>
          {currentSlide === slides.length - 1 ? 'Começar' : 'Continuar'}
        </Button>
      </div>
    </div>
  );
}
