import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Phone, ArrowRight, User as UserIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useUser } from '../context/UserContext';

export default function LoginScreen() {
  const [step, setStep] = useState<'phone' | 'code' | 'name'>('phone');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('code');
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }

      // Aceita qualquer código de 6 dígitos para teste
      if (newCode.every(digit => digit !== '') && newCode.join('').length === 6) {
        setTimeout(() => setStep('name'), 500);
      }
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUser({ name: name.trim(), phone });
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      <div className="flex-1 flex flex-col justify-center p-6 max-w-md mx-auto w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#4F8CFF] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            {step === 'name' ? (
              <UserIcon className="w-10 h-10 text-[#4F8CFF]" strokeWidth={1.5} />
            ) : (
              <Phone className="w-10 h-10 text-[#4F8CFF]" strokeWidth={1.5} />
            )}
          </div>

          <h1 className="text-3xl font-semibold text-[#1E293B] mb-2">
            {step === 'phone' ? 'Bem-vindo!' : step === 'code' ? 'Confirme seu número' : 'Quase lá!'}
          </h1>
          <p className="text-lg text-[#64748B] mb-4">
            {step === 'phone'
              ? 'Digite seu telefone para acessar'
              : step === 'code'
              ? `Enviamos um código para ${formatPhoneNumber(phone)}`
              : 'Como devemos te chamar?'}
          </p>

          {step === 'code' && (
            <div className="mb-6 p-3 bg-[#FEF9C3] border border-[#FACC15]/30 rounded-xl">
              <p className="text-sm text-[#854D0E] text-center">
                💡 <span className="font-semibold">Modo teste:</span> Digite qualquer código de 6 números
              </p>
            </div>
          )}

          {step === 'name' ? (
            <motion.form
              onSubmit={handleNameSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-6"
                autoFocus
              />
              <Button type="submit" fullWidth disabled={!name.trim()}>
                Finalizar
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.form>
          ) : step === 'phone' ? (
            <motion.form
              onSubmit={handlePhoneSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 p-3 bg-[#EFF6FF] border border-[#4F8CFF]/30 rounded-xl">
                <p className="text-sm text-[#1E40AF] text-center">
                  📱 <span className="font-semibold">Protótipo:</span> Digite qualquer número para testar
                </p>
              </div>

              <Input
                type="tel"
                placeholder="(00) 00000-0000"
                value={formatPhoneNumber(phone)}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="mb-6"
                autoFocus
              />
              <Button type="submit" fullWidth disabled={phone.length < 10}>
                Continuar
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-3 justify-center mb-8">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleCodeKeyDown(index, e)}
                    className="w-14 h-16 text-center text-2xl font-semibold rounded-2xl border-2 border-[#E2E8F0] focus:border-[#4F8CFF] focus:ring-2 focus:ring-[#4F8CFF] focus:outline-none transition-all"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-[#4F8CFF] text-base hover:underline"
              >
                Alterar número
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {step === 'code' && (
        <div className="p-6 text-center">
          <button className="text-[#64748B] text-base hover:text-[#4F8CFF] transition-colors">
            Não recebeu o código? <span className="font-medium">Reenviar</span>
          </button>
        </div>
      )}
    </div>
  );
}
