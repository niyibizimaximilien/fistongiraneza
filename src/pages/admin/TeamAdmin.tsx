import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';

type TeamMember = Tables<'team_members'>;

const TeamAdmin = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    avatar_url: '',
    github_url: '',
    linkedin_url: '',
    is_founder: false,
    display_order: 0,
  });
  const { toast } = useToast();

  const fetchMembers = async () => {
    const { data, error } = await supabase.from('team_members').select('*').order('display_order', { ascending: true });
    if (!error && data) setMembers(data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const resetForm = () => {
    setFormData({ name: '', role: '', bio: '', avatar_url: '', github_url: '', linkedin_url: '', is_founder: false, display_order: 0 });
    setEditingMember(null);
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role || '',
      bio: member.bio || '',
      avatar_url: member.avatar_url || '',
      github_url: member.github_url || '',
      linkedin_url: member.linkedin_url || '',
      is_founder: member.is_founder || false,
      display_order: member.display_order || 0,
    });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const memberData = {
      name: formData.name,
      role: formData.role,
      bio: formData.bio,
      avatar_url: formData.avatar_url,
      github_url: formData.github_url,
      linkedin_url: formData.linkedin_url,
      is_founder: formData.is_founder,
      display_order: formData.display_order,
    };

    if (editingMember) {
      const { error } = await supabase.from('team_members').update(memberData).eq('id', editingMember.id);
      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Team member updated successfully' });
        fetchMembers();
        setIsOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('team_members').insert(memberData);
      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Team member added successfully' });
        fetchMembers();
        setIsOpen(false);
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Team member deleted' });
      fetchMembers();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground mt-1">Manage your team members</p>
        </div>
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" /> Add Member</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingMember ? 'Edit Team Member' : 'Add Team Member'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Software Engineer" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar_url">Avatar URL</Label>
                <Input id="avatar_url" value={formData.avatar_url} onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })} placeholder="https://..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub URL</Label>
                  <Input id="github_url" value={formData.github_url} onChange={(e) => setFormData({ ...formData, github_url: e.target.value })} placeholder="https://github.com/..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                  <Input id="linkedin_url" value={formData.linkedin_url} onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })} placeholder="https://linkedin.com/in/..." />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input id="display_order" type="number" value={formData.display_order} onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input type="checkbox" id="is_founder" checked={formData.is_founder} onChange={(e) => setFormData({ ...formData, is_founder: e.target.checked })} className="rounded" />
                  <Label htmlFor="is_founder">Founder</Label>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => { setIsOpen(false); resetForm(); }}>Cancel</Button>
                <Button type="submit">{editingMember ? 'Update' : 'Create'}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle>Team Members ({members.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Founder</TableHead>
                <TableHead>Order</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar_url || ''} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.is_founder ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{member.display_order}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(member)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(member.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
              {members.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">No team members yet. Add your first member!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamAdmin;
