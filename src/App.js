import React from 'react'
import Child from './Child'
import data from './data'

const tmp = data.map(function(a) {
     return a.topping.map(function(p) {
         return p
     })
})
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
        tmp : tmp
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
  
    handleInputChange(event) {
       if(this.state.options[event.target.id])
       {
            let arr = this.state.options[event.target.id]
            if(arr.indexOf(event.target.name) === -1)
            {
                arr.push(event.target.name)
                this.state.options[event.target.id] = arr
            }
            else
            {
                var index = arr.indexOf(event.target.name)
                arr.splice(index, 1);
                this.state.options[event.target.id] = arr
            }            
       }
       else
       {
            this.state.options[event.target.id] = [event.target.name]
       }
       console.log("options "+this.state.options)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.options)
    }
    render() {
     // console.log(JSON.stringify(this.state.tmp))
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            {
                this.state.tmp.map((frst,findex) =>{
                    return (
                        <div>
                            <div key={frst} style={{display: 'flex', flexDirection: 'row'}}>
                                {frst.map((scnd) => {
                                    return (
                                        <div key={scnd.id}>
                                        <Child value={scnd.type} checked={false} parent={findex} id={findex} handleChange={this.handleInputChange}/>
                                        </div>
                                    )
                                })}
                                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <ul>
                <li>{this.state.options}</li>
            </ul>
        </div>
      </form>
      );
    }
  }