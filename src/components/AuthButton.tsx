import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Modal from './Modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

type AuthFormType = 'signIn' | 'signUp';

const AuthButton = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState<AuthFormType>('signIn');

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const openAuthModal = (formType: AuthFormType) => {
    setCurrentForm(formType);
    setIsAuthModalOpen(true);
    console.log(`Auth modal opened with form: ${formType}`);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleSignInSuccess = () => {
    closeAuthModal();
    console.log('Sign in successful, modal closed.');
    // Optionally, navigate to a dashboard or refresh the page
  };

  const handleSignUpSuccess = () => {
    closeAuthModal();
    console.log('Sign up successful, modal closed.');
    // Optionally, navigate to a dashboard or show a success message
  };

  const handleSwitchToSignUp = () => {
    setCurrentForm('signUp');
    console.log('Switched to Sign Up form.');
  };

  const handleSwitchToSignIn = () => {
    setCurrentForm('signIn');
    console.log('Switched to Sign In form.');
  };

  if (!user) {
    return (
      <>
        <Button
          onClick={() => openAuthModal('signIn')}
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </Button>
        <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal} title={currentForm === 'signIn' ? 'Sign In' : 'Sign Up'}>
          {currentForm === 'signIn' ? (
            <SignInForm onSignInSuccess={handleSignInSuccess} onSignUpClick={handleSwitchToSignUp} />
          ) : (
            <SignUpForm onSignUpSuccess={handleSignUpSuccess} onSignInClick={handleSwitchToSignIn} />
          )}
        </Modal>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          <User className="h-4 w-4 mr-2" />
          Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-medium">
          {user.email}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthButton;
