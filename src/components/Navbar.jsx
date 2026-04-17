import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style = {{background: '#1e1e2e', color: '#fff', padding: '12px 24px', display:'flex', gap: 24}}>
      <link to="/" style={{color:'#fff'}} > Home </link>
      <link to="/dashboard" style={{color:'#fff'}} > Dashboard </link>
      <link to="/settings" style={{color:'#fff'}} > Settings </link>
    </nav>
  );
};