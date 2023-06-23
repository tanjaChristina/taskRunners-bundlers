class MyExampleWebpackPlugin{
    apply(compiler){
        compiler.hooks.done.tap('MyExampleWebpackPlugin',(stats)=>{
            console.log('myExampleWebpackPlugin: -- done with compiling --');
        });
        compiler.hooks.afterEmit.tapAsync('MyExampleWebpackPlugin',(compilation, callback)=>{
            var fileProcessedText = "--- myExampleWebpackPlugin ---\n\t--- this file was just emitted: --- \n";
            for(var filename in compilation.assets){
                fileProcessedText += '\t  - ' + filename + '\n';
            }
            console.log(fileProcessedText);
            callback();
        });
    }
}

module.exports = MyExampleWebpackPlugin;