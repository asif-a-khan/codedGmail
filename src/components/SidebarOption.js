const SidebarOption = ({Icon, title, number}) => {
  return (
    <div className="SidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
