import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


  
class App extends React.Component {
    state={lat:null, long:null, errorMessage:""};

        componentDidMount() {

            window.navigator.geolocation.getCurrentPosition(  
                (position)=>{
                    this.setState({lat:position.coords.latitude});
                    this.setState({long:position.coords.longitude});
                },
                (err)=>{
                    this.setState({errorMessage:err.message});
                }
            );
      
        }
   
    render (){
      if((this.state.lat)&&(this.state.long)&&!(this.state.errorMessage)){
          return(<div>
              <SeasonDisplay lat={this.state.lat} long={this.state.long} />
              
              </div>
               );
      }
      
      else if(!(this.state.lat) && !(this.state.long) && (this.state.errorMessage)){
        return(
            <div>
                Error!! {this.state.errorMessage}
             </div>
            );
      }
      else {
          return <Spinner />;
          
      }

     
    }
}

ReactDOM.render(<App />, document.querySelector('#root') );







