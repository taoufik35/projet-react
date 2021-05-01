function Error(props) {
    return(
        <div className="alert alert-danger">
            {props.message}
        </div>
    );
}

export default Error;