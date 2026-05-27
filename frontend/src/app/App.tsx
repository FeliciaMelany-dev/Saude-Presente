import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { UserProvider } from './context/UserContext';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import BookingConfirmedScreen from './screens/BookingConfirmedScreen';
import ConfirmAppointmentScreen from './screens/ConfirmAppointmentScreen';
import AppointmentConfirmedSuccessScreen from './screens/AppointmentConfirmedSuccessScreen';
import CancelAppointmentScreen from './screens/CancelAppointmentScreen';
import AppointmentCancelledSuccessScreen from './screens/AppointmentCancelledSuccessScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="min-h-screen max-w-[480px] mx-auto bg-[#F7F9FC] shadow-2xl">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/schedule" element={<ScheduleScreen />} />
            <Route path="/booking-confirmed" element={<BookingConfirmedScreen />} />
            <Route path="/confirm" element={<ConfirmAppointmentScreen />} />
            <Route path="/appointment-confirmed-success" element={<AppointmentConfirmedSuccessScreen />} />
            <Route path="/cancel" element={<CancelAppointmentScreen />} />
            <Route path="/appointment-cancelled-success" element={<AppointmentCancelledSuccessScreen />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}