const Result = () => {
  const subject = [
    {
      id: 1,
      topic: "Number System",
      subTopics: ["Introduction", "Real Numbers"],
    },
    {
      id: 2,
      topic: "Algebra",
      subTopics: [
        "Polynomials",
        "Pair of linear equationsin two variables",
        "Quadratic equations",
        "Arithmetic progression",
      ],
    },
  ];

  return (
    <div className="p-10 flex gap-10">
      <div className="absolute w-screen h-screen -z-50 -left-2/3 blur-3xl top-0 bottom-0 bg-[url(/banner.png)] bg-cover"></div>
      <div className="w-[320px]">
        <div className=" mb-5">
          <h1 className="text-xl">
            🎓 <span className="font-medium">Tutor AI /</span>
          </h1>
          <h2 className="text-2xl font-bold">Maths Class 10</h2>
        </div>
        <h3 className="text-xl text-center font-medium text-black/60 bg-white/60 rounded-full px-3 py-2 mb-5">
          Level → <span className="text-bold text-black">Detailed</span>
        </h3>
        <div className="bg-white/20 p-4 rounded-3xl">
          <div className="">
            {subject.map((subject) => (
              <div className="bg-white/40 p-4 rounded-lg mb-4" key={subject.id}>
                <h2 className="font-semibold text-lg">{subject.topic}</h2>
                <ul>
                  {subject.subTopics.map((subTopic) => (
                    <li
                      key={subTopic}
                      className="bg-white/80 px-4 py-2 font-medium rounded-xl mt-2 cursor-pointer hover:bg-indigo-400/80"
                    >
                      {subTopic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-4xl ">
          Pair of linear equations in two variables
        </h1>
        <button className="bg-blue-200 px-3 py-2 rounded-lg font-medium my-4 text-lg">
          Take a Quiz
        </button>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          ullamcorper non nibh quis dignissim. Praesent vel lorem quis velit
          mollis tincidunt. Donec in vestibulum ligula. Integer id orci sit amet
          tortor scelerisque convallis. Nunc ante tortor, egestas a tortor nec,
          lobortis pulvinar tellus. Sed rutrum semper elit, quis blandit est
          aliquet sit amet. Etiam lacinia tellus ut dolor commodo, id elementum
          ex bibendum. Donec in cursus sapien. Morbi convallis fermentum justo
          quis hendrerit. Maecenas at nulla dapibus, pellentesque lacus a,
          sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum ullamcorper nisl a mattis porttitor. Quisque dui
          elit, pretium commodo maximus sit amet, dictum maximus eros. Duis sed
          ante sit amet nulla vulputate convallis. Pellentesque egestas
          tincidunt lacus eu posuere. Phasellus ut turpis augue. Maecenas
          pellentesque pharetra metus, in interdum justo malesuada in. Sed vel
          nisl a nibh sollicitudin luctus quis ut mauris. Aenean aliquet, nulla
          ac vestibulum placerat, nunc magna efficitur ante, id mattis ipsum
          orci sit amet purus. Duis vitae ligula nec nisl ultricies faucibus.
          Nam egestas a leo ac dignissim. Nam dignissim, lacus vel laoreet
          interdum, urna ex tempus ante, non convallis nisl erat non ipsum.
          Morbi mattis eget sem id congue. Mauris et feugiat purus. Aliquam
          dolor sem, ullamcorper nec ex nec, blandit bibendum urna. In pretium,
          velit et tristique viverra, ipsum erat aliquam nisl, sit amet
          vulputate arcu justo interdum sapien. In dictum metus sit amet mauris
          maximus faucibus. Suspendisse potenti. Praesent at diam non mauris
          ornare porta vel in orci. Mauris sit amet ex fringilla, malesuada
          libero a, finibus ex. In dolor purus, tempus a scelerisque eget,
          gravida ac tortor. In quis commodo nisi, ac condimentum felis.
          Suspendisse nec vestibulum tellus. Suspendisse fermentum nibh sed
          volutpat auctor. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Maecenas bibendum eleifend lacus
          eget pulvinar. Ut tempor condimentum libero, et ornare eros finibus
          vitae. Quisque faucibus tristique tellus a finibus. Praesent accumsan
          felis a est vestibulum convallis. Fusce eu tincidunt nibh, nec
          sollicitudin nulla. Vivamus quis lacus lectus. Integer iaculis ligula
          tortor, non egestas metus malesuada quis. Sed vestibulum iaculis orci
          quis feugiat. Fusce id mollis enim. Donec dapibus, massa a gravida
          condimentum, ante risus convallis mauris, sit amet laoreet ipsum
          libero id mi. In vel nibh a erat imperdiet tincidunt. Aenean facilisis
          mi id rutrum aliquam. Proin tempus porta neque, eget tincidunt augue
          condimentum a. In vitae leo at libero tincidunt suscipit. Aliquam erat
          volutpat. Sed justo elit, lacinia quis quam eu, lacinia sagittis erat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fermentum ante luctus ligula viverra feugiat. Integer ut ante lectus.
          Morbi pulvinar non velit vitae laoreet.
        </p>
      </div>
    </div>
  );
};
export default Result;
