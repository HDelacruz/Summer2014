 describe("my test case", function() {
     
     var helloValue;
  
    beforeEach(function() {
      helloValue = hello();
    });
     
     it("should be a equal to hello", function(){
        expect(helloValue).toEqual("hello");
     });
     
 });
 
 
 
 describe("Add Ten", function() {
     
    var val;
  
    beforeEach(function() {
      val = addTen(20);
    });
     
     it("should be a equal to 30", function(){
        expect(val).toEqual(30);
     });
     
      it("should be greater than 0", function(){
        expect(val).toBeGreaterThan(0);
     });
     
 });





describe("Percent", function() {
     
    var val;
    
    beforeEach(function() {
      val = percent(20);
    });
    
     it("should be a equal to 0.20", function(){
        val = percent(20);
        expect(val).toEqual('0.2');
     });
     
     
     it("should be a equal to 0.20", function(){
        val = percent(200);
        expect(val).toEqual('2');
     });
     
     /* it("should be greater than 0", function(){
        val = percent(20000);
        expect(val).toBeGreaterThan(0);
     });
     */
     
 });