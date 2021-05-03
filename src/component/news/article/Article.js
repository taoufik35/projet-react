function Article (props) {
    return(
      <div className="col-6 col-sm-4 col-lg-3" >
        <article className= "bg-dark text-center text-danger py-5 my-2 ">
            {props.index}
        </article>
      </div>
    );
}

export default Article;