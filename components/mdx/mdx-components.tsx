import { createTypeTable } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { ComponentSource } from "@/components/mdx/component-source";
import { ComponentTabs } from "@/components/mdx/component-tabs";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import {
  Tabs as ShadcnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

const { AutoTypeTable } = createTypeTable();

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    h1: (props) => <Heading as='h1' {...props} />,
    h2: (props) => <Heading as='h2' {...props} />,
    h3: (props) => <Heading as='h3' {...props} />,
    h4: (props) => <Heading as='h4' {...props} />,
    h5: (props) => <Heading as='h5' {...props} />,
    h6: (props) => <Heading as='h6' {...props} />,
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <Table className={cn(className)} mdx {...props} />
    ),
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn("rounded-md", className)} {...props} />
    ),
    Tab,
    pre: ({ ...props }: React.ComponentProps<typeof Pre>) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ComponentTabs,
    ComponentSource,
    ShadcnTabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Steps,
    Step,
    AutoTypeTable: (props) => (
      <div className='auto-type-table'>
        <AutoTypeTable {...props} />
      </div>
    ),
  };
}
