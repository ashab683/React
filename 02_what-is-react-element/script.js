 const container = React.createElement(
    'div',
    {className:'container',id:'container'},
   [
    React.createElement('section',{key:1},[
    React.createElement('p',{key:1},
        'the library for web and native user interfaces'
    ),

     React.createElement('img',{
        key:2, 
        style:{
            width:'200px',
            borderRadius:8,
            padding:16},
         src:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail'},
       
    ),

   ]),

    React.createElement('section',{key:2},[
    React.createElement('form',{key:1},
    
        React.createElement('div',{className:'input-group',key:1},
              React.createElement('label',{key:1,htmlFor:'username'},'username'),
            React.createElement('input',{key:2,id:'username'},)

        ),
         React.createElement('div',{className:'input-group',key:2},
              React.createElement('label',{key:1,htmlFor:'password'},'password'),
            React.createElement('input',{key:2,id:'password',type:'password'},)

        ),
    ),


   ]),
]
 )

 
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)


// const h2 = document.createElement('h2')
// h2.innerText = 'hello js'
// document.querySelector('#root').append(h2)


// console.dir(h2) 