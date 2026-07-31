import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { CalendarCheck, Image, LayoutDashboard, MessageSquare, Newspaper, Users } from 'lucide-react';

const modules = [
  ['Appointments', CalendarCheck],
  ['Patients', Users],
  ['Testimonials', MessageSquare],
  ['Gallery', Image],
  ['Blogs', Newspaper],
  ['Contact Messages', MessageSquare]
];

const data = [
  { name: 'Mon', bookings: 12 },
  { name: 'Tue', bookings: 18 },
  { name: 'Wed', bookings: 9 },
  { name: 'Thu', bookings: 22 },
  { name: 'Fri', bookings: 16 }
];

export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-mist pt-28">
      <div className="container grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[8px] bg-ink p-5 text-white">
          <p className="mb-6 flex items-center gap-2 text-xl font-bold"><LayoutDashboard /> Admin</p>
          {modules.map(([label, Icon]) => <button key={String(label)} className="mb-2 flex w-full items-center gap-3 rounded-[8px] px-4 py-3 text-left hover:bg-white/10"><Icon size={18} /> {label as string}</button>)}
        </aside>
        <main>
          <h1 className="font-display text-4xl font-bold">Clinic Dashboard</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {['Total Appointments', 'Pending', 'Completed', 'Visitors'].map((item, index) => <div key={item} className="rounded-[8px] bg-white p-5 shadow-soft"><p className="text-sm font-bold text-slate-500">{item}</p><p className="mt-3 text-4xl font-black text-primary">{[128, 14, 96, 2480][index]}</p></div>)}
          </div>
          <div className="mt-6 rounded-[8px] bg-white p-6 shadow-soft">
            <p className="mb-4 text-xl font-bold">Appointment Trends</p>
            <div className="h-72"><ResponsiveContainer><BarChart data={data}><XAxis dataKey="name" /><Tooltip /><Bar dataKey="bookings" fill="#0F766E" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></div>
          </div>
        </main>
      </div>
    </section>
  );
}
