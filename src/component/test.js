const {PythonShell} = require('python-shell') ;

const hu =()=>{
    PythonShell.runString('x=1+1;print(x)', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
}

hu()





