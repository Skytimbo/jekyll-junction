
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Plus, FileText, BookOpen, Code, FolderKanban, FileJson, Edit, Trash, ExternalLink } from 'lucide-react';

// Mock data for resources
const INITIAL_RESOURCES = [
  {
    id: '1',
    title: 'Alaska AI Wildlife Recognition Guide',
    type: 'guide',
    category: 'AI Guides',
    url: 'https://example.com/guides/alaska-wildlife',
    dateAdded: '2023-11-15'
  },
  {
    id: '2',
    title: 'Salmon Migration Prediction Model',
    type: 'code',
    category: 'Code Snippets',
    url: 'https://example.com/code/salmon-prediction',
    dateAdded: '2023-12-05'
  },
  {
    id: '3',
    title: 'Northern Lights Image Dataset',
    type: 'dataset',
    category: 'Datasets',
    url: 'https://example.com/datasets/northern-lights',
    dateAdded: '2024-01-20'
  },
  {
    id: '4',
    title: 'AI Ethics in Alaska Native Communities',
    type: 'paper',
    category: 'Research Papers',
    url: 'https://example.com/papers/ai-ethics-alaska',
    dateAdded: '2024-02-10'
  }
];

const getIconForResourceType = (type: string) => {
  switch (type) {
    case 'guide':
      return <BookOpen className="h-4 w-4 text-homer" />;
    case 'code':
      return <Code className="h-4 w-4 text-blue-600" />;
    case 'dataset':
      return <FileJson className="h-4 w-4 text-green-600" />;
    case 'paper':
      return <FileText className="h-4 w-4 text-orange-600" />;
    case 'template':
      return <FolderKanban className="h-4 w-4 text-purple-600" />;
    default:
      return <FileText className="h-4 w-4 text-gray-600" />;
  }
};

const ResourceManager = () => {
  const [resources, setResources] = useState(INITIAL_RESOURCES);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="w-full sm:w-auto flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          <span>Add Resource</span>
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <TableRow key={resource.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getIconForResourceType(resource.type)}
                      <span className="font-medium">{resource.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{resource.category}</TableCell>
                  <TableCell>{resource.dateAdded}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No resources found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add Resource Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Resource</DialogTitle>
            <DialogDescription>
              Enter the details of the new resource below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input id="title" placeholder="Resource title" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">Category</label>
              <select id="category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="AI Guides">AI Guides</option>
                <option value="Code Snippets">Code Snippets</option>
                <option value="Research Papers">Research Papers</option>
                <option value="Datasets">Datasets</option>
                <option value="Project Templates">Project Templates</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="type" className="text-sm font-medium">Resource Type</label>
              <select id="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="guide">Guide</option>
                <option value="code">Code</option>
                <option value="paper">Paper</option>
                <option value="dataset">Dataset</option>
                <option value="template">Template</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="url" className="text-sm font-medium">URL</label>
              <Input id="url" placeholder="https://example.com/resource" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>Add Resource</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResourceManager;
