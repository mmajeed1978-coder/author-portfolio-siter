import Link from "next/link";

export default function ExistentialStudy() {
  return (
    <main dir="rtl" className="study-page">
      <section className="section">
        <div className="section-title">
          <h1>التناص الشخصية الوجودية في الفيلم السينمائي</h1>
          <p className="study-subtitle">دراسة أكاديمية في مجال السينما</p>
        </div>

        <article>
          <img
            src="/images/study-01-existential.jpg"
            alt="التناص الشخصية الوجودية في الفيلم السينمائي"
            style={{
              width: "100%",
              maxWidth: "900px",
              display: "block",
              margin: "0 auto 30px",
              borderRadius: "12px",
            }}
          />

          <h2>بيانات الدراسة</h2>

          <p>
            <strong>الباحثان:</strong> أ.م.د ماهر مجيد إبراهيم ود. نبيل وداي حمود
          </p>

          <p>
            <strong>المنهج:</strong> المنهج الوصفي التحليلي
          </p>

          <p>
            <strong>عينة البحث:</strong> فيلما «عطر امرأة» و«أمير الظلام»
          </p>

          <h2>عن الدراسة</h2>

          <p>
            تبحث الدراسة في ظاهرة تناص الشخصية الوجودية في الفيلم السينمائي،
            وتسعى إلى التعرف على مظاهر تناص هذه الشخصية في فيلمي «عطر امرأة»
            و«أمير الظلام».
          </p>

          <p>
            وتعتمد الدراسة المنهج الوصفي التحليلي، مع تحليل اللقطات والمشاهد
            بوصفها وحدات للتحليل، للكشف عن التراكيب والدلالات المرتبطة
            بالشخصية الوجودية في الفيلمين.
          </p>

          <h2>مشكلة البحث</h2>

          <p>
            تنطلق الدراسة من التساؤل حول كيفية تناص الشخصية الوجودية في
            السينما، وما الآليات التي يظهر من خلالها هذا التناص في الفيلم
            السينمائي.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
  href="/studies/بحث%20نهائي%20تناص%20الشخصية%20الوجودية.docx"
  target="_blank"
  rel="noopener noreferrer"
>
  قراءة الدراسة الأصلية
</a>

            <Link
              href="/#studies"
              style={{
                marginRight: "15px",
                textDecoration: "none",
              }}
            >
              العودة إلى الدراسات
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}