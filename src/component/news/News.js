import React from "react";
import Axios from "axios";
import Error from "../error/Error";
import Article from "./article/Article";



class News extends React.Component{
    constructor(props){
        super(props);

        this.state={
            loaded: false,
            error: false,
            articles : null,
            data: null,
            message: "chargement en cours"


        }
    }


    componentDidMount(){
        Axios.get("https://swapi.dev/api/")
        .then((response) =>{
            let articles = Object.keys( response.data).map((index) => {
                return <Article index={index}/>
        });

        this.setState({
            loaded: true,
            data: response.data,
            articles: articles
        })
        
        
    })

    .catch ((error) => {
        this.setState({
            loaded: true,
            error : error,
            message: "porblème de chargement merci de reessayer !!"
        })
    })



    }

    render(){
        if(this.state.loaded){
            if(this.state.error){
                return(
                    <p>Une erreur est survenu :-( .message : {this.state.error.message}</p>
                )
            }
            
            return(
                <section>
                <div className="row">
                {this.state.articles}
                </div>
                </section>
            );

        }
        return(
            <p>Vos donnees sont en cours de chargement</p>
        );
    }
}


export default News;
