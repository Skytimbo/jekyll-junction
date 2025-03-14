
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderOpen, Shield } from 'lucide-react';
import MemberList from '@/components/admin/MemberList';
import ResourceManager from '@/components/admin/ResourceManager';
import AdminHeader from '@/components/admin/AdminHeader';

const Admin = () => {
  const [tab, setTab] = useState("members");
  
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage members and resources for Homer AI User Group</p>
        </div>
        
        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <CardTitle>Admin Controls</CardTitle>
              <div className="bg-homer/10 px-3 py-1.5 rounded-md flex items-center">
                <Shield className="h-4 w-4 text-homer mr-2" />
                <span className="text-xs font-medium text-homer">Admin Access</span>
              </div>
            </div>
            <CardDescription>
              Manage your AI User Group's members and resources
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="mb-4 w-full md:w-auto">
                <TabsTrigger value="members" className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>Members</span>
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-1.5">
                  <FolderOpen className="h-4 w-4" />
                  <span>Resources</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="members" className="mt-0">
                <MemberList />
              </TabsContent>
              
              <TabsContent value="resources" className="mt-0">
                <ResourceManager />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
