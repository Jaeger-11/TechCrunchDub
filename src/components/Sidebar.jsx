import data from "../data/sidebarData";
import '../styles/sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">TC</h1>
      <p>Join TechCrunch+</p>
      <p>Login</p>
      <p>Search</p>

      <ul>
      {data.map((item) => {
        const {name, link} = item
        return <li key={link}>{name}</li>
      })}
      </ul>
    </aside>
  )
}

export default Sidebar;