import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 100vh;
`;

export const Presentations = () => (
    <section className="resume-section container">
        <FullHeightRow className="d-flex align-items-center justify-content-center row text-center">
            <div class="col-sm" >
                <iframe loading="lazy"
                    className='d-block m-auto'
                    style={{ minHeight: '30vh', minWidth: '30vw' }}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbmgjGUpk&#x2F;t_1Lz9oIWvRWgbl1mE0XNA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
                <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbmgjGUpk&#x2F;t_1Lz9oIWvRWgbl1mE0XNA&#x2F;view?utm_content=DAEbmgjGUpk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">PASSWORDS 101</a>
            </div>
            <div class="col-sm">
                <iframe loading="lazy"
                    className='d-block m-auto'
                    style={{ minHeight: '30vh', minWidth: '30vw' }}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeTzvJgN8&#x2F;17juJRNc7SFMl7pORtLpVg&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
                <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeTzvJgN8&#x2F;17juJRNc7SFMl7pORtLpVg&#x2F;view?utm_content=DAEeTzvJgN8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Capture The Flag</a>
            </div>
            <div class="col-sm">
                <iframe loading="lazy"
                    className='d-block m-auto'
                    style={{ minHeight: '30vh', minWidth: '30vw' }}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEa1-Xvcn8&#x2F;-fWmZT5DODt9pLOXJi0O9w&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
                <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEa1-Xvcn8&#x2F;-fWmZT5DODt9pLOXJi0O9w&#x2F;view?utm_content=DAEa1-Xvcn8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">How do locks work?</a>
            </div>
        </FullHeightRow>
    </section >
);


