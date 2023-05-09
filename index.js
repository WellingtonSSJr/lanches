const express = require('express')
const app     = express()
const cardapio= require('./routes/cardapio')
const contato= require('./routes/contato')
const pedido= require('./routes/pedido')


// Handlebars - view engine
const exphbs = require('express-handlebars')

// partials
const hbs    = exphbs.create({
    partialsDir: ['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// arquivos staticos
app.use(express.static('public'))



let produtos = [
    {
        id: 1,
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/a0/2021/11/06/lanche-hamburguer-x-salada-1636227034415_v2_4x3.jpg',
        nome: 'Hamburguer da casa',
        descricao: 'Hamburguer especial com carne artesanal, queijo, salada e acompanhado de um delicioso molho caseiro',
        preco: 10.00
    },
    {
        id: 2,
        imagem: 'https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-batatas-fritas-com-cheeseburgers-em-fundo-escuro-lanche-prato-fast-food-torrada-hamburguer-jantar_140725-158687.jpg?w=2000',
        nome: 'Combo Hamburguer da Casa',
        descricao: 'Combo Hamburguer da Casa + batata palito crocante e molho especial',
        preco: 24.99
    },
    {
        id: 3,
        imagem: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
        nome: 'Combro 3 especial',
        descricao: '3 Hamburgueres da casa + Nuggets + Fritas +  50 salgadinhos',
        preco: 16.99
    },
    {
        id: 4,
        imagem: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
        nome: 'Combro 3 especial',
        descricao: '3 Hamburgueres da casa + Nuggets + Fritas +  50 salgadinhos',
        preco: 20.00
    },
    {
        id: 5,
        imagem: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
        nome: 'Combro 3 especial',
        descricao: '3 Hamburgueres da casa + Nuggets + Fritas +  50 salgadinhos',
        preco: 32.50
    },
    {
        id: 6,
        imagem: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
        nome: 'Combro 3 especial',
        descricao: '3 Hamburgueres da casa + Nuggets + Fritas +  50 salgadinhos',
        preco: 54.49
    }
]


app.use('/routes/', cardapio)
app.use('/routes/', contato)
app.use('/routes/', pedido)


app.get('/', (req, res)=>{

   
    res.render('produtos', {produtos})
})

app.get('/produto/:id', (req, res)=>{

   let idPro = req.params.id

  produtos.map((p)=>{ //posso usar map, forEach ou o find
    if(p.id == idPro){
        res.render('produto', {produto: p})
    }
  })

//   console.log(id, nome, descricao)

//   res.render('produto', {id, imagem, nome, descricao, preco} )
  
})



const port = 5000
app.listen(port, (error)=>{
    if(error) console.log(error)


    console.log(`Servidor rodando na porta ${port}`)
})