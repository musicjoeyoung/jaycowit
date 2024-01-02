import "./Press.scss"

const Press = ({ darkMode }) => {
    return (
        <section className={`${darkMode ? 'dark' && 'dark--darkPress' : ''}`}>
            <h2 id="press">Press</h2>
            <img className="pressImg" src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415364/Jay%20Cowit/VMTZ0714_vmz3fi.jpg" />
            <ul>
                <li><p><a target="_blank" href="https://transom.org/2016/morphing-print-essays-radio/">Morphin Print Essays into Radio</a> (Transom piece about my sound design work for The Takeaway)</p></li>

                <li><p> <a target="_blank" href="https://current.org/2019/08/playing-with-sound-at-work-and-on-the-side-electronic-tracks-from-our-pubmedia-playlist/">Playing With Sound at Work</a> (Current.org piece about bumper music work for public radio)</p></li>

                <li><p><a target="_blank" href="https://rollcall.com/2012/03/20/political-remix/https://rollcall.com/2012/03/20/political-remix/">Political Remix</a> (Roll Call article about a Nancy Pelosi remix on The Takeaway)</p ></li>

                <li><p><a target="_blank" href="https://newyorkmusicdaily.wordpress.com/2016/02/17/thesometimeboys/">Two Shows in a Week…</a> (NY Daily review of The Sometime Boys live)</p ></li>


                <li><p><a target="_blank" href="https://playbill.com/article/cast-set-for-world-premiere-of-9-11-themed-9-10">Cast Set for World Premier of 9 / 10</a> (sound design for theater)</p ></li>

                <li><p><a target="_blank" href="https://newyorkmusicdaily.wordpress.com/2014/10/22/lamb/">2014’s Best Reinvention…</a> (NY Daily review of live performance of “The Lamb Live Down on Broadway” with members of Wounded Buffalo Theory, The Sometime Boys, Afroskull, and more.)</p ></li>

                <li><p><a target="_blank" href="https://mythiligrao.com/2013/01/21/crowd-sourcing-a-peoples-poem-for-the-inauguration/">Crowdsourcing a People’s Poem…</a></p ></li>

                <li><p><a target="_blank" href="https://www.youtube.com/watch?v=WceqrWl5sVg">Directing National Radio…</a></p ></li>
            </ul>
        </section>
    )
}

export default Press