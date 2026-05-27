import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Bell, CheckCircle, XCircle, Calendar, Clock } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

const notifications = [
  {
    id: 1,
    type: 'reminder',
    title: 'Lembrete de Consulta',
    message: 'Sua consulta com Dra. Ana Silva é amanhã às 14:30',
    time: '2 horas atrás',
    read: false,
    icon: Bell,
    color: '#FACC15'
  },
  {
    id: 2,
    type: 'confirmed',
    title: 'Consulta Confirmada',
    message: 'Você confirmou presença na consulta do dia 22/05',
    time: '1 dia atrás',
    read: false,
    icon: CheckCircle,
    color: '#22C55E'
  },
  {
    id: 3,
    type: 'scheduled',
    title: 'Consulta Agendada',
    message: 'Nova consulta agendada para 22/05 às 14:30',
    time: '3 dias atrás',
    read: true,
    icon: Calendar,
    color: '#4F8CFF'
  },
  {
    id: 4,
    type: 'cancelled',
    title: 'Consulta Cancelada',
    message: 'Sua consulta do dia 15/05 foi cancelada',
    time: '1 semana atrás',
    read: true,
    icon: XCircle,
    color: '#EF4444'
  }
];

export default function NotificationsScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/home')}
              className="p-2 hover:bg-[#F1F5F9] rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-[#1E293B]" strokeWidth={1.5} />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-[#1E293B]">Notificações</h1>
              <p className="text-sm text-[#64748B]">2 não lidas</p>
            </div>
          </div>
          <button className="text-[#4F8CFF] text-sm hover:underline">
            Marcar todas como lidas
          </button>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.div
              key={notification.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant={notification.read ? 'outlined' : 'elevated'}
                padding="md"
                className={`${!notification.read ? 'bg-[#EFF6FF]' : ''} transition-all`}
              >
                <div className="flex gap-4">
                  <div
                    className="rounded-full p-3 flex-shrink-0"
                    style={{ backgroundColor: `${notification.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: notification.color }} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-base font-semibold text-[#1E293B]">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-[#4F8CFF] rounded-full flex-shrink-0 mt-1.5" />
                      )}
                    </div>
                    <p className="text-base text-[#64748B] mb-2">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <p className="text-sm text-[#94A3B8]">{notification.time}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-[#F1F5F9] rounded-full p-8 mb-4">
            <Bell className="w-16 h-16 text-[#CBD5E1]" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
            Nenhuma notificação
          </h3>
          <p className="text-base text-[#64748B]">
            Você está em dia!
          </p>
        </div>
      )}
    </div>
  );
}
