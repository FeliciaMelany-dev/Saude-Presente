import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { XCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function CancelAppointmentScreen() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/appointment-cancelled-success');
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
          <h1 className="text-2xl font-semibold text-[#1E293B]">Cancelar Consulta</h1>
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
              <div className="bg-[#EF4444] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-10 h-10 text-[#EF4444]" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-[#1E293B] mb-2">
                Tem certeza?
              </h2>
              <p className="text-base text-[#64748B]">
                Você realmente deseja cancelar esta consulta?
              </p>
            </div>

            <div className="p-4 bg-[#F1F5F9] rounded-2xl mb-6">
              <p className="text-base font-medium text-[#1E293B] mb-2">Detalhes da Consulta</p>
              <div className="space-y-1 text-sm text-[#64748B]">
                <p><span className="font-medium">Médico:</span> Dra. Ana Silva</p>
                <p><span className="font-medium">Especialidade:</span> Cardiologia</p>
                <p><span className="font-medium">Data:</span> Quinta, 22 de Maio</p>
                <p><span className="font-medium">Horário:</span> 14:30</p>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="destructive"
                fullWidth
                size="lg"
                onClick={handleCancel}
              >
                <XCircle className="w-5 h-5" />
                Sim, Cancelar Consulta
              </Button>
              <Button
                variant="outline"
                fullWidth
                size="lg"
                onClick={() => navigate('/home')}
              >
                Não, Manter Consulta
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-[#FEF9C3] border-l-4 border-[#FACC15]" padding="md">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-[#854D0E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#854D0E] mb-1">Atenção</p>
                <p className="text-sm text-[#854D0E]">
                  Ao cancelar, sua vaga será liberada para outro paciente. Cancele apenas se realmente não puder comparecer.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
