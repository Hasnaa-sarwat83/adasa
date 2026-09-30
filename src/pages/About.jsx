import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const teamMembers = [
  {
    name: "سالم أحمد",
    role: "مصور محترف",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "محمد علي",
    role: "مصور بورتريه",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "إبراهيم حسن",
    role: "مصور طبيعة",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "داود خالد",
    role: "مدرب تصوير",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "ليث محمود",
    role: "فنان بصري",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "خالد الفيصل",
    role: "مصور فلكي",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "نادر سعيد",
    role: "مصور شوارع",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "هاني الشمري",
    role: "مصور طعام",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "عمر الراشد",
    role: "مصور حياة برية",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "فارس العلي",
    role: "فنان فوتوغرافي",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "سامي الحربي",
    role: "خبير تعديل صور",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "رامي الخطيب",
    role: "مصور ماكرو",
    image:
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "باسم المصري",
    role: "مصور فني",
    image:
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "منصور الزهراني",
    role: "مصور زفاف",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "فيصل الدوسري",
    role: "مصور جوي",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "لؤي الصالح",
    role: "مصور تجاري",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "طارق النعيمي",
    role: "مصور معماري",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "أحمد الشهري",
    role: "مصور رياضي",
    image:
      "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "ماجد القحطاني",
    role: "مصور استوديو",
    image:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "ياسر العتيبي",
    role: "مصور رحالة",
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "دحام الحسيني",
    role: "فنان بصري",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "نايف المطيري",
    role: "مصور مواليد",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "عبدالله الغامدي",
    role: "مصور عقارات",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "كريم الفهد",
    role: "خبير تقني",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "سلطان الراجحي",
    role: "فنان تصوير",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "فهد السبيعي",
    role: "مراجع معدات",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "راشد الجاسر",
    role: "فنان بصري",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
  },
];

function SocialIcons() {
  return (
    <div className="team-socials">
      <a href="#" aria-label="X">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a href="#" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      <a href="#" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page" dir="rtl">
      <section className="about-hero">
        <div className="about-grid"></div>

        <div className="about-glow about-glow-left"></div>
        <div className="about-glow about-glow-right"></div>

        <div className="about-hero-content">
          <span className="section-label">
            <span className="label-dot"></span>
            من نحن
          </span>

          <h1>
            مهمتنا هي <span>الإعلام والإلهام</span>
          </h1>

          <p>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
            المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
            عالي الجودة.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <i className="fa-solid fa-users"></i>
              <div className="stat-number">+2 مليون</div>
              <div className="stat-text">قارئ شهرياً</div>
            </div>

            <div className="stat-card">
              <i className="fa-solid fa-newspaper"></i>
              <div className="stat-number">+500</div>
              <div className="stat-text">مقالة منشورة</div>
            </div>

            <div className="stat-card">
              <i className="fa-solid fa-pen-nib"></i>
              <div className="stat-number">+50</div>
              <div className="stat-text">كاتب خبير</div>
            </div>

            <div className="stat-card">
              <i className="fa-solid fa-book-open"></i>
              <div className="stat-number">+15</div>
              <div className="stat-text">تصنيف</div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <h2>
              <span></span>
              قيمنا
              <span></span>
            </h2>

            <p>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-overlay"></div>

              <div className="value-content">
                <i className="fa-solid fa-bullseye"></i>
                <h3>الجودة أولاً</h3>
                <p>محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-overlay"></div>

              <div className="value-content">
                <i className="fa-solid fa-bolt"></i>
                <h3>تركيز عملي</h3>
                <p>أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-overlay"></div>

              <div className="value-content">
                <i className="fa-solid fa-handshake"></i>
                <h3>المجتمع</h3>
                <p>تعلم مع آلاف المصورين</p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-overlay"></div>

              <div className="value-content">
                <i className="fa-solid fa-arrows-rotate"></i>
                <h3>دائماً محدث</h3>
                <p>أحدث الاتجاهات وأفضل الممارسات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="section-label">فريقنا</span>

            <h2>تعرف على كتابنا</h2>

            <p>
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة
              معرفتهم مع المجتمع.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />

                  <div className="team-check">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <SocialIcons />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-glow contact-glow-right"></div>
        <div className="contact-glow contact-glow-left"></div>

        <div className="contact-container">
          <h2>لديك أسئلة؟ دعنا نتحدث!</h2>

          <p>
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد
            المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:hello@adasah.com"
              className="contact-email-button"
            >
              <svg
                className="contact-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              تواصل معنا
            </a>

            <Link to="/blog" className="contact-blog-button">
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}