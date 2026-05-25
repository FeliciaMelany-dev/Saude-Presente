import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import confetti from 'canvas-confetti';

export default function BookingConfirmedScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4F8CFF', '#22C55E', '#FACC15']
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="mb-6"
      >
        <div className="bg-[#22C55E] rounded-full p-6 shadow-2xl">
          <CheckCircle className="w-20 h-20 text-white" strokeWidth={2} />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-semibold text-[#1E293B] text-center mb-3"
      >
        Consulta Agendada!
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-[#64748B] text-center mb-8 max-w-sm"
      >
        Sua consulta foi marcada com sucesso. Você receberá lembretes automáticos.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl p-6 shadow-lg w-full max-w-md mb-8"
      >
        <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Detalhes da Consulta</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
              <Calendar className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-[#64748B]">Data</p>
              <p className="text-base font-medium text-[#1E293B]">Quinta, 22 de Maio de 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
              <Clock className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-[#64748B]">Horário</p>
              <p className="text-base font-medium text-[#1E293B]">14:30</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
              <MapPin className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-[#64748B]">Local</p>
              <p className="text-base font-medium text-[#1E293B]">Rua das Flores, 123 - Centro</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#EFF6FF] rounded-2xl">
          <p className="text-sm text-[#1E293B] text-center">
            📱 Você receberá um lembrete 1 dia antes da consulta
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md"
      >
        <Button fullWidth onClick={() => navigate('/home')}>
          Voltar para Início
        </Button>
      </motion.div>
    </div>
  );
}
