
'use client'
import { attendance, members } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Check, Users } from 'lucide-react';
import { format } from 'date-fns';

export default function AttendancePage() {
    const attendanceToday = attendance.filter(a => format(new Date(a.checkInTime), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')).length;
    const weeklyCheckins = attendance.filter(a => new Date(a.checkInTime) > new Date(new Date().setDate(new Date().getDate() - 7))).length;
    
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl tracking-tight">Attendance</h1>
            <Button>
                <Check className="mr-2 h-4 w-4" /> Check-in Member
            </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm">Check-ins Today</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl">{attendanceToday}</div>
                    <p className="text-xs text-muted-foreground">Total members checked in today</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm">Weekly Check-ins</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl">{weeklyCheckins}</div>
                    <p className="text-xs text-muted-foreground">Total check-ins in the last 7 days</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm">Peak Hours</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl">5 PM - 7 PM</div>
                    <p className="text-xs text-muted-foreground">Busiest time of the day</p>
                </CardContent>
            </Card>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Attendance Log</CardTitle>
          <CardDescription>Recent check-in activity.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Check-in Date</TableHead>
                <TableHead>Check-in Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((log) => {
                const member = members.find(m => m.id === log.memberId);
                return (
                    <TableRow key={log.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={member?.avatar} alt={member?.name} />
                                    <AvatarFallback>{member?.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="">{log.memberName}</div>
                            </div>
                        </TableCell>
                        <TableCell>{format(new Date(log.checkInTime), 'MMMM dd, yyyy')}</TableCell>
                        <TableCell>{format(new Date(log.checkInTime), 'hh:mm a')}</TableCell>
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
