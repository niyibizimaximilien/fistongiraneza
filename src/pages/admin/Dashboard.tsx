import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, Users, Eye, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    teamMembers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [projectsRes, teamRes] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact' }),
        supabase.from('team_members').select('id', { count: 'exact' }),
      ]);

      setStats({
        projects: projectsRes.count || 0,
        teamMembers: teamRes.count || 0,
      });
    };

    fetchStats();
  }, []);

  const cards = [
    { title: 'Total Projects', value: stats.projects, icon: FolderKanban, color: 'text-blue-500' },
    { title: 'Team Members', value: stats.teamMembers, icon: Users, color: 'text-green-500' },
    { title: 'Page Views', value: '1.2K', icon: Eye, color: 'text-purple-500' },
    { title: 'Growth', value: '+12%', icon: TrendingUp, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.title} className="glass-effect border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a href="/admin/projects" className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="font-medium">Add New Project</div>
              <div className="text-sm text-muted-foreground">Showcase your latest work</div>
            </a>
            <a href="/admin/team" className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="font-medium">Manage Team</div>
              <div className="text-sm text-muted-foreground">Add or edit team members</div>
            </a>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-sm">
              No recent activity to display.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
