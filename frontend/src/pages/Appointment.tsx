import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { createAppointment } from '../services/api';
import { services } from '../data/site';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  age: z.coerce.number().optional(),
  gender: z.string().optional(),
  city: z.string().optional(),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  service: z.string().min(1),
  message: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export default function Appointment() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await createAppointment(values);
    setSuccess(true);
    reset();
  };

  return (
    <section className="section mesh-bg min-h-screen pt-36">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">Appointment</p>
          <h1 className="hero-title">Book a focused orthopedic consultation.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">Share your symptoms and preferred schedule. The clinic team will confirm the appointment after reviewing your request.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-4 rounded-[8px] p-6 md:grid-cols-2">
          {[
            ['name', 'Name'], ['phone', 'Phone'], ['email', 'Email'], ['age', 'Age'], ['gender', 'Gender'], ['city', 'City'], ['preferredDate', 'Preferred Date'], ['preferredTime', 'Preferred Time']
          ].map(([name, label]) => (
            <label key={name} className="grid gap-2 text-sm font-bold text-ink">
              {label}
              <input type={name === 'preferredDate' ? 'date' : name === 'preferredTime' ? 'time' : name === 'age' ? 'number' : 'text'} {...register(name as keyof FormValues)} className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-primary" />
              {errors[name as keyof FormValues] && <span className="text-xs text-rose">Required</span>}
            </label>
          ))}
          <label className="grid gap-2 text-sm font-bold text-ink md:col-span-2">Service<select {...register('service')} className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-primary"><option value="">Select service</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
          <label className="grid gap-2 text-sm font-bold text-ink md:col-span-2">Message<textarea {...register('message')} rows={4} className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-primary" /></label>
          <button disabled={isSubmitting} className="rounded-full bg-primary px-6 py-4 font-bold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60 md:col-span-2">{isSubmitting ? 'Booking...' : 'Confirm Appointment'}</button>
        </form>
      </div>
      {success && <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-4"><div className="max-w-md rounded-[8px] bg-white p-8 text-center shadow-glow"><CheckCircle2 className="mx-auto text-success" size={58} /><h2 className="mt-5 text-3xl font-bold">Appointment Requested</h2><p className="mt-3 text-slate-600">The clinic team will contact you shortly.</p><button onClick={() => setSuccess(false)} className="mt-6 rounded-full bg-primary px-6 py-3 font-bold text-white">Done</button></div></div>}
    </section>
  );
}
