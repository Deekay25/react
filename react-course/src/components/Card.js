import './Card.css'
function Card(props) {
    // whenever you have a custom component you need to tell it to accept attributes imperatively
    // below you are telling the card component to accept a class of card and className
    const classes = 'card ' + props.className;
    return (
        // serving the contents of card component through props.children
        // <div className='card'>{props.children}</div>
        <div className={classes}>{props.children}</div>
    )
}

export default Card;