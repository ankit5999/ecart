"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { OrderHistory } from "@/components/profile/order-history";
import { PersonalInfo } from "@/components/profile/personal-info";
import { Addresses } from "@/components/profile/addresses";

export default function ProfilePage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="orders">
        <TabsList className="mb-8">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="orders">
          <OrderHistory />
        </TabsContent>
        
        <TabsContent value="info">
          <PersonalInfo />
        </TabsContent>
        
        <TabsContent value="addresses">
          <Addresses />
        </TabsContent>
      </Tabs>
    </div>
  );
}