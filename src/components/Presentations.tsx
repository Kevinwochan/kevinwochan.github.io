import styled from "styled-components";

const FullHeightRow = styled.div`
  min-height: 100vh;
`;

const TALKS = [
  {
    title: "Cloud Crafting with Python",
    link: "https://www.canva.com/design/DAGkadArudk/3Xp0r_QZ2HDECrTV4FCQxA/view?utm_content=DAGkadArudk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb57d999854",
    embed: "https://www.canva.com/design/DAGkadArudk/B3eyEvdsErt8E9nH97_Yjw/view?embed"
  },
  {

    title: "WTF Python",
    link: "https://www.canva.com/design/DAGYYPCuLQc/OcAQsVtpWemU4zpFV2AAOg/view?utm_content=DAGYYPCuLQc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e07f7599b",
    embed: "https://www.canva.com/design/DAGYYPCuLQc/ptlibrk4qk8trQcS1MIaqA/view?embed",
  },
  {
    title: "PASSWORDS 101",
    link: "https://www.canva.com/design/DAEbmgjGUpk/t_1Lz9oIWvRWgbl1mE0XNA/view?utm_content=DAEbmgjGUpk&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    embed: "https://www.canva.com/design/DAEbmgjGUpk/t_1Lz9oIWvRWgbl1mE0XNA/view?embed",
  },
  {
    title: "Capture The Flag",
    link: "https://www.canva.com/design/DAEeTzvJgN8/17juJRNc7SFMl7pORtLpVg/view?utm_content=DAEeTzvJgN8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    embed: "https://www.canva.com/design/DAEeTzvJgN8/17juJRNc7SFMl7pORtLpVg/view?embed",
  },
  {
    title: "How do locks work?",
    link: "https://www.canva.com/design/DAEa1-Xvcn8/-fWmZT5DODt9pLOXJi0O9w/view?utm_content=DAEa1-Xvcn8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    embed: "https://www.canva.com/design/DAEa1-Xvcn8/-fWmZT5DODt9pLOXJi0O9w/view?embed",
  },
  {
    title: "Google Chrome Theme",
    link: "https://www.canva.com/design/DAEbvD9bQFU/VEyR1ecEVeHCrNtcBSCMmw/view?utm_content=DAEbvD9bQFU&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    embed: "https://www.canva.com/design/DAEbvD9bQFU/VEyR1ecEVeHCrNtcBSCMmw/view?embed",
  }
]

export const Presentations = () => (
  <section id="talks" className="resume-section container">
    <FullHeightRow className="d-flex flex-column justify-content-center row text-center section-inner">
      <h1 className="flex-item">Previous Talks</h1>
      <div className="row flex-item">
        {TALKS.map(talk => (
          <div className="col-sm-12 col-md-6 talk-card">
            <div className="section-card">
              <iframe
                loading="lazy"
                className="d-block m-auto"
                style={{ minHeight: "30vh", width: "100%", aspectRatio: "16/9" }}
                src={talk.embed}
                allowFullScreen
                allow="fullscreen"
              ></iframe>
              <a href={talk.link} target="_blank" rel="noopener">
                {talk.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </FullHeightRow>
  </section>
);

