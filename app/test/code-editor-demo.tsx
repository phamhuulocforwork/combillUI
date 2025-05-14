"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { CodeEditor } from "@/registry/default/ui/code-editor";

const SAMPLE_CODE = `#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int a, b;
    cin >> a >> b;
    cout << a + b;
    
    return 0;
}`;

export default function CodeEditorDemo() {
  const [code, setCode] = useState(SAMPLE_CODE);
  const [language, setLanguage] = useState("c++");

  return (
    <Card className='w-full mx-auto container'>
      <CardHeader>
        <CardTitle>Code Editor</CardTitle>
        <CardDescription>
          A customizable code editor with syntax highlighting
        </CardDescription>
        <div className='flex flex-wrap gap-4 pt-2'>
          <div className='flex items-center space-x-2'>
            <Label htmlFor='language'>Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id='language' className='w-[140px]'>
                <SelectValue placeholder='Select language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='c'>c</SelectItem>
                <SelectItem value='c++'>c++</SelectItem>
                <SelectItem value='javascript'>JavaScript</SelectItem>
                <SelectItem value='typescript'>TypeScript</SelectItem>
                <SelectItem value='jsx'>JSX</SelectItem>
                <SelectItem value='tsx'>TSX</SelectItem>
                <SelectItem value='html'>HTML</SelectItem>
                <SelectItem value='css'>CSS</SelectItem>
                <SelectItem value='json'>JSON</SelectItem>
                <SelectItem value='markdown'>Markdown</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CodeEditor value={code} onChange={setCode} language={language} />
      </CardContent>
    </Card>
  );
}
