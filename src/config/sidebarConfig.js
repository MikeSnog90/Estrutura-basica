export const sidebarConfig = {
    '/': [
        { label: 'Visão Geral', to: '/' },
        { label: 'Destaques', to: '/hightlights' },
    ],
    '/dashboard': [
        { Label: 'Métricas', to: '/dashboard' },
        { Label: 'Relatórios', to: '/dashboard/reports' },
        { Label: 'Exportar', to: '/dashboard/export' }, 
    ],
    '/settings': [
        { label: 'Perfil', to: '/settings' },
        { label: 'Segurança', to: '/settings/security' },
        { label: 'Notificações', to: '/settings/notifications' },
    ],
};
