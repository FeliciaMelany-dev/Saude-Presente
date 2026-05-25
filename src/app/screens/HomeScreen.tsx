import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, Bell, CheckCircle, XCircle, History, UserCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { useUser } from '../context/UserContext';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user } = useUser();

  const firstName = user?.name.split(' ')[0] || 'Paciente';

  const nextAppointment = {
    id: 1,
    doctor: 'Dra. Ana Silva',
    specialty: 'Cardiologia',
    date: '2026-05-22',
    dateFormatted: 'Quinta-feira, 22 de Maio',
    time: '14:30',
    address: 'Rua das Flores, 123 - Centro',
    status: 'pending',
    daysUntil: 4
  };

  const recentAppointments = [
    {
      id: 2,
      doctor: 'Dr. Carlos Santos',
      specialty: 'Clínico Geral',
      date: '2026-05-10',
      dateFormatted: '10 de Maio',
      status: 'completed'
    },
    {
      id: 3,
      doctor: 'Dra. Maria Oliveira',
      specialty: 'Dermatologia',
      date: '2026-04-28',
      dateFormatted: '28 de Abril',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="bg-gradient-to-br from-[#4F8CFF] to-[#3D7AED] px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex justify-between items-start mb-8">
          <div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-semibold text-white mb-1"
            >
              Olá, {firstName}! 👋
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90"
            >
              Sua saúde em dia
            </motion.p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/notifications')}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl hover:bg-white/30 transition-colors relative"
            >
              <Bell className="w-6 h-6 text-white" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">2</span>
              </div>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/profile')}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl hover:bg-white/30 transition-colors"
            >
              <UserCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card variant="elevated" className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FACC15] bg-opacity-20 p-2 rounded-xl">
                <Bell className="w-5 h-5 text-[#FACC15]" />
              </div>
              <p className="text-base font-medium text-[#1E293B]">
                Faltam {nextAppointment.daysUntil} dias para sua consulta
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-[#1E293B]">Próxima Consulta</h2>
              <Badge variant="warning">Pendente</Badge>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
                  <User className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#1E293B]">{nextAppointment.doctor}</p>
                  <p className="text-base text-[#64748B]">{nextAppointment.specialty}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#1E293B]">{nextAppointment.dateFormatted}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-[#64748B]" strokeWidth={1.5} />
                    <p className="text-base text-[#64748B]">{nextAppointment.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#4F8CFF] bg-opacity-10 p-2.5 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-base text-[#1E293B]">{nextAppointment.address}</p>
                  <button className="text-[#4F8CFF] text-base mt-1 hover:underline">
                    Como chegar →
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => navigate('/confirm')}
              >
                <CheckCircle className="w-5 h-5" />
                Confirmar
              </Button>
              <Button
                variant="destructive"
                size="md"
                fullWidth
                onClick={() => navigate('/cancel')}
              >
                <XCircle className="w-5 h-5" />
                Cancelar
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#1E293B]">Histórico</h3>
            <button className="text-[#4F8CFF] text-base hover:underline">Ver tudo</button>
          </div>

          <div className="space-y-3">
            {recentAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card variant="outlined" padding="md">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-base font-medium text-[#1E293B] mb-1">
                        {appointment.doctor}
                      </p>
                      <p className="text-sm text-[#64748B] mb-1">{appointment.specialty}</p>
                      <p className="text-sm text-[#64748B]">{appointment.dateFormatted}</p>
                    </div>
                    <Badge variant="success">
                      <CheckCircle className="w-3.5 h-3.5 mr-1" />
                      Realizada
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-6 py-4">
        <Button fullWidth onClick={() => navigate('/schedule')}>
          <Calendar className="w-5 h-5" />
          Agendar Nova Consulta
        </Button>
      </div>
    </div>
  );
}
