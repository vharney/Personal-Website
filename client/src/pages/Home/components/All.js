import About from './About';
import Blog from './Blog';
import Projects from './Projects';

function All() {
    return(
        <div>
            <h2>All</h2>
            {<About />}
            {<Projects />}
            {<Blog />}
        </div>
    );
}

export default All;