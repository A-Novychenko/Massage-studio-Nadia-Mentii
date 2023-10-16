export default function AdminPage() {
  const onSubmit = (e) => {
    e.preventdefault();
    const res = fetch("");
  };

  return (
    <>
      <h1>Admin panel</h1>
      <section>
        <p>slides</p>
        <form onSubmit={onSubmit}>
          <label>
            Slides
            <input type="text" name="title" />
            <button type="submit">Save</button>
          </label>
        </form>
      </section>
    </>
  );
}
