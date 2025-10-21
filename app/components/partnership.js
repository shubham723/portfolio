import React from 'react';

const Partnership = () => {
    const openInNewTab = () => {
        const url = "https://www.upwork.com/freelancers/~013f94bc35d9d8d403";
        window.open(url, "_blank");
    };

    return (
        <div class="digi-container">
            <section class="vision-section">
                <div class="vision-left">
                    <h2>YOUR VISION. OUR CODE. ONE POWERFUL PARTNERSHIP.</h2>
                    <p>
                        From API integrations and cloud-native architecture to AI-driven automation and full-stack development, get secure, high-performance digital solutions aligned with your product roadmap and business goals.
                    </p>
                </div>

                <div class="vision-right">
                    <button class="vision-btn digi-cont" onClick={openInNewTab}><a>Let's Discuss Opportunities</a></button>
                </div>
            </section>
        </div>
    )
}

export default Partnership;
