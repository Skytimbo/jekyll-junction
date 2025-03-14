
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Plus, Mail, Phone, Edit, Trash } from 'lucide-react';

// Mock data for the member list
const INITIAL_MEMBERS = [
  {
    id: '1',
    name: 'Jeffery Johnson',
    email: 'jjohnson47@alaska.edu',
    phone: '907-299-9712',
    joinDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'swilliams@alaskan.net',
    phone: '907-555-3344',
    joinDate: '2023-03-22',
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Roberts',
    email: 'mroberts@homer.org',
    phone: '907-555-6677',
    joinDate: '2023-04-10',
    status: 'inactive'
  }
];

const MemberList = () => {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search members..."
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
          <span>Add Member</span>
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.joinDate}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {member.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
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
                <TableCell colSpan={5} className="h-24 text-center">
                  No members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add Member Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Member</DialogTitle>
            <DialogDescription>
              Enter the details of the new member below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input id="name" placeholder="John Doe" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <Input id="phone" placeholder="907-123-4567" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>Add Member</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MemberList;
