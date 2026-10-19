import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أ.د. ماهر مجيد إبراهيم | أكاديمي وروائي وناقد سينمائي',
  description: 'الموقع الشخصي والأرشيف الرقمي للمؤلفات الأكاديمية والروايات والمقالات والفعاليات.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
