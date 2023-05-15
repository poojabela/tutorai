export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-20 bg-[url('/banner.png')] bg-cover">
      <h1 className="text-5xl font-bold text-black">🎓 Tutor AI</h1>
      <form
        action="/result"
        method="get"
        className="flex gap-2 items-center text-2xl"
      >
        <input
          type="text"
          name="subject"
          className="bg-white/50 font-semibold py-3 px-2 rounded-full text-center"
          defaultValue={"Maths Class 10"}
        />
        <button type="submit" className="bg-white px-5 py-3 rounded-xl">
          ✨
        </button>
      </form>
    </div>
  );
}
