import { Link } from "react-router-dom"
import blogsData from "../Data/Blogs.json"

function Home() {
  const posts = blogsData.posts || []

  const featuredPosts = posts
    .filter((post) => post.featured)
    .slice(0, 3)

  const latestSlugs = [
    "camera-settings-basics",
    "photo-composition-rules",
    "mobile-photography-tips",
  ]

  const latestPosts = latestSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean)

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date))
  }

  const categories = [
    {
      name: "إضاءة",
      count: 3,
      icon: "fa-sun",
      color: "orange",
    },
    {
      name: "بورتريه",
      count: 3,
      icon: "fa-user",
      color: "orange",
    },
    {
      name: "مناظر طبيعية",
      count: 2,
      icon: "fa-mountain-sun",
      color: "orange",
    },
    {
      name: "تقنيات",
      count: 5,
      icon: "fa-sliders",
      color: "orange",
    },
    {
      name: "معدات",
      count: 3,
      icon: "fa-camera",
      color: "orange",
    },
  ]

  return (
    <main className="home-page">

      <section className="hero-section">

        <div className="hero-grid"></div>

        <div className="hero-orange-blob"></div>
        <div className="hero-yellow-blob"></div>
        <div className="hero-center-glow"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-label">
              <span className="pulse-dot"></span>
              <span>مرحباً بك في عدسة</span>
            </div>

            <h1>
              اكتشف <span>فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p>
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="hero-buttons">

              <Link to="/blog" className="btn-primary">

                <span>استكشف المقالات</span>

                <i className="fa-solid fa-arrow-left"></i>

              </Link>

              <Link to="/about" className="btn-secondary">

                <i className="fa-solid fa-circle-info"></i>

                <span>اعرف المزيد</span>

              </Link>

            </div>


            <div className="stats-grid">

              <div className="stat-card">

                <i className="fa-solid fa-newspaper"></i>

                <p className="stat-number">
                  +50
                </p>

                <p className="stat-title">
                  مقالة
                </p>

              </div>


              <div className="stat-card">

                <i className="fa-solid fa-users"></i>

                <p className="stat-number">
                  +10ألف
                </p>

                <p className="stat-title">
                  قارئ
                </p>

              </div>


              <div className="stat-card">

                <i className="fa-solid fa-folder-open"></i>

                <p className="stat-number">
                  4
                </p>

                <p className="stat-title">
                  تصنيفات
                </p>

              </div>


              <div className="stat-card">

                <i className="fa-solid fa-pen-nib"></i>

                <p className="stat-number">
                  6
                </p>

                <p className="stat-title">
                  كاتب
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="featured-section">

        <div className="featured-bg"></div>

        <div className="home-container">

          <div className="section-header">

            <div>

              <span className="section-label">

                <span className="pulse-dot"></span>

                مميز

              </span>

              <h2 className="section-title">
                مقالات مختارة
              </h2>

              <p className="section-subtitle">
                محتوى منتقى لبدء رحلة تعلمك
              </p>

            </div>


            <Link to="/blog" className="featured-button">

              <span>
                عرض الكل
              </span>

              <i className="fa-solid fa-arrow-left"></i>

            </Link>

          </div>


          <div className="featured-posts">

            {featuredPosts.map((post, index) => (

              <article
                className="featured-card"
                key={post.id}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >

                <Link to={`/blog/${post.id}`}>

                  <div className="featured-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <div className="image-overlay"></div>

                    <div className="featured-badge">

                      <i className="fa-solid fa-star"></i>

                      مميز

                    </div>

                  </div>


                  <div className="featured-content">

                    <div className="post-meta">

                      <span className="category-tag">
                        {post.category}
                      </span>

                      <span className="read-time">

                        <i className="fa-regular fa-clock"></i>

                        {post.readTime}

                      </span>

                    </div>


                    <h2>
                      {post.title}
                    </h2>


                    <p>
                      {post.excerpt}
                    </p>


                    <div className="featured-footer">

                      <div className="author-info">

                        <div className="author-image">

                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                          />

                          <span></span>

                        </div>

                        <div>

                          <p>
                            {post.author.name}
                          </p>

                          <small>
                            {formatDate(post.date)}
                          </small>

                        </div>

                      </div>


                      <span className="read-more">

                        اقرأ المقال

                        <i className="fa-solid fa-arrow-left"></i>

                      </span>

                    </div>

                  </div>

                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="categories-section">

        <div className="home-container">

          <div className="categories-header">

            <span className="section-label">

              <span className="pulse-dot"></span>

              التصنيفات

            </span>

            <h2 className="section-title">
              استكشف حسب الموضوع
            </h2>

            <p className="section-subtitle">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>

          </div>


          <div className="categories-grid">

            {categories.map((category, index) => (

              <Link
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="category-card"
                key={category.name}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                <div className="category-hover"></div>

                <div className="category-content">

                  <div className="category-icon">

                    <i className={`fa-solid ${category.icon}`}></i>

                  </div>

                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.count} مقالة
                  </p>

                  <div className="category-arrow">

                    <i className="fa-solid fa-arrow-left"></i>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      <section className="latest-section">

        <div className="latest-bg"></div>

        <div className="home-container">

          <div className="section-header">

            <div>

              <span className="section-label">

                <span className="pulse-dot"></span>

                الأحدث

              </span>

              <h2 className="section-title">
                أحدث المقالات
              </h2>

              <p className="section-subtitle">
                محتوى جديد طازج من المطبعة
              </p>

            </div>


            <Link to="/blog" className="latest-link">

              عرض جميع المقالات

              <i className="fa-solid fa-arrow-left"></i>

            </Link>

          </div>


          <div className="latest-grid">

            {latestPosts.map((post, index) => (

              <article
                className="latest-card"
                key={post.id}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                <Link to={`/blog/${post.id}`}>

                  <div className="latest-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <div className="latest-image-overlay"></div>

                    <div className="latest-category">
                      {post.category}
                    </div>

                  </div>


                  <div className="latest-content">

                    <div className="latest-meta">

                      <span>

                        <i className="fa-regular fa-clock"></i>

                        {post.readTime}

                      </span>

                      <span className="meta-dot"></span>

                      <span>
                        {formatDate(post.date)}
                      </span>

                    </div>


                    <h3>
                      {post.title}
                    </h3>


                    <p>
                      {post.excerpt}
                    </p>


                    <div className="latest-footer">

                      <div className="latest-author">

                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                        />

                        <div>

                          <p>
                            {post.author.name}
                          </p>

                          <span>
                            {post.author.role}
                          </span>

                        </div>

                      </div>


                      <div className="latest-arrow">

                        <i className="fa-solid fa-arrow-left"></i>

                      </div>

                    </div>

                  </div>

                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="newsletter-section">

        <div className="newsletter-glow"></div>

        <div className="newsletter-container">

          <div className="newsletter-card">

            <div className="newsletter-icon">

              <i className="fa-regular fa-envelope"></i>

            </div>


            <h2>
              اشترك في <span>نشرتنا الإخبارية</span>
            </h2>


            <p>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>


            <form className="newsletter-form">

              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
              />

              <button type="submit">
                اشترك الآن
              </button>

            </form>


            <div className="newsletter-info">

              <div className="newsletter-avatars">

                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt=""
                />

              </div>


              <span>
                انضم لـ <strong>+10,000</strong> مصور
              </span>

              <span className="newsletter-separator">
                •
              </span>

              <span>
                بدون إزعاج
              </span>

              <span className="newsletter-separator">
                •
              </span>

              <span>
                إلغاء الاشتراك في أي وقت
              </span>

            </div>

          </div>




          

        </div>

      </section>

    </main>
  )
}

export default Home