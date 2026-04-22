import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style = {{background: '#1e1e2e', color: '#fff', padding: '12px 24px', display:'flex', gap: 24}}>
      <Link to="/" style={{color:'#fff'}} > Home </Link>
      <Link to="/dashboard" style={{color:'#fff'}} > Dashboard </Link>
      <Link to="/settings" style={{color:'#fff'}} > Settings </Link>
    </nav>
  );
};