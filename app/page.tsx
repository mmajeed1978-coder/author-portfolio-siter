import Image from 'next/image';

const academicBooks = [
  ['al-zaman-al-manhout.jpeg', 'الزمن المنحوت', '2023'],
  ['alikhraj-alsinmaei.jpg', 'الإخراج السينمائي: الحرفة والإبداع', 'غير محدد'],
  ['al-tanas-al-ostory.jpg', 'التناص الأسطوري في السينما العالمية', 'غير محدد'],
  ['al-zaman-al-manhout-old.jpg', 'الزمن المنحوت', 'غير محدد'],
];
const novels = [
  ['laylat-alholm.jpg', 'ليلة الحلم الإيطالي', '2020'],
  ['awalim-motawazia-new.jpg', 'عوالم موازية', '2022'],
  ['alkhabee.jpg', 'الخبيء', '2023'],
  ['al-sadin-cover.png', 'السادن', 'غير منشورة'],
  ['talashi-cover.png', 'تلاشي', 'غير منشورة'],
];

export default function Home() {
  return <main>
    <header className="topbar">
      <div className="brand"><strong>أ.د. ماهر مجيد إبراهيم</strong><span>Prof. Maher Mageed Ibrahim</span></div>
      <nav><a href="#home">الرئيسية</a><a href="#academic">المؤلفات الأكاديمية</a><a href="#novels">الروايات</a><a href="#articles">المقالات</a><a href="/#studies">الدراسات والأبحاث</a><a href="#events">الفعاليات</a><a href="#media">الصور والفيديو</a><a href="#contact">تواصل</a></nav>
      <div className="tools"><span>⌕</span><span>AR&nbsp; | &nbsp;EN</span></div>
    </header>

    <section id="home" className="hero">
      <div className="hero-image"><Image src="/images/author-portrait.jpg" alt="صورة الكاتب" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div>
      <div className="hero-copy"><p className="eyebrow">أكاديمي&nbsp; | &nbsp;روائي&nbsp; | &nbsp;ناقد سينمائي</p><h1>أ.د. ماهر مجيد إبراهيم</h1><p>أبحث في السينما والإنسان...<br/>وأكتب الرواية لأقترب أكثر من الحقيقة.</p><a href="/about">
  <a href="/about"><button>تعرّف على مسيرتي</button></a>
</a></div>
      <div className="hero-quote">“السينما حياة أخرى<br/>نعيشها كي نفهم حياتنا الأولى.”<small>دأ.د. ماهر مجيد إبراهيم</small></div>
      <div className="sidewords">CINEMA<br/>LITERATURE<br/>RESEARCH<br/>IDEAS<br/>HUMAN</div>
    </section>

    <section className="stats"><div><b>5+</b><span>روايات منشورة</span></div><div><b>10+</b><span>مؤلفات أكاديمية</span></div><div><b>50+</b><span>مقال ودراسة</span></div><div><b>20+</b><span>مشاركة في مؤتمرات ومهرجانات</span></div><blockquote>“الفن، أياً كان شكله، هو محاولة دائمة لفهم العالم وإعادة صياغته.”</blockquote></section>

    <section id="academic" className="section split">
      <div><SectionTitle title="المؤلفات الأكاديمية" link="استكشف المؤلفات الأكاديمية"/><div className="books">{academicBooks.map(([img,title,year])=><Book key={title} img={img} title={title} year={year}/>)}</div></div>
      <div id="novels"><SectionTitle title="الروايات" link="استكشف الروايات"/><div className="books novels">{novels.map(([img,title,year])=><Book key={title} img={img} title={title} year={year}/>)}</div></div>
    </section>

    <section className="bio"><div><h2>نبذة عن الدكتور</h2><p>أ.د. ماهر مجيد إبراهيم الخيال أكاديمي وباحث في الفنون السينمائية، يعمل أستاذاً في كلية الفنون الجميلة، وله إسهامات في النقد السينمائي والدراسات البصرية والثقافة السينمائية، إلى جانب مشروع روائي يتابع الإنسان والمدينة والذاكرة.</p><button className="outline">المزيد عني ←</button></div><Image src="/images/author-portrait.jpg" alt="الدكتور أثناء القراءة" width={420} height={360}/><ul><li>🎓 أستاذ في كلية الفنون الجميلة</li><li>▤ باحث في السينما والثقافة البصرية</li><li>📖 روائي وكاتب</li><li>✎ ناقد سينمائي</li><li>◉ مشارك في مؤتمرات ومهرجانات دولية</li></ul><div className="quote-card">“أؤمن بأن السينما والرواية وجهان لحياة واحدة: من نحن؟ وكيف نصنع معنى في عالم متغير؟”<small>أ.د. ماهر مجيد إبراهيم</small></div></section>

    <section id="articles" className="section three"><div><SectionTitle title="أحدث المقالات" link="عرض كل المقالات"/><Article title="السينما والفن: قراءة في أفلام الذاكرة" date="12 أغسطس 2025"/><Article title="الرواية والسينما... تقاطعات سردية" date="28 مايو 2025"/><Article title="صورة المرأة في السينما العربية المعاصرة" date="15 يوليو 2025"/></div><div id="events"><SectionTitle title="الفعاليات والندوات" link="عرض كل الفعاليات"/><Article title="محاضرة: السينما والهوية" date="24 سبتمبر"/><Article title="ندوة: الرواية والسينما" date="10 أكتوبر"/><Article title="مشاركة في مهرجان بغداد السينمائي" date="18 نوفمبر"/></div><div id="media">
  <SectionTitle title="الصور والفيديو" link="عرض الكل"/>
  <div className="video">
  <video src="https://dwyzAmxFgYQ3K4wA.public.blob.vercel-storage.com/videos/video-01.mp4" controls style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }} />
  <p>حفل توقيع كتاب عوالم موازية للروائي الدكتور ماهر مجيد – تقرير ثامر الشمري</p>
</div>
</div></section>
    <section id="studies" className="section">
  <div className="section-title">
    <h2>الدراسات والأبحاث</h2>
    <p>مجموعة من الدراسات والأبحاث الأكاديمية في مجال السينما والفنون.</p>
  </div>

  <div className="articles-grid">

    <article>
  <img
    src="/images/study-01-existential.jpg"
    alt="التناص الشخصية الوجودية في الفيلم السينمائي"
  />

  <h3>التناص الشخصية الوجودية في الفيلم السينمائي</h3>

  <p>دراسة أكاديمية — بحث مشترك</p>

  <p>
    دراسة تبحث في تناص الشخصية الوجودية في الفيلم السينمائي،
    من خلال تحليل نماذج من فيلمي «عطر امرأة» و«أمير الظلام».
  </p>

  <p>
    الباحثان: أ.م.د ماهر مجيد إبراهيم ود. نبيل وداي حمود
  </p>

  <a
  href="/studies/existential"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-02-secondary-event.jpg"
    alt="آليات توظيف الحدث الثانوي في الخطاب السينماتوغرافي"
  />

  <h3>آليات توظيف الحدث الثانوي في الخطاب السينماتوغرافي</h3>

  <p>دراسة أكاديمية — بحث مشترك</p>

  <p>
    دراسة تبحث في آليات توظيف الحدث الثانوي داخل الخطاب السينماتوغرافي،
    ودوره في بناء الأحداث والشخصيات وتعميق دلالة الحدث الرئيس.
  </p>

  <p>
    الباحثان: أ.م.د ماهر مجيد إبراهيم وت شروق مالك حسن
  </p>

  <p>
    عينة البحث: فيلم «مملكة السماء» — 2005
  </p>

  <a
  href="/studies/secondary-event"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-03-hero-postmodern.jpg"
    alt="التوظيف الدلالي لأبعاد شخصية البطل في أفلام ما بعد الحداثة"
  />

  <h3>التوظيف الدلالي لأبعاد شخصية البطل في أفلام ما بعد الحداثة</h3>

  <p>دراسة أكاديمية — بحث مشترك</p>

  <p>
    دراسة تبحث في طرق التوظيف الدلالي لأبعاد شخصية البطل
    في أفلام ما بعد الحداثة، وعلاقة الشخصية بالمتغيرات
    الفكرية والثقافية لهذه الحقبة.
  </p>

  <p>
    الباحثان: أ.م.د ماهر مجيد إبراهيم ونورس صفاء عبد الجبار
  </p>

  <p>
    عينة البحث: فيلم «الفتاة ذات وشم التنين»
  </p>

  <a
  href="/studies/hero-postmodern"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-04-technique.jpg"
    alt="التقنية السينمائية في أفلام ما بعد الحداثة"
  />

  <h3>التقنية السينمائية في أفلام ما بعد الحداثة</h3>

  <p>دراسة أكاديمية — بحث فردي</p>

  <p>
    دراسة تبحث في التقنيات السينمائية في أفلام ما بعد الحداثة،
    وعلاقتها بالبناء السينمائي والسمات الفكرية والتقنية لهذا الاتجاه.
  </p>

  <p>
    الباحث: د. ماهر مجيد إبراهيم
  </p>

  <p>
    الحد الزماني للبحث: 2009
  </p>

  <a
  href="/studies/technique-postmodern"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-05-costume.jpg"
    alt="الأزياء السينمائية بين الوظيفة الإشهارية والتدليل العلاماتي"
  />

  <h3>الأزياء السينمائية بين الوظيفة الإشهارية والتدليل العلاماتي</h3>

  <p>دراسة أكاديمية — بحث فردي</p>

  <p>
    دراسة تبحث في الزي السينمائي بوصفه بنية إشهارية
    ونسقاً علاماتياً يسهم في بناء دلالات الشخصيات والأحداث
    داخل الصورة السينمائية.
  </p>

  <p>
    الباحث: د. ماهر مجيد إبراهيم
  </p>

  <p>
    عينة البحث: فيلم «جريمة في قطار الشرق السريع»
  </p>

  <a
  href="/studies/costume-semiotics"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-06-secondary-event.jpg"
    alt="اشتغال بنية الحدث الثانوي في تجسيد وحدة الفيلم"
  />

  <h3>اشتغال بنية الحدث الثانوي في تجسيد وحدة الفيلم</h3>

  <p>دراسة أكاديمية — بحث مشترك</p>

  <p>
    دراسة تبحث في كيفيات توظيف بنية الحدث الثانوي
    في تجسيد وحدة الفيلم، ودوره في دعم الحدث الرئيسي
    والربط بين الأماكن والأزمنة داخل البناء السينمائي.
  </p>

  <p>
    الحد الزماني للبحث: 2017
  </p>
<p>
    الباحث: د. ماهر مجيد إبراهيم
  </p>
  <p>
    عينة البحث: فيلم «مملكة السماء» — 2005
  </p>

  <a
  href="/studies/secondary-event-unity"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
</article>

    <article>
  <img
    src="/images/study-07-documentary-fiction.jpg"
    alt="الوثيقة السينمائية بين الواقع والخيال"
  />

  <h3>الوثيقة السينمائية بين الواقع والخيال</h3>

  <p>دراسة أكاديمية</p>

  <p>
    دراسة تبحث في كيفية توظيف الوثيقة الواقعية
    في السينما الروائية، ومدى المحافظة على مصداقيتها
    وتأثيرها الفكري داخل البناء السينمائي.
  </p>
الباحث: د. ماهر مجيد إبراهيم
  <p>
    هدف البحث: التعرف على كيفية توظيف الوثيقة الواقعية
    في السينما الروائية.
  </p>
<a
  href="/studies/cinematic-document"
  style={{
    display: "block",
    width: "100%",
    marginTop: "auto",
    textDecoration: "none",
  }}
>
  <button style={{ width: "100%" }}>قراءة الدراسة</button>
</a>
  
</article>

  </div>
</section>

    <section id="contact" className="newsletter"><div><h2>لنتواصل</h2><p>تابع جديد المؤلفات والمقالات والفعاليات.</p></div><form><input type="email" placeholder="أدخل بريدك الإلكتروني"/><button>اشترك</button></form><div className="social">تابعني على&nbsp;&nbsp; ◉ &nbsp;◎ &nbsp;𝕏 &nbsp;◍</div></section>
    <footer><div><strong>أ.د. ماهر مجيد إبراهيم</strong>Prof. Maher Mageed Ibrahim</div><div>الرئيسية　 عن الدكتور　 المؤلفات　 الروايات　 المقالات　 الفعاليات　 الصور والفيديو　 تواصل</div><small>© 2025 جميع الحقوق محفوظة</small></footer>
  </main>
}
function SectionTitle({title,link}:{title:string,link:string}){return <div className="section-title"><h2>{title}</h2><a href={title==="الصور والفيديو"?"/media":link}>{link} ←</a></div>}
function Book({img,title,year}:{img:string,title:string,year:string}){return <article className="book"><div className="cover"><Image src={`/images/${img}`} alt={title} fill sizes="150px"/></div><h3>{title}</h3><span>{year}</span></article>}
function Article({title,date}:{title:string,date:string}){return <article className="article"><div className="thumb"></div><div><h3>{title}</h3><span>{date}</span></div><b>←</b></article>}
