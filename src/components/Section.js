const Section = ({ Icon, title, color, selected }) => {
  return (
    <div className={ `Section ${selected && "Section--selected"}` } style={ { borderBottom: `0px solid ${color}`, color: `${ selected && color }` } } >
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default Section
