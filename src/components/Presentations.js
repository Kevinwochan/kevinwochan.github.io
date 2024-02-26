import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


const FullHeightRow = styled.div`
  min-height: 100vh;
`;

export const Presentations = () => (
    <section className="resume-section container">
        <FullHeightRow className="d-flex flex-column justify-content-center row text-center">
            <h1 className='flex-item'>Internal Talks</h1>
            <div className="row flex-item">
                <div class="col-sm-12 col-md-6" >
                    <iframe loading="lazy"
                        className='d-block m-auto'
                        style={{ minHeight: '30vh', width: '100%', aspectRatio: '16/9' }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbmgjGUpk&#x2F;t_1Lz9oIWvRWgbl1mE0XNA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbmgjGUpk&#x2F;t_1Lz9oIWvRWgbl1mE0XNA&#x2F;view?utm_content=DAEbmgjGUpk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">PASSWORDS 101</a>
                </div>
                <div class="col-sm-12 col-md-6" >
                    <iframe loading="lazy"
                        className='d-block m-auto'
                        style={{ minHeight: '30vh', width: '100%', aspectRatio: '16/9' }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeTzvJgN8&#x2F;17juJRNc7SFMl7pORtLpVg&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeTzvJgN8&#x2F;17juJRNc7SFMl7pORtLpVg&#x2F;view?utm_content=DAEeTzvJgN8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Capture The Flag</a>
                </div>
                <div class="col-sm-12 col-md-6" >
                    <iframe loading="lazy"
                        className='d-block m-auto'
                        style={{ minHeight: '30vh', width: '100%', aspectRatio: '16/9' }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEa1-Xvcn8&#x2F;-fWmZT5DODt9pLOXJi0O9w&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEa1-Xvcn8&#x2F;-fWmZT5DODt9pLOXJi0O9w&#x2F;view?utm_content=DAEa1-Xvcn8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">How do locks work?</a>
                </div>
                <div class="col-sm-12 col-md-6" >
                    <iframe loading="lazy"
                        className='d-block m-auto'
                        style={{ minHeight: '30vh', width: '100%', aspectRatio: '16/9' }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbvD9bQFU&#x2F;VEyR1ecEVeHCrNtcBSCMmw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEbvD9bQFU&#x2F;VEyR1ecEVeHCrNtcBSCMmw&#x2F;view?utm_content=DAEbvD9bQFU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Google Chrome Theme</a>
                </div>
            </div>
        </FullHeightRow>
    </section >
);


