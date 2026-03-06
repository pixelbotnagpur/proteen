
import { members } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function MembersPage() {
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl tracking-tight">Members</h1>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Member
            </Button>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Member List</CardTitle>
          <CardDescription>A list of all members in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead className="hidden md:table-cell">Join Date</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="">{member.name}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">{member.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{member.phone}</TableCell>
                  <TableCell>
                    <Badge variant={member.subscriptionPlan === 'Pro' ? 'default' : member.subscriptionPlan === 'Elite' ? 'secondary' : 'outline'}>{member.subscriptionPlan}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{member.joinDate}</TableCell>
                  <TableCell>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
