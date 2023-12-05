import "./Voice.scss"

const Voice = () => {
    return (
        <section>
            <h2 id="voice">Voiceover Artist/Hosting/On-Air Work</h2>
            <p>I’ve had opportunities throughout my career to step out from behind the glass, and I’m equally as comfortable talking into the mic and making sounds. My voicework includes national and local radio promos, funders, advertisements, translation voiceovers, and show liners.</p>
            <div className="voice-card-container">
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{
                        marginBottom: '1rem',
                        width: '100%',
                        maxWidth: '660px',
                        overflow: 'hidden',
                        borderRadius: '10px',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/larissa-fasthorse-on-finding-the-humor-in/id363143310?i=1000610002110"
                ></iframe>
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{
                        marginBottom: '1rem',
                        width: '100%',
                        maxWidth: '660px',
                        overflow: 'hidden',
                        borderRadius: '10px',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/puff-puff-passing-marijuana-legislation/id363143310?i=1000609983241"
                ></iframe>
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{
                        marginBottom: '1rem',
                        width: '100%',
                        maxWidth: '660px',
                        overflow: 'hidden',
                        borderRadius: '10px',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/a-look-at-coachella-2023-weekend-one/id363143310?i=1000610127360"
                ></iframe>
            </div>
            <p>I also do voice over work for video games, some of which should be available very soon. I can do characters, or any kind of tone you may need.</p>

            <p>Commercial/Promo Reels available <a href="mailto:jaycowit@gmail.com?subject=Commercial/Promo Reels">upon request</a></p>
        </section>
    )
}

export default Voice