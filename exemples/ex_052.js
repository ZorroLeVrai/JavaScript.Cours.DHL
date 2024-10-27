class ClassWithStaticMethod {
  static staticProperty = 'valeur de staticProperty';
  static staticMethod() { return 'method statique'; }
  constructor(valeur) {
    this.valeur = valeur;
  }
}

console.log(ClassWithStaticMethod.staticProperty);  //valeur de staticProperty
console.log(ClassWithStaticMethod.staticMethod());  //method statique
const obj = new ClassWithStaticMethod("Test");
console.log(obj.staticProperty);  //undefined