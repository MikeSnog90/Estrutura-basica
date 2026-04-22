import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ background: '#1e1e2e', color: '#fff', padding: '12px 24px', display: 'flex', gap: 24, alignItems: 'center' }}>
      <Link to="/" style={{color:'#fff'}} > Home </Link>
      <Link to="/dashboard" style={{color:'#fff'}} > Dashboard </Link>
      <Link to="/settings" style={{color:'#fff'}} > Settings </Link>
      {user && (
        <button
          onClick={handleLogout}
          style={{
            marginLeft: 'auto',
            background: 'transparent',
            border: '1px solid #fff',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Sair
        </button>
      )}
    </nav>
  );
};