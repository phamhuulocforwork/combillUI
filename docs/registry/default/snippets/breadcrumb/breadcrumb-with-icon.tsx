import { File, Folder, HomeIcon } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadcrumbWithIcon = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-2">
            <HomeIcon className="size-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-2">
            <Folder className="size-4" />
            Documents
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-2">
            <File className="size-4" />
            Add Document
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbWithIcon;
