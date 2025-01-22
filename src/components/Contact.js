const Contact = () => {
  return (
    <div className="contact-us">
      <h1 className="font-bold text-3xl">Contact us page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-md"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-md"
          placeholder="message"
        />
        <button className="bg-black hover:bg-slate-600 text-white p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
