'use client'
import { Checkboxes } from "@/components/Checkboxes";
import { FormAdd } from "@/components/FormAdd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";

export default function Home() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((data) => data.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((reason) => {
        console.log("Error: " + reason);
      });
  }, []);

  return (
    <div className="grid place-items-center w-dvw h-dvh">
      <div className="flex gap-4 flex-col">
        <Tabs defaultValue="todo" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="todo">Todo</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="todo">
            <Card className="h-96 overflow-y-auto">
              <CardHeader>
                <CardTitle>Todo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Checkboxes todos={todos.filter(t => !t.done)} setTodos={setTodos}></Checkboxes>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="done">
            <Card className="h-96 overflow-y-auto">
              <CardHeader>
                <CardTitle>Done</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Checkboxes todos={todos.filter(t => t.done)} setTodos={setTodos}></Checkboxes>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="all">
            <Card className="h-96 overflow-y-auto">
              <CardHeader>
                <CardTitle>All</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Checkboxes todos={todos} setTodos={setTodos}></Checkboxes>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <FormAdd setTodos={setTodos}></FormAdd>
      </div>
    </div>

  );
}