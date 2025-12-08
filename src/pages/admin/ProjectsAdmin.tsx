import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';

type Project = Tables<'projects'>;

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    client: '',
    year: '',
    image_url: '',
    technologies: '',
    featured: false,
  });
  const { toast } = useToast();

  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (!error && data) setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const resetForm = () => {
    setFormData({ title: '', description: '', category: '', client: '', year: '', image_url: '', technologies: '', featured: false });
    setEditingProject(null);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || '',
      category: project.category || '',
      client: project.client || '',
      year: project.year || '',
      image_url: project.image_url || '',
      technologies: project.technologies?.join(', ') || '',
      featured: project.featured || false,
    });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      client: formData.client,
      year: formData.year,
      image_url: formData.image_url,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
      featured: formData.featured,
    };

    if (editingProject) {
      const { error } = await supabase.from('projects').update(projectData).eq('id', editingProject.id);
      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Project updated successfully' });
        fetchProjects();
        setIsOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('projects').insert(projectData);
      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Project created successfully' });
        fetchProjects();
        setIsOpen(false);
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Project deleted' });
      fetchProjects();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage your portfolio projects</p>
        </div>
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" /> Add Project</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} placeholder="e.g. Web App, Mobile" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Input id="client" value={formData.client} onChange={(e) => setFormData({ ...formData, client: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} placeholder="2024" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input id="image_url" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                <Input id="technologies" value={formData.technologies} onChange={(e) => setFormData({ ...formData, technologies: e.target.value })} placeholder="React, TypeScript, Tailwind" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="featured" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="rounded" />
                <Label htmlFor="featured">Featured project</Label>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => { setIsOpen(false); resetForm(); }}>Cancel</Button>
                <Button type="submit">{editingProject ? 'Update' : 'Create'}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle>All Projects ({projects.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.year}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(project)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
              {projects.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">No projects yet. Add your first project!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsAdmin;
