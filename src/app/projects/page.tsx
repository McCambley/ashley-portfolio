import Link from 'next/link';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/projects/city-cycles">City Cycles</Link>
        </li>
        <li>
          <Link href="/projects/midnight-brew">Midnight Brew</Link>
        </li>
        <li>
          <Link href="/projects/sit-conmigo">Sit Conmigo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
