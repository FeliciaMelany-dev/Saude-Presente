import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function ConfirmAppointmentScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/appointment-confirmed-success');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/home')}
            className="p-2 hover:bg-[#F1F5F9] rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#1E293B]" strokeWidth={1.5} />
          </button>
          <h1 className="text-2xl font-semibold text-[#1E293B]">Confirmar Presença</h1>
        </div>
      </div>

      <div className="p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <Card variant="elevated">
            <div className="text-center mb-6">
              <div className="bg-[#22C55E] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-[#22C55E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-[#1E293B] mb-2">
                Confirme sua presença
              </h2>
              <p className="text-base text-[#64748B]">
                Ajude-nos a organizar melhor o atendimento
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
                  <User className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#1E293B]">Dra. Ana Silva</p>
                  <p className="text-base text-[#64748B]">Cardiologia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#1E293B]">Quinta-feira, 22 de Maio</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-[#64748B]" strokeWidth={1.5} />
                    <p className="text-base text-[#64748B]">14:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#DCFCE7] rounded-2xl mb-6">
              <p className="text-sm text-[#166534] text-center">
                ✅ Ao confirmar, você garante que estará presente na consulta
              </p>
            </div>

            <Button fullWidth variant="secondary" onClick={handleConfirm}>
              <CheckCircle className="w-5 h-5" />
              Sim, Estarei Presente
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-[#EFF6FF]" padding="md">
            <h3 className="font-medium text-[#1E293B] mb-2">Por que confirmar é importante?</h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex gap-2">
                <span>•</span>
                <span>Evita atrasos no atendimento</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Libera vagas para outros pacientes</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Melhora a organização da clínica</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
