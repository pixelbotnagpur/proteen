
import { payments, members } from '@/lib/data';
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
import { MoreHorizontal, Bell } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl tracking-tight">Payments</h1>
            <Button>
                <Bell className="mr-2 h-4 w-4" /> Send Reminders
            </Button>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>A log of all payments and their statuses.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => {
                const member = members.find(m => m.id === payment.memberId);
                return (
                    <TableRow key={payment.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={member?.avatar} alt={member?.name} />
                                    <AvatarFallback>{member?.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="">{payment.memberName}</div>
                            </div>
                        </TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell className="hidden md:table-cell">{payment.date}</TableCell>
                        <TableCell>
                            <Badge variant={payment.status === 'Paid' ? 'default' : payment.status === 'Overdue' ? 'destructive' : 'secondary'}>
                                {payment.status}
                            </Badge>
                        </TableCell>
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
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Send Receipt</DropdownMenuItem>
                                    {payment.status === 'Overdue' && <DropdownMenuItem>Send Reminder</DropdownMenuItem>}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
