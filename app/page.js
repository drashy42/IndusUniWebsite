"use client";
import Link from "next/link";

const BRAND = process.env.NEXT_PUBLIC_WEBSITE_NAME || "IUHub";


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section position-relative overflow-hidden py-5"
        style={{
          background: "linear-gradient(135deg, #FFFDF5 0%, #FFF8E1 100%)",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-9 mx-auto text-center">
              
              {/* Platform badge */}
              <div className="mb-4">
                <span
                  className="badge px-4 py-2 rounded-pill fs-6 fw-medium"
                  style={{
                    backgroundColor: "#FFF3CD",
                    color: "#856404",
                  }}
                >
                  Academic Resource Platform
                </span>
              </div>

              {/* Main heading */}
              <h1 className="display-3 fw-bold mb-3 lh-sm">
                Engineering Resources for{" "}
                <span
                  className="position-relative d-inline-block"
                  style={{ color: "#F9A825" }}
                >
                  Indus University
                  <svg
                    className="position-absolute start-0 bottom-0 w-100"
                    height="10"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Courses */}
              <div className="mb-4">
                <p className="fw-medium text-muted mb-0">
                  CE <span className="mx-2">·</span>
                  CSE <span className="mx-2">·</span>
                  IT
                </p>
              </div>

              {/* Feature highlights */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                {["Notes", "Assignments", "Diagrams", "Previous Papers"].map(
                  (item, idx) => (
                    <span
                      key={idx}
                      className="badge px-3 py-2 rounded-pill"
                      style={{
                        backgroundColor: "#FFF3CD",
                        color: "#664D03",
                      }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* CTA buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  href="#year-selection"
                  className="btn btn-lg px-5 py-3 rounded-pill shadow-sm fw-semibold"
                  style={{
                    backgroundColor: "#FFC107",
                    borderColor: "#FFC107",
                    color: "#212529",
                  }}
                >
                  Browse by Year
                </Link>

                <Link
                  href="/1st-year/eg"
                  className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "2px solid #FFC107",
                    color: "#856404",
                  }}
                >
                  Engineering Graphics
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: 0, pointerEvents: "none" }}
        >
          <div
            className="position-absolute"
            style={{
              top: "10%",
              left: "5%",
              width: "150px",
              height: "150px",
              background:
                "radial-gradient(circle, rgba(255,193,7,0.18) 0%, transparent 70%)",
            }}
          ></div>

          <div
            className="position-absolute"
            style={{
              bottom: "10%",
              right: "5%",
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(255,193,7,0.18) 0%, transparent 70%)",
            }}
          ></div>
        </div>
      </section>

      {/* YEAR SELECTION */}
      <section id="year-selection" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                Choose Your Academic Year
              </h2>

              <p className="lead text-muted">
                Resources structured exactly as per your syllabus with easy
                navigation
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                label: "1st Year",
                href: "/1st-year",
                desc: "Fundamental engineering subjects including mathematics, physics, and core concepts",
                icon: "1-circle-fill",
              },
              {
                label: "2nd Year",
                href: "/2nd-year",
                desc: "Core and applied subjects building on foundational knowledge",
                icon: "2-circle-fill",
              },
              {
                label: "3rd Year",
                href: "/3rd-year",
                desc: "Advanced engineering subjects and specialized topics",
                icon: "3-circle-fill",
              },
              {
                label: "4th Year",
                href: "/4th-year",
                desc: "Capstone projects and industry-relevant engineering applications",
                icon: "4-circle-fill",
              },
            ].map((year, idx) => (
              <div key={idx} className="col-md-6 col-lg-5">
                <Link
                  href={year.href}
                  className="text-decoration-none"
                >
                  <div
                    className="card h-100 border-0 shadow-sm position-relative overflow-hidden"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(255,193,7,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 .125rem .25rem rgba(0,0,0,.075)";
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className="rounded-circle p-3 me-3"
                          style={{
                            backgroundColor: "#FFF3CD",
                          }}
                        >
                          <i
                            className={`bi bi-${year.icon} fs-1`}
                            style={{ color: "#F9A825" }}
                          ></i>
                        </div>

                        <div className="flex-grow-1">
                          <h3 className="card-title h4 mb-2 text-dark">
                            {year.label}
                          </h3>
                        </div>
                      </div>

                      <p className="card-text text-muted mb-4">
                        {year.desc}
                      </p>

                      <div
                        className="d-flex align-items-center fw-semibold"
                        style={{ color: "#F9A825" }}
                      >
                        View All Subjects
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>

                    {/* Yellow bottom border */}
                    <div
                      className="position-absolute bottom-0 start-0 w-100"
                      style={{
                        height: "5px",
                        backgroundColor: "#FFC107",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section
        className="py-5"
        style={{ backgroundColor: "#FFFDF5" }}
      >
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                Quick Access
              </h2>

              <p className="lead text-muted">
                Jump directly to the most popular subjects
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Engineering Graphics",
                href: "/1st-year/eg",
                icon: "pencil-square",
                desc: "Technical drawings & CAD",
              },
              {
                title: "Engineering Calculus",
                href: "/1st-year/calculus",
                icon: "calculator",
                desc: "Differential & Integral",
              },
              {
                title: "Environmental Science",
                href: "/1st-year/es",
                icon: "globe",
                desc: "Sustainability & Ecology",
              },
              {
                title: "Engineering Chemistry",
                href: "/1st-year/ec",
                icon: "flask",
                desc: "Materials & Reactions",
              },
            ].map((subject, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <Link
                  href={subject.href}
                  className="text-decoration-none"
                >
                  <div
                    className="card h-100 border-0 shadow-sm text-center"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(255,193,7,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 .125rem .25rem rgba(0,0,0,.075)";
                    }}
                  >
                    <div className="card-body p-4">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: "64px",
                          height: "64px",
                          backgroundColor: "#FFF3CD",
                        }}
                      >
                        <i
                          className={`bi bi-${subject.icon} fs-3`}
                          style={{ color: "#F9A825" }}
                        ></i>
                      </div>

                      <h6 className="card-title mb-2 fw-bold text-dark">
                        {subject.title}
                      </h6>

                      <p className="card-text text-muted small mb-3">
                        {subject.desc}
                      </p>

                      <span
                        className="fw-semibold small"
                        style={{ color: "#F9A825" }}
                      >
                        Browse{" "}
                        <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                Why Students Choose {BRAND}
              </h2>

              <p className="lead text-muted">
                Everything you need to excel in your engineering studies
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "check-circle-fill",
                title: "Syllabus-Aligned",
                desc: "All content matches your university curriculum exactly",
              },
              {
                icon: "clock-fill",
                title: "Always Updated",
                desc: "Regular updates with the latest study materials",
              },
              {
                icon: "download",
                title: "Easy Downloads",
                desc: "Download PDFs and resources for offline studying",
              },
              {
                icon: "search",
                title: "Quick Search",
                desc: "Find exactly what you need in seconds",
              },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#FFF3CD",
                    }}
                  >
                    <i
                      className={`bi bi-${feature.icon} fs-1`}
                      style={{ color: "#F9A825" }}
                    ></i>
                  </div>

                  <h5 className="fw-bold mb-2">
                    {feature.title}
                  </h5>

                  <p className="text-muted small">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-5 text-dark position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)",
        }}
      >
        <div
          className="container py-5 position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4">
                Ready to Start Learning?
              </h2>

              <p className="lead mb-5">
                Join students who are already learning with{" "}
                <strong>{BRAND}</strong>
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  href="#year-selection"
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow fw-semibold"
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Get Started Now
                </Link>

                <Link
                  href="/about"
                  className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
                  style={{
                    backgroundColor: "#212529",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: 0.12,
            pointerEvents: "none",
          }}
        >
          <div
            className="position-absolute"
            style={{
              top: "0",
              left: "0",
              width: "250px",
              height: "250px",
              background:
                "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          ></div>

          <div
            className="position-absolute"
            style={{
              bottom: "0",
              right: "0",
              width: "350px",
              height: "350px",
              background:
                "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
