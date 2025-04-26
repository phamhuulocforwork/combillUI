import { ChevronDown, HomeIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BreadcrumbWithDropdown = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <HomeIcon className='size-4' />
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <DropdownMenu>
              <DropdownMenuTrigger className='group flex items-center gap-1'>
                Add Document
                <ChevronDown className='size-4 transition-transform group-data-[state=open]:rotate-180' />
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuLabel>Themes</DropdownMenuLabel>
                <DropdownMenuLabel>Github</DropdownMenuLabel>
                <DropdownMenuLabel>Documentation</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbWithDropdown;
