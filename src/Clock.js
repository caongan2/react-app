function Clock(props) {
    return (
        <div>
            {/* <h2>{props.date.toLocaleTimeString()}</h2> */}
            <h2>{props.array["text"]} - {props.array["count"]}</h2>
            <h2>{props.array["date"].toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;