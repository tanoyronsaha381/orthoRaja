import { Activity, BadgeCheck, Bone, CalendarCheck, HeartPulse, Hospital, Microscope, ShieldCheck, Sparkles, Star, Stethoscope } from 'lucide-react';

export const doctorImages = [
  '/orthoraja-images/10.jpg',
  '/orthoraja-images/1.jpg',
  '/orthoraja-images/3.jpg',
  '/orthoraja-images/4.jpg',
  '/orthoraja-images/2.jpg',
  '/orthoraja-images/6.jpg',
  '/orthoraja-images/7.jpg',
  '/orthoraja-images/8.jpg',
  '/orthoraja-images/9.jpg',
  '/orthoraja-images/5.jpg',
  '/orthoraja-images/11.jpg'
];

export const stats = [
  ['1000+', 'Surgeries'],
  ['15+', 'Years Experience'],
  ['98%', 'Patient Satisfaction'],
  ['24x7', 'Support']
];

export const services = [
  {
    title: 'Total Knee Replacement',
    slug: 'total-knee-replacement',
    icon: Bone,
    summary: 'Precision-led knee replacement planning for reliable pain relief and confident mobility.',
    image: doctorImages[3]
  },
  {
    title: 'Hip Replacement',
    slug: 'hip-replacement',
    icon: Activity,
    summary: 'Advanced hip reconstruction focused on stability, comfort and a faster return to daily life.',
    image: doctorImages[4]
  },
  {
    title: 'Arthroscopy',
    slug: 'arthroscopy',
    icon: Microscope,
    summary: 'Minimally invasive joint treatment for sports injuries, cartilage issues and ligament damage.',
    image: doctorImages[5]
  },
  {
    title: 'Fracture & Trauma',
    slug: 'fracture-trauma',
    icon: ShieldCheck,
    summary: 'Urgent, structured fracture care from diagnosis through recovery and rehabilitation.',
    image: doctorImages[6]
  },
  {
    title: 'Shoulder Arthroscopy',
    slug: 'shoulder-arthroscopy',
    icon: HeartPulse,
    summary: 'Specialized shoulder repair for rotator cuff, instability and recurring pain.',
    image: doctorImages[7]
  },
  {
    title: 'Trigger Finger Release',
    slug: 'trigger-finger-release',
    icon: Sparkles,
    summary: 'Precise hand procedure to restore smooth finger movement and reduce locking pain.',
    image: doctorImages[8]
  }
];

export const trustItems = [
  { title: 'Board-trained orthopedic expertise', icon: BadgeCheck },
  { title: 'Hospital-based surgical protocols', icon: Hospital },
  { title: 'Evidence-backed recovery planning', icon: Stethoscope }
];

export const testimonials = [
  { name: 'Aishik Saha', text: 'I am extremely grateful to Dr. Raja saha for the outstanding treatment he provided to my mother. She was suffering from severe osteoarthritis, and her condition had made walking and daily activities very difficult. Thanks to his dedication and expert approach, my mother has recovered wonderfully. She is now walking without any problem and feels even better than before.', rating: 5 },
  { name: 'Dhiman Patra', text: 'I am a medical representative. Throughout my career, I have known many orthopedic doctors. However, for the patients, Dr. Raja Saha is no less than a God in the guise of a orthopedic surgeon.', rating: 5 },
  { name: 'subrata barik', text: 'He is very good not only as a doctor but also as a person. He listens to his patients very carefully and does not prescribe any tests more than necessary.', rating: 5 },
  { name: 'Malay Chakraborty', text: 'Dr. Raja Saha a renowned Orthopedic Surgeon, really is an ultimate solution for any ortho related issues. Few days ago I have got success in treatment of osteoarthritis, with a minimum expenditures. Great Doctor, well behave and obviously patient friendly.', rating: 5 }
];

export const faqs = [
  ['When should I see an orthopedic surgeon?', 'If joint pain, swelling, injury, deformity or reduced movement persists beyond a few days, a specialist evaluation helps avoid delayed treatment.'],
  ['Is knee replacement always required for arthritis?', 'No. Treatment depends on pain level, mobility, X-ray findings and lifestyle. Many patients start with medication, physiotherapy or injections.'],
  ['How do I book an appointment?', 'Use the online booking form, WhatsApp CTA or call the chamber. The team will confirm the most suitable slot.'],
  ['Do you treat sports injuries?', 'Yes. Ligament injuries, meniscus tears, shoulder issues and arthroscopy-based treatments are core services.']
];

export const blogPosts = [
  { title: 'How to Know When Knee Pain Needs Specialist Care', tag: 'Knee Care', slug: 'knee-pain-specialist-care' },
  { title: 'Arthroscopy Explained: Smaller Incisions, Focused Recovery', tag: 'Arthroscopy', slug: 'arthroscopy-explained' },
  { title: 'Recovery Checklist After Hip Replacement Surgery', tag: 'Recovery', slug: 'hip-replacement-recovery' }
];

export const gallery = doctorImages;

export const stars = Array.from({ length: 5 }, (_, index) => Star);
