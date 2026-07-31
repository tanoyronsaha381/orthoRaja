import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:9898/api'
});

export type AppointmentPayload = {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  city?: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message?: string;
};

export type GoogleReview = {
  authorName?: string;
  rating?: number;
  text?: string;
  relativeTimeDescription?: string;
  profilePhotoUrl?: string;
};

export type GoogleReviewResponse = {
  placeName?: string;
  rating?: number;
  reviewCount?: number;
  googleMapsUrl?: string;
  readAllReviewsUrl?: string;
  writeReviewUrl?: string;
  reviews: GoogleReview[];
};

export const createAppointment = (payload: AppointmentPayload) =>
  api.post('/appointments', payload).then((res) => res.data);

export const sendContact = (payload: { name: string; phone: string; email?: string; message: string }) =>
  api.post('/contact', payload).then((res) => res.data);

export const getGoogleReviews = () =>
  api.get<GoogleReviewResponse>('/google-reviews').then((res) => res.data);
