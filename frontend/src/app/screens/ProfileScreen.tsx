import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Phone, MapPin, Bell, HelpCircle, LogOut, ChevronRight, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { useUser } from '../context/UserContext';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dra. Ana Silva',
      specialty: 'Cardiologia',
      date: '22/05/2026',
      time: '14:30'
    }
  ];

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const completedAppointments = [
    {
      id: 2,
      doctor: 'Dr. Carlos Santos',
      specialty: 'Clínico Geral',
      date: '10/05/2026'
    },
    {
      id: 3,
      doctor: 'Dra. Maria Oliveira',
      specialty: 'Dermatologia',
      date: '28/04/2026'
    },
    {
      id: 4,
      doctor: 'Dr. João Pereira',
      specialty: 'Ortopedia',
      date: '15/04/2026'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-6">
      <div className="bg-gradient-to-br from-[#4F8CFF] to-[#3D7AED] px-6 pt-12 pb-20 rounded-b-[2rem]">
        <button
          onClick={() => navigate('/home')}
          className="p-2 hover:bg-white/20 rounded-xl transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <User className="w-10 h-10 text-[#4F8CFF]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">
              {user?.name || 'Paciente'}
            </h1>
            <p className="text-lg text-white/90">
              {user?.phone ? formatPhoneNumber(user.phone) : '(00) 00000-0000'}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Card variant="elevated" className="mb-6">
            <h2 className="text-lg font-semibold text-[#1E293B] mb-4">Informações Pessoais</h2>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="text-sm text-[#64748B]">Nome</p>
                    <p className="text-base text-[#1E293B]">{user?.name || 'Paciente'}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#64748B]" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="text-sm text-[#64748B]">Telefone</p>
                    <p className="text-base text-[#1E293B]">
                      {user?.phone ? formatPhoneNumber(user.phone) : '(00) 00000-0000'}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#64748B]" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="text-sm text-[#64748B]">Endereço</p>
                    <p className="text-base text-[#1E293B]">Rua das Palmeiras, 456</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#64748B]" />
              </button>
            </div>
          </Card>

          <Card variant="elevated" className="mb-6">
            <h2 className="text-lg font-semibold text-[#1E293B] mb-4">Configurações</h2>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
                  <p className="text-base text-[#1E293B]">Notificações</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#64748B]" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
                  <p className="text-base text-[#1E293B]">Ajuda e Suporte</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#64748B]" />
              </button>
            </div>
          </Card>

          <Card variant="elevated" className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1E293B]">Consultas Futuras</h2>
              <Badge variant="info">{upcomingAppointments.length}</Badge>
            </div>

            <div className="space-y-3">
              {upcomingAppointments.map(appointment => (
                <div key={appointment.id} className="p-3 bg-[#F1F5F9] rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-base font-medium text-[#1E293B]">{appointment.doctor}</p>
                      <p className="text-sm text-[#64748B]">{appointment.specialty}</p>
                    </div>
                    <Badge variant="warning">Pendente</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#64748B]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <span>•</span>
                    <span>{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="elevated" className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1E293B]">Histórico de Consultas</h2>
              <Badge variant="success">{completedAppointments.length}</Badge>
            </div>

            <div className="space-y-2">
              {completedAppointments.map(appointment => (
                <div key={appointment.id} className="flex items-center justify-between p-3 hover:bg-[#F1F5F9] rounded-xl transition-colors">
                  <div>
                    <p className="text-base font-medium text-[#1E293B]">{appointment.doctor}</p>
                    <p className="text-sm text-[#64748B]">{appointment.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                      <p className="text-sm text-[#22C55E] font-medium">Realizada</p>
                    </div>
                    <p className="text-sm text-[#64748B]">{appointment.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-3 text-[#4F8CFF] text-base hover:underline">
              Ver todas →
            </button>
          </Card>

          <Card variant="outlined" className="border-[#EF4444] border-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 p-4 text-[#EF4444] hover:bg-[#FEE2E2] rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" strokeWidth={2} />
              <span className="font-semibold text-lg">Sair da Conta</span>
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
