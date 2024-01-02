import "./Editing.scss"

const Editing = ({ darkMode }) => {
    return (
        <section className={`editing ${darkMode ? 'dark' : ''}`}>
            <h2 id="editing" className="editing__h2">Copy Editing/Script Writing/Consulting</h2>
            <img className="editing__img" src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415354/Jay%20Cowit/IMG_0203_p3c13d.jpg" />
            <p className="editing__p1">I’m a news show veteran and deeply familiar with copywriting, editing, and scripting - all under intense deadlines of course. Working hard news stories is not something I’ve ever shied away from and bring that experience to your team. I’m a great listener with lots of thoughts about how we can edit your podcast, trim some fat, or add interesting aspects. I’m an experienced promo writer/producer and I believe that writing in a conversational tone will help you reach more audiences. But I am also adept at adapting to anyone’s style to help you tighten composition, write for your talent, and sharpen pre-written dialogue talking directly to your listeners. Often, a better speaking style can be achieved through better writing, so let’s see what we can do together.</p>
            <p className="editing__p2">Additionally, I offer group or solo consulting sessions on all things podcasts/audio/radio. I’ve seen it all over the past two decades and I love to talk about how my experiences, good and bad, can maybe help pave a path to more efficient production, good work life balance, superior sounding product, and audience growth. Happy to chat with your team, or you, about anything. Prices available upon request. </p>
        </section>
    )
}

export default Editing