export type Role = "student" | "tutor" | "admin";
export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  plan: "free" | "pro";
  image: string;
  phone: string;
  bio: string;
  createdAt?: string;
};
export type Tuition = {
  _id: string;
  title: string;
  subject: string;
  classLevel: string;
  mode: "Online" | "Offline";
  location: string;
  monthlyFee: number;
  daysPerWeek: number;
  schedule: string;
  bannerImage: string;
  description: string;
  tutorName: string;
  tutorEmail: string;
  approvalStatus: "pending" | "approved" | "rejected";
  isActive: boolean;
  createdAt: string;
  tutor?: Pick<User, "name" | "image" | "bio" | "plan">;
};
export type Application = {
  _id: string;
  tuitionId: string;
  tuitionTitle: string;
  subject: string;
  monthlyFee: number;
  tutorName: string;
  tutorEmail: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  preferredSchedule: string;
  studentNote: string;
  status: "pending" | "accepted" | "rejected";
  appliedAt: string;
  priority?: boolean;
};
export type Payment = {
  _id: string;
  userName: string;
  userEmail: string;
  userRole: Role;
  planName: string;
  amount: number;
  currency: string;
  transactionId: string;
  stripeSessionId: string;
  paidAt: string;
};
export type TuitionPage = {
  items: Tuition[];
  total: number;
  page: number;
  pages: number;
};
export const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "English",
  "Programming",
  "IELTS",
  "Biology",
  "Accounting",
];
export const levels = [
  "Class 6–8",
  "Class 9–10",
  "HSC",
  "University",
  "Professional",
];
export const money = (value: number) => `৳${value.toLocaleString("en-BD")}`;
export const date = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });
