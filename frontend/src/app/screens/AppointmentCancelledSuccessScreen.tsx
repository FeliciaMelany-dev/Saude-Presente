import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export default function AppointmentCancelledSuccessScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="mb-6"
      >
        <div className="bg-[#4F8CFF] rounded-full p-8 shadow-2xl">
          <CheckCircle className="w-24 h-24 text-white" strokeWidth={2} />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-semibold text-[#1E293B] text-center mb-3"
      >
        Consulta Cancelada
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-[#64748B] text-center mb-8 max-w-sm"
      >
        Sua vaga foi liberada para outro paciente. Você pode agendar uma nova consulta a qualquer momento.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md space-y-3"
      >
        <Button fullWidth onClick={() => navigate('/schedule')}>
          Agendar Nova Consulta
        </Button>
        <Button fullWidth variant="outline" onClick={() => navigate('/home')}>
          Voltar para Início
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-[#64748B] text-sm"
      >
        Redirecionando em 3 segundos...
      </motion.div>
    </div>
  );
}
