const tokenizer = require('./tokenizer');
const parser = require('./parser');
const transformer = require('./transformer');
const generateCode = require('./generateCode');
module.exports = function compiler(input)
{
    /*
    1. Lexical analysis
    2. Syntax analysis
    3. Transformation
    4. Code generation
    */
    //return jsCode;
    //first is lexical analysis
    //using tokenizer
    const tokens = tokenizer(input);

    //second is syntax analysis
    const lispAST = parser(tokens);

    //third is transformation
    const jsAST = transformer(lispAST);

    //fourth is code generation


    //no. 3 and 4 before the return statement...
    return lispAST;

}