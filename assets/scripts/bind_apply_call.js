// Bind()
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42
  

  // Apply
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  person.fullName.apply(person1);  // Will return "Mary Doe"

  // In this example the fullName method of person is applied on person1:


  // Call
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  person.fullName.call(person1);  // Will return "John Doe"

  // The difference is that 
  // apply lets you invoke the function with arguments as an array 
  // call requires the parameters be listed explicitly

  // theFunction.apply(this,arrayOfArgs)
  // theFunction.call(this,arg1,arg2,...)
