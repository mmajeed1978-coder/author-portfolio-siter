import Link from "next/link";

export default function SecondaryEventStudy() {
  return (
    <main dir="rtl" className="study-page">
      <section className="section">
        <div className="section-title">
          <h1>آليات توظيف الحدث الثانوي في الخطاب السينماتوغرافي</h1>
          <p className="study-subtitle">دراسة أكاديمية في مجال السينما</p>
        </div>

        <article>
          <img
            src="/images/study-02-secondary-event.jpg"
            alt="آليات توظيف الحدث الثانوي في الخطاب السينماتوغرافي"
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
            <strong>الباحثان:</strong> أ.م.د ماهر مجيد إبراهيم وت شروق مالك حسن
          </p>

          <p>
            <strong>المنهج:</strong> المنهج الوصفي الذي ينطوي على التحليل
          </p>

          <p>
            <strong>عينة البحث:</strong> فيلم «مملكة السماء» — 2005
          </p>

          <h2>عن الدراسة</h2>

          <p>
            تبحث الدراسة في آليات توظيف الحدث الثانوي داخل الخطاب
            السينماتوغرافي، ودوره في بناء الأحداث والشخصيات وتعميق دلالة
            الحدث الرئيس.
          </p>

          <p>
            وتتناول الدراسة بنية الحدث الثانوي وأنواعه وآليات توظيفه في
            الخطاب السينماتوغرافي، من خلال تحليل عينة البحث المتمثلة بفيلم
            «مملكة السماء».
          </p>

          <h2>هدف البحث</h2>

          <p>
            يهدف البحث إلى الكشف عن آليات توظيف الحدث الثانوي في الخطاب
            السينماتوغرافي.
          </p>

          <h2>حدود البحث</h2>

          <p>
            <strong>الحد الموضوعي:</strong> الأحداث الثانوية في الفيلم
            السينمائي.
          </p>

          <p>
            <strong>الحد المكاني:</strong> السينما العالمية.
          </p>

          <p>
            <strong>الحد الزماني:</strong> 2017.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
  href="/studies/آليات%20توظيف%20الحدث%20الثاني%20في%20الخطاب%20السينماتوغرافي.docx"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>قراءة الدراسة الأصلية</button>
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