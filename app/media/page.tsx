export default function MediaPage() {
  return (
    <main style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <a
  href="/"
  style={{
    display: "block",
    textAlign: "right",
    marginBottom: "30px",
    color: "inherit",
    textDecoration: "none",
    fontSize: "18px",
  }}
>
  ← العودة إلى الصفحة الرئيسية
</a>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        الصور والفيديو
      </h1>

      <div>
        <video src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-01.mp4"
          controls
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "block",
            margin: "0 auto 20px",
            borderRadius: "14px",
          }}
        />

        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          حفل توقيع كتاب عوالم موازية للروائي الدكتور ماهر مجيد – تقرير ثامر الشمري
        </h2>

        <video
  src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-02-fixed.mp4"
  controls
  style={{
    width: "100%",
    maxWidth: "900px",
    display: "block",
    margin: "0 auto 20px",
    borderRadius: "14px",
  }}
/>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          هل كان د. ماهر مجيد متوقع أن يُقبل هذا العمل في مكتب رئيس الوزراء؟ – مبارك عيدكم مع عادل جبار
        </h2>

       <video
  src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-03.mp4"
  controls
  style={{
    width: "100%",
    maxWidth: "900px",
    display: "block",
    margin: "0 auto 20px",
    borderRadius: "14px",
  }}
/>

        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          ضيف الحلقة .. د. ماهر مجيد إبراهيم – مؤلف مسلسل أولاد جابر
        </h2>

        <video
  src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-04.mp4"
  controls
  style={{
    width: "100%",
    maxWidth: "900px",
    display: "block",
    margin: "0 auto 20px",
    borderRadius: "14px",
  }}
/>

        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          سرديات الفيلم الروائي القصير.. في محاضرة للأستاذ الدكتور ماهر مجيد إبراهيم
        </h2>

        <video
  src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-05.mp4"
  controls
  style={{
    width: "100%",
    maxWidth: "900px",
    display: "block",
    margin: "0 auto 20px",
    borderRadius: "14px",
  }}
/>

        <h2 style={{ textAlign: "center" }}>
          مشاركة الأستاذ الدكتور ماهر مجيد إبراهيم في مؤتمر الرواية العربية (الحلم في الرواية العربية) الذي أقيم في تونس الخضراء
        </h2>
      </div>
    </main>
  );
}