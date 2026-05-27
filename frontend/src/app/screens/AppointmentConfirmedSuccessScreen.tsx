import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export default function AppointmentConfirmedSuccessScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="mb-6"
      >
        <div className="bg-white rounded-full p-8 shadow-2xl">
          <CheckCircle className="w-24 h-24 text-[#22C55E]" strokeWidth={2} />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-semibold text-white text-center mb-3"
      >
        Presença Confirmada!
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-white/90 text-center mb-8"
      >
        Te esperamos no dia 22 de Maio às 14:30
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button variant="outline" onClick={() => navigate('/home')} className="bg-white text-[#22C55E] border-white hover:bg-white/90">
          Voltar para Início
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-white/80 text-sm"
      >
        Redirecionando em 3 segundos...
      </motion.div>
    </div>
  );
}
