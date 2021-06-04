/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import { getArticlesCss } from "./articles.styles";
import learningByTeaching from "../../images/article-learning-by-teaching.jpg";
import bbcPanel from "../../images/article-100-women-panel.jpeg";
import zoneWIT from "../../images/article-zone-women-in-tech.jpeg";
import techConference from "../../images/article-women-of-silicon-roundabout.jpeg";

export const Articles = () => {
  const {
    containerCss,
    h2Styling,
    h3Styling,
    imageCss,
    textContainerStyling,
    articleContainer,
    paragraphStyling,
    linkStyling,
  } = getArticlesCss();

  return (
    <section css={containerCss} id="writing">
      <Container>
        <h2 css={h2Styling}>Writing</h2>

        <article css={articleContainer}>
          <Row>
            <Col sm={12} md={4}>
              <a
                href="https://thisiszone.medium.com/learning-by-teaching-what-ive-discovered-by-coaching-others-to-code-aaaf82d9193"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={learningByTeaching}
                  css={imageCss}
                  alt="Fran on a work call"
                />
              </a>
            </Col>
            <Col sm={12} md={8} css={textContainerStyling}>
              <h3>
                <a
                  href="https://thisiszone.medium.com/learning-by-teaching-what-ive-discovered-by-coaching-others-to-code-aaaf82d9193"
                  css={h3Styling}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learning by teaching — what I’ve discovered by coaching others
                  to code
                </a>
              </h3>
              <p css={paragraphStyling}>
                <a
                  href="https://thisiszone.medium.com/learning-by-teaching-what-ive-discovered-by-coaching-others-to-code-aaaf82d9193"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zone’s front-end developer Fran Haines tells us how mentoring
                  for the charity Codebar has helped her build up a deeper
                  understanding of her own skills…
                </a>
              </p>
              <a
                href="https://thisiszone.medium.com/learning-by-teaching-what-ive-discovered-by-coaching-others-to-code-aaaf82d9193"
                css={linkStyling}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more...
              </a>
            </Col>
          </Row>
        </article>

        <article css={articleContainer}>
          <Row>
            <Col sm={12} md={4}>
              <a
                href="https://thisiszone.medium.com/advice-to-aspiring-developers-from-the-bbc-click-100-women-panel-67c274c41227"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={bbcPanel}
                  css={imageCss}
                  alt="Fran sat with her laptop on a sofa"
                />
              </a>
            </Col>
            <Col sm={12} md={8} css={textContainerStyling}>
              <h3>
                <a
                  href="https://thisiszone.medium.com/advice-to-aspiring-developers-from-the-bbc-click-100-women-panel-67c274c41227"
                  css={h3Styling}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advice to aspiring developers from the BBC Click 100 Women
                  Panel
                </a>
              </h3>
              <p css={paragraphStyling}>
                <a
                  href="https://thisiszone.medium.com/advice-to-aspiring-developers-from-the-bbc-click-100-women-panel-67c274c41227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our front-end developer Fran Haines shares what she learned
                  from joining the audience for a BBC News special celebrating
                  the best women in technology…
                </a>
              </p>
              <a
                css={linkStyling}
                target="_blank"
                href="https://thisiszone.medium.com/advice-to-aspiring-developers-from-the-bbc-click-100-women-panel-67c274c41227"
                rel="noopener noreferrer"
              >
                Read more...
              </a>
            </Col>
          </Row>
        </article>

        <article css={articleContainer}>
          <Row>
            <Col sm={12} md={4}>
              <a
                href="https://thisiszone.medium.com/zone-women-in-tech-fran-haines-66d71e88dbc3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={zoneWIT}
                  css={imageCss}
                  alt="Fran wearing sunglasses outside the Bath Royal Crescent"
                />
              </a>
            </Col>
            <Col sm={12} md={8} css={textContainerStyling}>
              <h3>
                <a
                  css={h3Styling}
                  href="https://thisiszone.medium.com/zone-women-in-tech-fran-haines-66d71e88dbc3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zone Women in Tech: Fran Haines
                </a>
              </h3>
              <p css={paragraphStyling}>
                <a
                  href="https://thisiszone.medium.com/zone-women-in-tech-fran-haines-66d71e88dbc3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The theme to this year’s International Women’s Day is
                  #EachforEqual — where an equal world is an enabled world. This
                  is something that resonates strongly for us at Zone.
                </a>
              </p>
              <a
                css={linkStyling}
                href="https://thisiszone.medium.com/zone-women-in-tech-fran-haines-66d71e88dbc3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more...
              </a>
            </Col>
          </Row>
        </article>

        <article css={articleContainer}>
          <Row>
            <Col sm={12} md={4}>
              <a
                href="https://thisiszone.medium.com/highlights-from-women-of-silicon-roundabout-9acdc128d1ecar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={techConference}
                  css={imageCss}
                  alt="Women of Silicon Roundabout Stage"
                />
              </a>
            </Col>
            <Col sm={12} md={8} css={textContainerStyling}>
              <h3>
                <a
                  href="https://thisiszone.medium.com/highlights-from-women-of-silicon-roundabout-9acdc128d1ec"
                  css={h3Styling}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Highlights from Women of Silicon Roundabout
                </a>
              </h3>
              <p css={paragraphStyling}>
                <a
                  href="https://thisiszone.medium.com/highlights-from-women-of-silicon-roundabout-9acdc128d1ec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zone’s Fran Haines and Sofia Lara Peyret attended Women of
                  Silicon Roundabout recently which aims to inspire, celebrate
                  and connect women working in technology. They share their
                  thoughts on why it’s so important and what they learned.
                </a>
              </p>
              <a
                css={linkStyling}
                href="https://thisiszone.medium.com/highlights-from-women-of-silicon-roundabout-9acdc128d1ec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more...
              </a>
            </Col>
          </Row>
        </article>
      </Container>
    </section>
  );
};

export default Articles;
