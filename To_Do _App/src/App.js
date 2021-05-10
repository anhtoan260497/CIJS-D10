import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      undone: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      done: [],  
    };
  }

   



  renderUndoneList = () => {
    return this.state.undone.map((element,index) => {
      return <li onClick={() => {
        if(element == "Item 1") { 
         this.state.undone.splice(this.state.undone.indexOf("Item 1"),1)
         this.state.done.push("Item 1")
        
        this.setState ( {
          undone : this.state.undone,
          done : this.state.done
        })
      } else if(element == "Item 2") { 
        this.state.undone.splice(this.state.undone.indexOf("Item 2"),1)
        this.state.done.push("Item 2")
       
       this.setState ( {
         undone : this.state.undone,
         done : this.state.done
       })
     } else if(element == "Item 3") { 
      this.state.undone.splice(this.state.undone.indexOf("Item 3"),1)
      this.state.done.push("Item 3")
     
     this.setState ( {
       undone : this.state.undone,
       done : this.state.done
     })
   } else if(element == "Item 4") { 
    this.state.undone.splice(this.state.undone.indexOf("Item 4"),1)
    this.state.done.push("Item 4")
   
   this.setState ( {
     undone : this.state.undone,
     done : this.state.done
   })
 } else if(element == "Item 5") { 
  this.state.undone.splice(this.state.undone.indexOf("Item 5"),1)
  this.state.done.push("Item 5")
 
 this.setState ( {
   undone : this.state.undone,
   done : this.state.done
 })
}
    }
    }>{element}</li>;
     
    });
  };




 renderDoneList = () => {
  return this.state.done.map((element, index) => {
    return <li onClick={() => {
      if(element == "Item 1") { 
       this.state.done.splice(this.state.done.indexOf("Item 1"),1)
       this.state.undone.push("Item 1")
      
      this.setState ( {
        undone : this.state.undone,
        done : this.state.done
      })
    } else if(element == "Item 2") { 
      this.state.done.splice(this.state.done.indexOf("Item 2"),1)
      this.state.undone.push("Item 2")
     
     this.setState ( {
       undone : this.state.undone,
       done : this.state.done
     })
   } else if(element == "Item 3") { 
    this.state.done.splice(this.state.done.indexOf("Item 3"),1)
    this.state.undone.push("Item 3")
   
   this.setState ( {
     undone : this.state.undone,
     done : this.state.done
   })
 } else if(element == "Item 4") { 
  this.state.done.splice(this.state.done.indexOf("Item 4"),1)
  this.state.undone.push("Item 4")
 
 this.setState ( {
   undone : this.state.undone,
   done : this.state.done
 })
} else if(element == "Item 5") { 
this.state.done.splice(this.state.done.indexOf("Item 5"),1)
this.state.undone.push("Item 5")

this.setState ( {
 undone : this.state.undone,
 done : this.state.done
})
}
  }
  }>{element}</li>;
   
  });
 }
  

  render() {
    return (
      <div className="App">
        <div className="undoneList">
          <header>
          <h5>Undone</h5>
          </header>
          <ul>{this.renderUndoneList()}</ul>
          </div>
          <div className="doneList">
            <header>
          <h5>Done</h5>
          </header>
          <ul>{this.renderDoneList()}</ul>
          </div>
      </div>
    );
  }
}
export default App;