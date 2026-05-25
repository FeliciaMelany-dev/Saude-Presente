import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const monthsData = [
  {
    month: 'Maio',
    year: 2026,
    dates: [
      { date: '2026-05-20', day: '20', weekday: 'Ter', available: true },
      { date: '2026-05-21', day: '21', weekday: 'Qua', available: true },
      { date: '2026-05-22', day: '22', weekday: 'Qui', available: true },
      { date: '2026-05-23', day: '23', weekday: 'Sex', available: false },
      { date: '2026-05-24', day: '24', weekday: 'Sáb', available: false },
      { date: '2026-05-26', day: '26', weekday: 'Seg', available: true },
      { date: '2026-05-27', day: '27', weekday: 'Ter', available: true },
    ]
  },
  {
    month: 'Junho',
    year: 2026,
    dates: [
      { date: '2026-06-01', day: '01', weekday: 'Seg', available: true },
      { date: '2026-06-02', day: '02', weekday: 'Ter', available: true },
      { date: '2026-06-03', day: '03', weekday: 'Qua', available: true },
      { date: '2026-06-04', day: '04', weekday: 'Qui', available: false },
      { date: '2026-06-05', day: '05', weekday: 'Sex', available: true },
      { date: '2026-06-08', day: '08', weekday: 'Seg', available: true },
      { date: '2026-06-09', day: '09', weekday: 'Ter', available: true },
      { date: '2026-06-10', day: '10', weekday: 'Qua', available: false },
    ]
  },
  {
    month: 'Julho',
    year: 2026,
    dates: [
      { date: '2026-07-01', day: '01', weekday: 'Qua', available: true },
      { date: '2026-07-02', day: '02', weekday: 'Qui', available: true },
      { date: '2026-07-03', day: '03', weekday: 'Sex', available: true },
      { date: '2026-07-06', day: '06', weekday: 'Seg', available: true },
      { date: '2026-07-07', day: '07', weekday: 'Ter', available: false },
      { date: '2026-07-08', day: '08', weekday: 'Qua', available: true },
      { date: '2026-07-09', day: '09', weekday: 'Qui', available: true },
      { date: '2026-07-10', day: '10', weekday: 'Sex', available: true },
    ]
  },
  {
    month: 'Agosto',
    year: 2026,
    dates: [
      { date: '2026-08-03', day: '03', weekday: 'Seg', available: true },
      { date: '2026-08-04', day: '04', weekday: 'Ter', available: true },
      { date: '2026-08-05', day: '05', weekday: 'Qua', available: false },
      { date: '2026-08-06', day: '06', weekday: 'Qui', available: true },
      { date: '2026-08-07', day: '07', weekday: 'Sex', available: true },
      { date: '2026-08-10', day: '10', weekday: 'Seg', available: true },
      { date: '2026-08-11', day: '11', weekday: 'Ter', available: true },
      { date: '2026-08-12', day: '12', weekday: 'Qua', available: false },
    ]
  }
];

const availableTimes = [
  { time: '08:00', available: true },
  { time: '09:00', available: true },
  { time: '10:00', available: false },
  { time: '11:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: true },
  { time: '16:00', available: false },
  { time: '17:00', available: true },
];

export default function ScheduleScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'date' | 'time'>('date');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const currentMonth = monthsData[currentMonthIndex];
  const availableDates = currentMonth.dates;

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setTimeout(() => setStep('time'), 300);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    navigate('/booking-confirmed');
  };

  const selectedDateObj = availableDates.find(d => d.date === selectedDate);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => step === 'time' ? setStep('date') : navigate('/home')}
            className="p-2 hover:bg-[#F1F5F9] rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#1E293B]" strokeWidth={1.5} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-[#1E293B]">Agendar Consulta</h1>
            <p className="text-base text-[#64748B]">
              {step === 'date' ? 'Escolha a data' : 'Escolha o horário'}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <div className={`h-1 flex-1 rounded-full ${step === 'date' ? 'bg-[#4F8CFF]' : 'bg-[#22C55E]'} transition-colors`} />
          <div className={`h-1 flex-1 rounded-full ${step === 'time' ? 'bg-[#4F8CFF]' : 'bg-[#E2E8F0]'} transition-colors`} />
        </div>
      </div>

      <div className="p-6 pb-32">
        {step === 'date' && (
          <motion.div
            key={currentMonthIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
                <h2 className="text-xl font-semibold text-[#1E293B]">
                  {currentMonth.month} {currentMonth.year}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentMonthIndex(Math.max(0, currentMonthIndex - 1));
                    setSelectedDate(null);
                  }}
                  disabled={currentMonthIndex === 0}
                  className={`p-2 rounded-xl transition-colors ${
                    currentMonthIndex === 0
                      ? 'text-[#CBD5E1] cursor-not-allowed'
                      : 'text-[#4F8CFF] hover:bg-[#EFF6FF]'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={2} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentMonthIndex(Math.min(monthsData.length - 1, currentMonthIndex + 1));
                    setSelectedDate(null);
                  }}
                  disabled={currentMonthIndex === monthsData.length - 1}
                  className={`p-2 rounded-xl transition-colors ${
                    currentMonthIndex === monthsData.length - 1
                      ? 'text-[#CBD5E1] cursor-not-allowed'
                      : 'text-[#4F8CFF] hover:bg-[#EFF6FF]'
                  }`}
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={2} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {availableDates.map((dateObj, index) => {
                const isSelected = selectedDate === dateObj.date;
                return (
                  <motion.button
                    key={dateObj.date}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => dateObj.available && handleDateSelect(dateObj.date)}
                    disabled={!dateObj.available}
                    className={`
                      p-4 rounded-2xl text-center transition-all relative
                      ${isSelected
                        ? 'bg-[#4F8CFF] text-white shadow-lg scale-105'
                        : dateObj.available
                          ? 'bg-white text-[#1E293B] hover:bg-[#EFF6FF] hover:scale-105 shadow-sm'
                          : 'bg-[#F1F5F9] text-[#CBD5E1] cursor-not-allowed'
                      }
                    `}
                  >
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 bg-[#22C55E] rounded-full p-1">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    <div className="text-sm mb-1">{dateObj.weekday}</div>
                    <div className="text-2xl font-semibold">{dateObj.day}</div>
                  </motion.button>
                );
              })}
            </div>

            <Card className="mt-6 bg-[#EFF6FF] border-l-4 border-[#4F8CFF]" padding="md">
              <p className="text-sm text-[#1E293B]">
                💡 <span className="font-medium">Dica:</span> Consultas pela manhã têm menos chance de atraso
              </p>
            </Card>
          </motion.div>
        )}

        {step === 'time' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-[#4F8CFF]" strokeWidth={1.5} />
              <h2 className="text-xl font-semibold text-[#1E293B]">Horários Disponíveis</h2>
            </div>
            <p className="text-base text-[#64748B] mb-6">
              {selectedDateObj?.weekday}, {selectedDateObj?.day} de Maio
            </p>

            <div className="grid grid-cols-3 gap-3">
              {availableTimes.map((timeObj, index) => {
                const isSelected = selectedTime === timeObj.time;
                return (
                  <motion.button
                    key={timeObj.time}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => timeObj.available && handleTimeSelect(timeObj.time)}
                    disabled={!timeObj.available}
                    className={`
                      p-4 rounded-2xl text-center font-semibold text-lg transition-all relative
                      ${isSelected
                        ? 'bg-[#4F8CFF] text-white shadow-lg scale-105'
                        : timeObj.available
                          ? 'bg-white text-[#1E293B] hover:bg-[#EFF6FF] hover:scale-105 shadow-sm'
                          : 'bg-[#F1F5F9] text-[#CBD5E1] cursor-not-allowed'
                      }
                    `}
                  >
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 bg-[#22C55E] rounded-full p-1">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    {timeObj.time}
                  </motion.button>
                );
              })}
            </div>

            {selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Card variant="elevated">
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Resumo</h3>
                  <div className="space-y-2 text-base">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Data:</span>
                      <span className="text-[#1E293B] font-medium">
                        {selectedDateObj?.weekday}, {selectedDateObj?.day}/05/2026
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Horário:</span>
                      <span className="text-[#1E293B] font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {step === 'time' && selectedTime && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-6 py-4"
        >
          <Button fullWidth onClick={handleConfirm}>
            <Check className="w-5 h-5" />
            Confirmar Agendamento
          </Button>
        </motion.div>
      )}
    </div>
  );
}
