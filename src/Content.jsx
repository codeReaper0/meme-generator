function Content() {
  return (
    <main className="max-w-6xl mx-auto p-5">
      <form className="grid grid-cols-2 grid-rows-[40px_40px] gap-4">
        <input
          type="text"
          placeholder="Top text"
          className="rounded-[5px] border border-[#d5d4d8] indent-[5px]"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="rounded-[5px] border border-[#d5d4d8] indent-[5px]"
        />
        <button className="col-span-2  gradient-bg text-white rounded-[5px] border-none cursor-pointer">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}

export default Content;
