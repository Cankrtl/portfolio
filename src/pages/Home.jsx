export function Home() {
  return (
    <div>
      <section
        className="banner"
        style={{ height: 200, position: "relative", padding: 0 }}
      >
        <img
          src="/banner01.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </section>
      <section>
        <h1>I'm Can Kartal</h1>
        <h2>Junior Frontend developer</h2>
        <p>Contact me regarding your job postings
        </p>
      </section>
    </div>
  );
}
