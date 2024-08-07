import React from "react"; 
class Student extends React.Component{
    render() {
        return(
            <div className="col-4 p-1">
                <div className="row border">
                    <div className="col-2">
                      <img src={this.props.headShot}
                        className="w-100 py-2"
                      ></img>
                    </div>
                    <div className="col-8">{this.props.name}
                        <br/>
                    Coding Experancs {this.props.experance} years
                    </div>
                    <div className="col-2">
                       {this.props.children}
                    </div>
                </div>
            </div>
      );
    }
}
export default Student ; 